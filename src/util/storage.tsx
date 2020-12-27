import { useEffect, useState } from "react"

type LocalStorage<A> = {
  load: () => A | null
  loadOrElse: (f: Default<A>) => A
  loadOrCreate: (f: Default<A>) => A
  save: (value: A) => void
  remove: () => void
}

type Default<A> = A | (() => A)

function getDefault<A>(def: Default<A>): A {
  return typeof def === "function"
    ? (def as () => A)()
    : def
}

export function localStorage<A>(key: string): LocalStorage<A> {
  function load(): A | null {
    const item = window.localStorage.getItem(key)
    if (item != null) {
      try {
        return JSON.parse(item)
      }
      catch (e) {
        console.error(`Error while loading ${key} -`, e)
      }
    }
    return null
  }

  function loadOrElse(f: Default<A>): A {
    return load() ?? getDefault(f)
  }

  function save(value: A): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  function loadOrCreate(f: Default<A>): A {
    return loadOrElse(() => {
      const result = getDefault(f)
      save(result)
      return result
    })
  }

  function remove(): void {
    window.localStorage.removeItem(key)
  }

  return {
    load,
    loadOrElse,
    loadOrCreate,
    save,
    remove,
  }
}

type UseStorage<A> = (value: Default<A>) => [A, (value: A) => void]

export function createUseStorage<A>(key: string): [LocalStorage<A>, UseStorage<A>] {
  const storage = localStorage<A>(key)

  function useStorage(defaultValue: Default<A>): ReturnType<UseStorage<A>> {
    const [value, setValue] = useState<A>(() => storage.load() ?? getDefault(defaultValue))
    useEffect(() => storage.save(value), [value])
    return [value, setValue]
  }

  return [storage, useStorage]
}
