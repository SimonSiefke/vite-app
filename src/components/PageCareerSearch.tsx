import React from 'react'
import { jobs } from '../fixture'
import { useFavorites } from '../hooks/useFavorites'
import { JobList } from './JobList'

export const PageCareerSearch: React.FC<{}> = () => {
  const { toggleFavorite, isFavorite } = useFavorites()
  return (
    <main>
      <div>
        <h2>Jobsuche</h2>
        <input type="search" placeholder="Stelle oder Schlagwort suchen" />
      </div>

      <JobList
        jobs={jobs}
        toggleFavorite={toggleFavorite}
        isFavorite={isFavorite}
      />
    </main>
  )
}
