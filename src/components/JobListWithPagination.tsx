import React, { useState } from 'react'
import { usePagination } from '../hooks/usePagination'
import { Job } from './JobList'
import { JobListItem } from './JobListItem'

export const JobListWithPagination: React.FC<{
  jobs: readonly Job[]
  toggleFavorite: (id: string) => void
  isFavorite: (id: string) => boolean
}> = ({ jobs, isFavorite, toggleFavorite }) => {
  const {
    currentData: currentJobs,
    prev,
    next,
    canGoPrev,
    canGoNext,
    currentPage,
    jump,
  } = usePagination(jobs, 4)
  return (
    <>
      <ul>
        {currentJobs.map(({ city, id, mainCategory, timeType, title }) => (
          <JobListItem
            city={city}
            id={id}
            mainCategory={mainCategory}
            title={title}
            isFavorite={isFavorite(id)}
            toggleFavorite={() => toggleFavorite(id)}
          />
        ))}
      </ul>
      <button onClick={prev} disabled={!canGoPrev}>
        previous
      </button>
      <input
        type="number"
        value={currentPage}
        onInput={(event) => {
          jump(parseInt(event.currentTarget.value))
        }}
        style={{ width: '30px' }}
      />
      <button onClick={next} disabled={!canGoNext}>
        next
      </button>
    </>
  )
}
