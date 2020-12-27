export type Schema =
  Unit |
  Boolean |
  Enumeration |
  String |
  Record |
  Variant |
  Sequence |
  Lazy

type Unit<A = any> = {
  type: "Unit"
  value: A
}

type Boolean = {
  type: "Boolean"
}

type Enumeration = {
  type: "Enumeration"
  values: string[]
}

type String = {
  type: "String"
}

type Record = {
  type: "Record"
  fields: Field[]
}

type Field = {
  name: string
  schema: Schema
}

type Variant = {
  type: "Variant"
  cases: Case[]
}

type Case = {
  name: string
  schema: Schema
}

type Sequence = {
  type: "Sequence"
  schema: Schema
}

type Lazy = {
  type: "Lazy"
  getSchema: () => Schema
}

export function unit<A = any>(value: A = undefined as unknown as A): Unit<A> {
  return {
    type: "Unit",
    value,
  }
}

export const boolean: Boolean = {
  type: "Boolean",
}

export function enumeration(values: string[]): Enumeration {
  return {
    type: "Enumeration",
    values,
  }
}

export const string: String = {
  type: "String",
}

export function record(fields: { [key: string]: Schema }): Record {
  return {
    type: "Record",
    fields: Object.entries(fields).map(([name, schema]) => ({ name, schema })),
  }
}

export function variant(cases: { [key: string]: Schema }): Variant {
  return {
    type: "Variant",
    cases: Object.entries(cases).map(([name, schema]) => ({ name, schema })),
  }
}

export function sequence(schema: Schema): Sequence {
  return {
    type: "Sequence",
    schema,
  }
}

export function lazy(getSchema: () => Schema): Lazy {
  return {
    type: "Lazy",
    getSchema,
  }
}

export function fix(f: (self: Schema) => Schema): Schema {
  return f(lazy(() => fix(f)))
}
