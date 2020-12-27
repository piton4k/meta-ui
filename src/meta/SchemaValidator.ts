import * as validations from "../util/validations"
import { StringDecoder } from "../util/validations"
import * as Validated from "../validated/Validated"
import Cursor from "./Cursor"
import * as Schema from "./Schema"
import { Errors, State } from "./SchemaRenderer"

export function validate<A = any>(schema: Schema.Schema, state: State): Validated.Validated<Errors, A> {
  function validate(schema: Schema.Schema, cursor: Cursor): Validated.Validated<Errors, any> {
    switch (schema.type) {
      case "Unit":
        return Validated.valid(schema.value)
      case "Boolean":
        return decode(cursor, state, validations.boolean())
      case "Enumeration":
        return decode(cursor, state, validations.enumeration(schema.values))
      case "String":
        return decode(cursor, state, Validated.valid)
      case "Record":
        return Validated.map(
          Validated.traverse(
            schema.fields,
            ({ name, schema }) => Validated.map(
              validate(schema, cursor.down(name)),
              value => [name, value],
            ),
            Validated.combineObject,
          ),
          Object.fromEntries,
        )
      case "Variant":
        const type = get(cursor.down("type"), state)
        if (type == null) return invalid(cursor, "Type is missing")

        const innerSchema = schema.cases.find(({ name }) => name === type)?.schema
        if (innerSchema == null) {
          const types = schema.cases.map(({ name }) => name)
          return invalid(cursor, `Invalid type "${type}", expected one of [${types.join(", ")}]`)
        }

        return validate(innerSchema, cursor.down(type))
      case "Sequence":
        const ids = get<string[]>(cursor.down("ids"), state) ?? []
        return Validated.traverse(
          ids,
          id => validate(schema.schema, cursor.down(id)),
          Validated.combineObject,
        )
      case "Lazy":
        return validate(schema.getSchema(), cursor)
      default:
        return invalid(cursor, `Invalid schema "${schema}"`)
    }
  }

  return validate(schema, new Cursor()) as Validated.Validated<Errors, A>
}

function get<A = string>(cursor: Cursor, state: State): A | undefined {
  return state[cursor.key] as A
}

function invalid<A>(cursor: Cursor, ...errors: string[]): Validated.Validated<Errors, A> {
  return Validated.invalid({ [cursor.key]: errors })
}

function decode<A>(cursor: Cursor, state: State, decoder: StringDecoder<A>): Validated.Validated<Errors, A> {
  const value = get(cursor, state)
  const validated = value != null
    ? decoder(value)
    : Validated.invalid<string[], A>(["Value is missing"])
  return Validated.errorMap(validated, errors => ({ [cursor.key]: errors }))
}

// export function loadState<A = any>(schema: Schema.Schema, value: A): State {
//   const result = {}
//
//   function load(cursor: Cursor): void {
//     switch (schema.type) {
//       case "Unit":
//         return {}
//       case "Boolean":
//         return {}
//       case "Enumeration":
//         break
//       case "String":
//         break
//       case "Record":
//         break
//       case "Variant":
//         break
//       case "Sequence":
//         break
//       case "Lazy":
//         break
//     }
//   }
//
//   load(new Cursor())
//
//   return result
// }
