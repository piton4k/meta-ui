export function whenDefined<A>(f: (value: A) => void): (value: A | undefined) => void {
  return value => {
    if (value != null) f(value)
  }
}
