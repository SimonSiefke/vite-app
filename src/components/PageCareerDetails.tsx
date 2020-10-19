import React from 'react'
import { jobs } from '../fixture'
import { useFavorites } from '../hooks/useFavorites'
import { JobToggleFavorite } from './JobToggleFavorite'

export const PageCareerDetails: React.FC<{
  id: string
}> = ({ id }) => {
  const job = jobs.find((job) => job.id === id)
  if (!job) {
    return <p>404</p>
  }
  const { title, city } = job
  const { isFavorite, toggleFavorite } = useFavorites()
  return (
    <main>
      <img
        src="//source.unsplash.com/random"
        alt=""
        width="400"
        height="400"
        style={{ objectFit: 'cover' }}
      />
      <h1>{title}</h1>
      <a href="/">Stellen bei enercity</a>
      <dl>
        <dt>Location</dt>
        <dd>{city}</dd>
      </dl>
      <a href="http://google.com">Jetzt bewerben!</a>
      <JobToggleFavorite
        isFavorite={isFavorite(id)}
        toggleFavorite={() => toggleFavorite(id)}
      />
    </main>
  )
}
