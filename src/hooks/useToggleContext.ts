import { createContext, useContext } from 'react'

export const ToggleContext = createContext({})

export const useToggleContext = () => {
  const context = useContext(ToggleContext)
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the Toggle component`,
    )
  }
  return context as {
    on: boolean
    toggle: () => void
  }
}
