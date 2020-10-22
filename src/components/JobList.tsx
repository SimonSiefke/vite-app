import React from 'react'
import { JobToggleFavorite } from './JobToggleFavorite'
import { use } from 'react-use-pagination'
import { JobListItem } from './JobListItem'

export type JobCategory =
  | 'finance'
  | 'customerSupport'
  | 'electricalEngineering'

export type JobTimeType = 'partTime' | 'fullTime'

export interface Job {
  readonly title: string
  readonly mainCategory: JobCategory
  readonly city: string
  readonly id: string
  readonly url: string
  readonly timeType: JobTimeType
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

export const JobListWithPagination = () => {}
