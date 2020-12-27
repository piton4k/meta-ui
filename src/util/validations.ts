import * as Validated from "../validated/Validated"

type StringValidated<A> = Validated.Validated<string[], A>

export type StringDecoder<A> = (input: string) => StringValidated<A>
type StringEncoder<A> = (value: A) => string

type ErrorFormat = (input: string) => string

const just = (error: string): ErrorFormat => () => error
const expected = (what: string): ErrorFormat => input => `Expected ${what}, got: "${input}"`

function valid<A>(value: A): StringValidated<A> {
  return Validated.valid(value)
}

function invalid(error: string): Validated.Validated<string[], any> {
  return Validated.invalid([error])
}

export function nonEmpty(onError: ErrorFormat = just("Input is empty")): StringDecoder<string> {
  return input => input.length === 0
    ? Validated.invalid([onError(input)])
    : Validated.valid(input)
}

const defaultMessage = (input: string, e: Error) => e?.message ?? `${e}`

export function attempt<A>(f: (input: string) => A, message: (input: string, e: Error) => string = defaultMessage): StringDecoder<A> {
  return input => {
    try {
      return valid(f(input))
    } catch (e) {
      return invalid(message(input, e))
    }
  }
}

export function boolean(onError: ErrorFormat = expected("boolean")): StringDecoder<boolean> {
  return input => {
    switch (input) {
      case "True":
        return valid(true)
      case "False":
        return valid(false)
      default:
        return invalid(onError(input))
    }
  }
}

export function float(onError: ErrorFormat = expected("float")): StringDecoder<number> {
  return attempt(parseFloat, onError)
}

export function int(onError: ErrorFormat = expected("integer")): StringDecoder<number> {
  return attempt(parseInt, onError)
}

export function json<A>(onError: ErrorFormat = expected("json")): StringDecoder<A> {
  return attempt(input => JSON.parse(input) as A, onError)
}

export function enumeration(values: string[], onError: ErrorFormat = expected(`one of [${values.join(", ")}]`)): StringDecoder<string> {
  return input => {
    const value = values.find(e => e === input)
    return value != null
      ? valid(value)
      : invalid(onError(input))
  }
}

export function required<A>(decoder: StringDecoder<A | undefined>): StringDecoder<A> {
  return input => {
    const result = decoder(input)
    return result != null
      ? valid(result)
      : invalid("Value is missing")
  }
}

export function optional<A>(decoder: StringDecoder<A>): StringDecoder<A | undefined> {
  return input => {
    const result = decoder(input)
    switch (result.type) {
      case "Valid":
        return result
      case "Invalid":
        return valid(undefined)
    }
  }
}

export type StringFormat<A> = {
  decode: StringDecoder<A>
  encode: StringEncoder<A>
}

export function stringFormat<A>(decode: StringDecoder<A>, encode: StringEncoder<A> = value => `${value}`): StringFormat<A> {
  return { decode, encode }
}

export function nonEmptyFormat(onError: ErrorFormat = just("Input is empty")): StringFormat<string> {
  return stringFormat(nonEmpty(onError), value => value)
}

export function floatFormat(onError: ErrorFormat = expected("float")): StringFormat<number> {
  return stringFormat(float(onError))
}

export function intFormat(onError: ErrorFormat = expected("integer")): StringFormat<number> {
  return stringFormat(int(onError))
}

export function jsonFormat<A>(indent: number = 2, onError: ErrorFormat = expected("json")): StringFormat<A> {
  return stringFormat(json(onError), value => JSON.stringify(value, null, indent))
}
