import { createContext, useContext } from 'react'

interface Context {
  readonly isSelected: (item: string) => boolean
  readonly toggleSelect: (item: string) => void
}

export const MultiSelectContext = createContext({} as Context)

export const useMultiSelectContext = () => {
  const context = useContext(MultiSelectContext)

  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`,
    )
  }
  return context
}
