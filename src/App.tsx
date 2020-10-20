import React, { useState } from 'react'
import './App.css'
import { MultiSelect } from './components/MultiSelect'
import { PageCareerDetails } from './components/PageCareerDetails'
import { PageCareerSearch } from './components/PageCareerSearch'
import { useSelected as useSelectedItems } from './hooks/useSelected'

function App() {
  const [count, setCount] = useState(10)
  const pathName = window.location.pathname
  let Page = null
  if (pathName === '/') {
    Page = <PageCareerSearch />
  } else if (pathName.startsWith('/JobDetails')) {
    const match = pathName.match(/\w+$/)
    if (match) {
      Page = <PageCareerDetails id={match[0]} />
    }
  }
  console.log(window.location.pathname)

  const [items] = useState(['a', 'b', 'c'])
  const { isSelected, toggleSelect } = useSelectedItems()

  return (
    <div className="App">
      {/* <Toggle>
        <ToggleOn />
        <ToggleOff />
      </Toggle> */}

      <MultiSelect
        items={items}
        isSelected={isSelected}
        toggleSelect={toggleSelect}
        label="Medientyp"
      />
      {/* {Page} */}
      {/* Option 1 <KununuScore1 />
      <br />
      <br />
      Option 2 <KununuScore2 />
      <br />
      <br />
      Option 3 <KununuScore3 /> */}
    </div>
  )
}

export default App
