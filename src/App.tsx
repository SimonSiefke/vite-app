import React, { useState } from 'react'
import './App.css'
import { JobImageGrid } from './components/JobImageGrid'
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
  }
  return <div className="App">{Page}</div>
}

export default App
