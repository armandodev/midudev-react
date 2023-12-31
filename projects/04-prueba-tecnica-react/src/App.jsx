import { useEffect, useState } from 'react'
import { CAT_ENDPOINT_FACT_URL, CAT_PREFIX_IMAGE_URL, QUANTITY_WORDS } from './constants'
import './App.css'

export function App () {
  const [fact, setFact] = useState()
  const [imgInfo, setImgInfo] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT_URL)
      .then(response => response.json()) // TODO: handle errors if !response.ok
      .then(data => setFact(data.fact))
  }, [])

  useEffect(() => {
    if (!fact) return

    const firstWords = fact.split(' ', QUANTITY_WORDS).join(' ')
    setImgInfo(`${firstWords}?fontSize=20&fontColor=white&type=square`)
  }, [fact])

  return (
    <main id='main'>
      <h1 id='m-title'>App de gatitos</h1>
      {fact && <p id='fact-paragraph'>{fact}</p>}
      {imgInfo &&
        <img
          id='cat-image'
          src={CAT_PREFIX_IMAGE_URL + imgInfo}
          alt={`Image extracted using the first three words for ${fact}`}
        />}
    </main>
  )
}
