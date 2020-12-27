export type Validated<E, A> =
  Valid<A> |
  Invalid<E>

export type Valid<A> = {
  type: "Valid"
  value: A
}

export type Invalid<E> = {
  type: "Invalid"
  error: E
}

export function valid<E, A>(value: A): Validated<E, A> {
  return {
    type: "Valid",
    value,
  }
}

export function invalid<E, A>(error: E): Validated<E, A> {
  return {
    type: "Invalid",
    error,
  }
}

export function pure<E, A>(value: A): Validated<E, A> {
  return valid(value)
}

export function map<E, A, B>(value: Validated<E, A>, f: (value: A) => B): Validated<E, B> {
  switch (value.type) {
    case "Valid":
      return valid(f(value.value))
    case "Invalid":
      return value
  }
}

export function errorMap<E, A, F>(value: Validated<E, A>, f: (error: E) => F): Validated<F, A> {
  switch (value.type) {
    case "Valid":
      return value
    case "Invalid":
      return invalid(f(value.error))
  }
}

export function andThen<E, A, B>(value: Validated<E, A>, f: (value: A) => Validated<E, B>): Validated<E, B> {
  switch (value.type) {
    case "Valid":
      return f(value.value)
    case "Invalid":
      return value
  }
}

type Combine<C, A = C, B = C> = (left: A, right: B) => C

export function combine<E, A, B, C>(left: Validated<E, A>, right: Validated<E, B>, f: Combine<C, A, B>, g: Combine<E>): Validated<E, C> {
  switch (left.type) {
    case "Valid":
      switch (right.type) {
        case "Valid":
          return valid(f(left.value, right.value))
        case "Invalid":
          return right
      }
      break // ???
    case "Invalid":
      switch (right.type) {
        case "Valid":
          return left
        case "Invalid":
          return invalid(g(left.error, right.error))
      }
  }
}

export function combineArray<E>(left: E[], right: E[]): E[] {
  return [...left, ...right]
}

export function combineArrayToLeft<E>(left: E[], right: E[]): E[] {
  return left.concat(...right)
}

export function combineObject<A>(left: { [key: string]: A }, right: { [key: string]: A }): { [key: string]: A } {
  return { ...left, ...right }
}

export function defaultCombineError<E>(): Combine<E> {
  // this isn't sound but it's a default for when E = A[]
  return combineArray as unknown as Combine<E>
}

export function traverse<E, A, B>(values: A[], f: (value: A) => Validated<E, B>, combine: Combine<E> = defaultCombineError<E>()): Validated<E, B[]> {
  const result = []
  const errors = []

  for (const value of values) {
    const v = f(value)
    switch (v.type) {
      case "Valid":
        result.push(v.value)
        break
      case "Invalid":
        errors.push(v.error)
        break
    }
  }

  return errors.length === 0
    ? valid(result)
    : invalid(errors.reduce(combine))
}

export function sequence<E, A>(values: Validated<E, A>[], combine: Combine<E> = defaultCombineError<E>()): Validated<E, A[]> {
  return traverse(values, x => x, combine)
}
