import React from 'react'
import { JobToggleFavorite } from './JobToggleFavorite'

export interface Job {
  readonly title: string
  readonly mainCategory: string
  readonly city: string
  readonly id: string
}

const JobListItem: React.FC<{
  title: string
  mainCategory: string
  city: string
  id: string
  isFavorite: boolean
  toggleFavorite: () => void
}> = ({ isFavorite, title, mainCategory, city, id, toggleFavorite }) => {
  return (
    <li data-favorite={isFavorite} className="JobListItem">
      <h3>
        <a href={`/JobDetails/${id}`}>{title}</a>
      </h3>
      <span>{mainCategory}</span>
      <span>{city}</span>
      <JobToggleFavorite
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </li>
  )
}

export const JobList: React.FC<{
  jobs: readonly Job[]
  toggleFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
}> = ({ jobs, toggleFavorite, isFavorite }) => (
  <ul>
    {jobs.map(({ title, mainCategory, city, id }) => (
      <JobListItem
        title={title}
        mainCategory={mainCategory}
        city={city}
        id={id}
        key={id}
        toggleFavorite={() => toggleFavorite(id)}
        isFavorite={isFavorite(id)}
      />
    ))}
  </ul>
)