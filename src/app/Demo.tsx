import React, { useState } from "react"
import Form from "../form/Form"
import * as Schema from "../meta/Schema"
import { FormState, renderSchema, State } from "../meta/SchemaRenderer"
import { validate } from "../meta/SchemaValidator"
import Card from "./Card"
import Json from "./Json"

export default function Demo() {
  const schema = demoSchema
  const [state, setState] = useState<State>({})
  const formState = new FormState(state, setState)
  const validatedData = validate(schema, state)
  const errors = validatedData.type === "Invalid" ? validatedData.error : undefined

  return <>
    <Card expandable title="Schema">
      <Json>{schema}</Json>
    </Card>

    <Card title="Form">
      <Form>
        {renderSchema(schema, formState, errors)}
      </Form>
    </Card>

    <Card title="State">
      <Json>{state}</Json>
    </Card>

    <Card title="Result">
      <Json>{validatedData}</Json>
    </Card>
  </>
}

const fruits = ["Apples", "Bananas", "Oranges"]
const demoSchema: Schema.Schema = Schema.record({
  name: Schema.string,
  fruit: Schema.enumeration(fruits),
  contact: Schema.variant({
    Address: Schema.record({
      city: Schema.string,
      street: Schema.string,
      country: Schema.string,
    }),
    Phone: Schema.string,
  }),
  games: Schema.sequence(
    Schema.string,
  ),
  consent: Schema.boolean,
})
