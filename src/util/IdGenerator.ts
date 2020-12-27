export type IdGenerator = {
  next: () => number
}

export function makeIdGenerator(start: number = 0) {
  let current = 0
  const next = () => {
    const result = current
    current += 1
    return result
  }

  return { next }
}
