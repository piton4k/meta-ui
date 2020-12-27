import React from "react"
import Field from "../form/Field"
import TextInput from "../form/TextInput"
import Toggle from "../form/Toggle"
import { makeIdGenerator } from "../util/IdGenerator"
import Cursor from "./Cursor"
import * as Schema from "./Schema"

export type State<A = any> = {
  [key: string]: A
}

export type SetState<A = any> = (state: State<A>) => void

type Endo<A> = (value: A) => A

export class FormState {
  private readonly state: State
  private readonly setState: SetState

  constructor(state: State, setState: SetState) {
    this.state = state
    this.setState = setState
  }

  get<A = string>(cursor: Cursor): A | undefined {
    return this.state[cursor.key] as A | undefined
  }

  set<A>(cursor: Cursor, value: A): void {
    this.mutate(FormState.set(cursor, value))
  }

  setMany(newState: State): void {
    this.mutate(FormState.setMany(newState))
  }

  remove(cursor: Cursor): void {
    this.mutate(FormState.remove(cursor))
  }

  removeAll(cursor: Cursor): void {
    this.mutate(FormState.removeAll(cursor))
  }

  update<A>(cursor: Cursor, value: A | undefined): void {
    this.mutate(FormState.update(cursor, value))
  }

  modify<A>(cursor: Cursor, f: (value: A | undefined) => A | undefined): void {
    this.mutate(FormState.modify(cursor, f))
  }

  mutate(...mutations: Endo<State>[]): void {
    let result = this.state
    for (const f of mutations) {
      result = f(result)
    }
    this.setState(result)
  }

  static set<A>(cursor: Cursor, value: A): Endo<State> {
    return FormState.modify<A>(cursor, () => value)
  }

  static setMany(newState: State): Endo<State> {
    return state => ({ ...state, ...newState })
  }

  static remove(cursor: Cursor): Endo<State> {
    return FormState.modify(cursor, () => undefined)
  }

  static removeAll(cursor: Cursor): Endo<State> {
    return state => {
      const newState = { ...state }
      for (const k of Object.keys(newState)) {
        if (k.startsWith(cursor.key)) delete newState[k]
      }
      return newState
    }
  }

  static update<A>(cursor: Cursor, value: A | undefined): Endo<State> {
    return FormState.modify(cursor, () => value)
  }

  static modify<A>(cursor: Cursor, f: (value: A | undefined) => A | undefined): Endo<State> {
    return state => {
      const value = f(state[cursor.key] as A | undefined)
      if (value != null) {
        return { ...state, [cursor.key]: value }
      }
      else {
        const { [cursor.key]: value, ...newState } = state
        return newState
      }
    }
  }
}

export type Errors = State<string[]>

const idGen = makeIdGenerator()

export function renderSchema(schema: Schema.Schema, formState: FormState, errors: Errors = {}): React.ReactNode {
  function render(schema: Schema.Schema, cursor: Cursor): JSX.Element | null {
    const value = formState.get(cursor)
    function update<A = any>(value: A) {
      formState.update(cursor, value)
    }

    switch (schema.type) {
      case "Unit":
        return null
      case "Boolean":
        return <Field errors={errors[cursor.key]}>
          <Toggle values={["True", "False"]} value={value} onChange={update} allowEmpty/>
        </Field>
      case "Enumeration":
        return <Field errors={errors[cursor.key]}>
          <Toggle values={schema.values} value={value} onChange={update} allowEmpty/>
        </Field>
      case "String":
        return <Field errors={errors[cursor.key]}>
          <TextInput value={value ?? ""} onChange={update}/>
        </Field>
      case "Record":
        return <div>
          {schema.fields.map(({ name, schema }) => {
            if (schema.type === "Unit") return null
            const there = cursor.down(name)
            return <div key={there.key}>
              <div>{name}</div>
              {render(schema, there)}
            </div>
          })}
        </div>
      case "Variant":
        const typeCursor = cursor.down("type")
        const type = formState.get(typeCursor)
        const innerSchema = schema.cases.find(({ name }) => name === type)?.schema

        return <div>
          <Toggle values={schema.cases.map(({ name }) => name)} value={type} onChange={value => formState.update(typeCursor, value)}/>
          {type && innerSchema && render(innerSchema, cursor.down(type))}
        </div>
      case "Sequence":
        const idsCursor = cursor.down("ids")
        const ids = formState.get<string[]>(idsCursor) ?? []
        const add = () => formState.set(idsCursor, [...ids, idGen.next()])
        const rem = (id: string) => () => {
          formState.mutate(
            FormState.set(idsCursor, ids.filter(i => i !== id)),
            FormState.removeAll(cursor.down(id)),
          )
        }

        return <div>
          <button type="button" onClick={add}>Add</button>
          {ids.map(id => {
            const there = cursor.down(id)
            return <div key={there.key}>
              <button type="button" onClick={rem(id)}>Remove</button>
              {render(schema.schema, there)}
            </div>
          })}
        </div>
      case "Lazy":
        return render(schema.getSchema(), cursor)
    }
  }

  return render(schema, new Cursor())
}
