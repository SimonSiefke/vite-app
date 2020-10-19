export const setRemove = <T>(set: Set<T>, item: T) => {
  return new Set([...set].filter((existingItem) => existingItem !== item))
}

export const setAdd = <T>(set: Set<T>, item: T) => {
  return new Set([...set, item])
}
