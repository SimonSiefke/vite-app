import React from 'react'
import { jobs } from '../fixture'
import { useFavorites } from '../hooks/useFavorites'
import { JobList } from './JobList'
import { JobListWithPagination } from './JobListWithPagination'

export const PageCareerSearch: React.FC<{}> = () => {
  const { toggleFavorite, isFavorite } = useFavorites()
  return (
    <main>
      <div>
        <h2>Jobsuche</h2>
        <input type="search" placeholder="Stelle oder Schlagwort suchen" />
      </div>

      <JobListWithPagination
        jobs={jobs}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
      {/* <JobList
        jobs={jobs}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      /> */}
    </main>
  )
}
