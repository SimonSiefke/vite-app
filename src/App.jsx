import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

const KununuScore1 = () => (
  <a
    href="https://www.kununu.com/de/enercity?utm_source=widget&utm_campaign=widget_selfservice_scoresmall"
    target="_blank"
    rel="nofollow"
  >
    <img
      src="https://www.kununu.com/de/partner/KlVXDFQ%3D/self-service-button?button-type=1"
      width="240"
      height="90"
      alt="kununu"
    />
  </a>
)

const KununuScore2 = () => (
  <a
    href="https://www.kununu.com/de/enercity?utm_source=widget&utm_campaign=widget_selfservice_scorelarge"
    target="_blank"
    rel="nofollow"
  >
    <img
      src="https://www.kununu.com/de/partner/KlVXDFQ%3D/self-service-button?button-type=3"
      width="150"
      height="100"
      alt="kununu"
    />
  </a>
)

// const KununuScore3 = () => {
//   const KUNUNU_HASH_ENERCITY = `KlVXDFQ=`
//   const KUNUNU_IFRAME_URL = `https://www.kununu.com/at/partner/${KUNUNU_HASH_ENERCITY}/v2-overall-large`

//   return (
//     <iframe
//       src={KUNUNU_IFRAME_URL}
//       width={300}
//       height={300}
//       style={{ border: 'none' }}
//     />
//   )
// }

const KununuScore3 = () => (
  <a
    href="https://www.kununu.com/de/enercity?utm_source=widget&utm_campaign=widget_selfservice_scorelarge"
    target="_blank"
    rel="nofollow"
  >
    <img
      src="https://www.kununu.com/de/partner/KlVXDFQ%3D/self-service-button?button-type=3"
      width="150"
      height="100"
      alt="kununu"
    />
  </a>
)

function App() {
  const [count, setCount] = useState(10)

  return (
    <div className="App">
      Option 1 <KununuScore1 />
      <br />
      <br />
      Option 2 <KununuScore2 />
      <br />
      <br />
      Option 3 <KununuScore3 />
    </div>
  )
}

export default App
