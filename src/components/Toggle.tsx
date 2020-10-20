import React from 'react'
import { useState } from 'react'
import { ToggleContext, useToggleContext } from '../hooks/useToggleContext'

export const Toggle = ({ children }) => {
  const [on, setOn] = useState(false)
  const toggle = () => setOn((oldOn) => !oldOn)
  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  )
}

export const ToggleOn = () => {
  const { on, toggle } = useToggleContext()
  return on ? null : <button onClick={toggle}>toggle on</button>
}

export const ToggleOff = () => {
  const { on, toggle } = useToggleContext()
  return on ? <button onClick={toggle}> toggle off</button> : null
}
