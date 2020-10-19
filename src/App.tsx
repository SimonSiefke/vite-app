import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { PageCareerSearch } from './components/PageCareerSearch'
import { PageCareerDetails } from './components/PageCareerDetails'

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

  return (
    <div className="App">
      {Page}
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
