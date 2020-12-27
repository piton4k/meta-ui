import * as Schema from "./Schema"

export const metaSchema = Schema.fix(self => Schema.variant({
  Unit: Schema.unit(Schema.unit()),
  Boolean: Schema.unit(Schema.boolean),
  Enumeration: Schema.record({
    type: Schema.unit("Enumeration"),
    values: Schema.sequence(Schema.string),
  }),
  String: Schema.unit(Schema.string),
  Record: Schema.record({
    type: Schema.unit("Record"),
    fields: Schema.sequence(Schema.record({
      name: Schema.string,
      schema: self,
    })),
  }),
  Variant: Schema.record({
    type: Schema.unit("Variant"),
    cases: Schema.sequence(Schema.record({
      name: Schema.string,
      schema: self,
    })),
  }),
  Sequence: Schema.record({
    type: Schema.unit("Sequence"),
    schema: self,
  }),
}))
