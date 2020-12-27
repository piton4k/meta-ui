export type PathSegment = string | number
export type Path = PathSegment[]

export function makeKey(path: Path): string {
  return path.join(".")
}

export function extend(path: Path, ...segments: Path): Path {
  return segments.length === 0 ? path : [...path, ...segments]
}

export default class Cursor {
  readonly path: Path
  readonly key: string

  constructor(path: Path = []) {
    this.path = path
    this.key = makeKey(path)
  }

  down(...segments: Path): Cursor {
    return new Cursor(extend(this.path, ...segments))
  }
}
