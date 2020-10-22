import React from 'react'
import { JobCategory } from './JobList'
import { JobToggleFavorite } from './JobToggleFavorite'

const getDisplayCategory = (category: JobCategory) => {
  switch (category) {
    case 'customerSupport':
      return 'Kundenservice'
    case 'finance':
      return 'Finanzen'
    case 'electricalEngineering':
      return 'Elektrotechnik'
    default:
      console.warn('unknown category')
      return ''
  }
}

export const JobListItem: React.FC<{
  title: string
  mainCategory: JobCategory
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
      <span>{getDisplayCategory(mainCategory)}</span>
      <span>{city}</span>
      <JobToggleFavorite
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
      />
    </li>
  )
}
