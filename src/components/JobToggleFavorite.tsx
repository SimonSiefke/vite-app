import React from 'react'

export const JobToggleFavorite: React.FC<{
  isFavorite: boolean
  toggleFavorite: () => void
}> = ({ isFavorite, toggleFavorite }) => (
  <button
    className="JobToggleFavorite"
    aria-label={
      isFavorite ? 'Zu Favoriten hinzufuegen' : 'Aus Favoriten entfernen'
    }
    onClick={toggleFavorite}
    aria-pressed={isFavorite}
  >
    {isFavorite ? '❤️' : '🖤'}
  </button>
)
