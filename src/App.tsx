import React, { useState } from 'react'
import './App.css'
import { JobImageGrid } from './components/JobImageGrid'
import { MultiSelect } from './components/MultiSelect'
import { PageCareerDetails } from './components/PageCareerDetails'
import { PageCareerSearch } from './components/PageCareerSearch'
import { useSelected } from './hooks/useSelected'

function App() {
  const [count, setCount] = useState(10)
  const pathName = window.location.pathname
  const items = ['1', '2', '3']
  const {
    isSelected,
    selectedCount,
    selectedItems,
    toggleSelect,
  } = useSelected(items)
  let Page = null
  if (pathName === '/') {
    Page = <PageCareerSearch />
  } else if (pathName.startsWith('/JobDetails')) {
    const match = pathName.match(/\w+$/)
    if (match) {
      Page = <PageCareerDetails id={match[0]} />
    }
  } else if (pathName === '/imageGrid') {
    Page = (
      <JobImageGrid
        image1="//source.unsplash.com/random?1"
        image2="//source.unsplash.com/random?2"
        image3="//source.unsplash.com/random?3"
        image4="//source.unsplash.com/random?4"
        image5="//source.unsplash.com/random?5"
        image6="//source.unsplash.com/random?6"
      />
    )
  } else if (pathName === '/multi-select') {
    Page = (
      <MultiSelect
        items={items}
        isSelected={isSelected}
        label={'Items'}
        toggleSelect={toggleSelect}
      />
    )
  } else if (pathName === '/native-select') {
    Page = (
      <>
        <select multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <select multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </>
    )
  }
  return <div className="App">{Page}</div>
}

export default App
