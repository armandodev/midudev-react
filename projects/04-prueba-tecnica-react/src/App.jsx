import { useEffect, useState } from 'react'
import { CAT_ENDPOINT_FACT_URL, CAT_PREFIX_IMAGE_URL } from './constants'

export function App () {
  const [fact, setFact] = useState()
  const [imgInfo, setImgInfo] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_FACT_URL)
      .then(response => response.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstWord = fact.split(' ', 1).join(' ')

        setImgInfo(`${firstWord}?fontSize=50&fontColor=white&type=square`)
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p style={{ maxWidth: '500px' }}>{fact}</p>}
      {imgInfo &&
        <img
          style={{
            width: '90%',
            maxWidth: '500px'
          }}
          src={CAT_PREFIX_IMAGE_URL + imgInfo}
          alt={`Image extracted using the first three words for ${fact}`}
        />}
    </main>
  )
}
