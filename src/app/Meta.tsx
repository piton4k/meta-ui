import { useEffect, useState } from "react"
import Form from "../form/Form"
import Toggle from "../form/Toggle"
import { metaSchema } from "../meta/metaSchema"
import * as Schema from "../meta/Schema"
import { FormState, renderSchema, State } from "../meta/SchemaRenderer"
import { validate } from "../meta/SchemaValidator"
import { whenDefined } from "../util"
import { createUseStorage } from "../util/storage"
import * as Validated from "../validated/Validated"
import style from "./App.module.styl"
import Card from "./Card"
import { Column, Columns } from "./Column"
import Json from "./Json"

export const [storage] = createUseStorage<Schema.Schema>("schema")

export default function Meta() {
  const [state, setState] = useState<State>(storage.loadOrElse(Schema.unit))
  const formState = new FormState(state, setState)

  const validatedData = validate<Schema.Schema>(metaSchema, state)
  const schema = validatedData.type === "Valid" ? validatedData.value : undefined
  const errors = validatedData.type === "Invalid" ? validatedData.error : undefined

  const [state1, setState1] = useState<State>({})
  const formState1 = new FormState(state1, setState1)

  const validatedData1 = Validated.andThen(validatedData, schema => validate(schema, state1))
  const isValid = validatedData1.type === "Valid"
  const isInvalid = validatedData1.type === "Invalid"
  const value = validatedData1.type === "Valid" ? validatedData1.value : undefined
  const errors1 = validatedData1.type === "Invalid" ? validatedData1.error : undefined

  useEffect(() => {
    if (schema != null) storage.save(schema)
  }, [schema])

  const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
  const [method, setMethod] = useState(methods[1])
  const [url, setUrl] = useState("//localhost:8080")
  const onSubmit = () => {
    if (isValid) {
      fetch(url, { method: "POST", body: JSON.stringify(value) })
        .then(r => r.json())
        .then(console.log)
        .catch(console.warn)
    }
  }

  return <Columns>
    <Column>
      <Card className={style.form} title="Schema">
        <Form>
          {renderSchema(metaSchema, formState, errors)}
        </Form>

        <h2>State</h2>
        <Json>{state}</Json>

        <h2>Result</h2>
        <Json>{validatedData}</Json>
      </Card>
    </Column>

    {schema && <Column>
      <Card title="Form">
        <Form>
          {renderSchema(schema, formState1, errors1)}
        </Form>

        <h2>State</h2>
        <Json>{state1}</Json>

        <h2>Result</h2>
        <Json>{validatedData1}</Json>

        <h2>Request</h2>
        <Toggle values={methods} value={method} onChange={whenDefined(setMethod)}/>
        <input type="string" value={url} onChange={e => setUrl(e.target.value)}/>
        <button type="button" onClick={onSubmit} disabled={isInvalid}>Submit</button>
      </Card>
    </Column>}
  </Columns>
}
