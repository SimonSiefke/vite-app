import { useState, useEffect } from 'react'
import { setRemove, setAdd } from '../util'

const getStoredFavorites = () => {
  try {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'))
    if (!Array.isArray(storedFavorites)) {
      return []
    }
    if (!storedFavorites.every((item) => typeof item === 'string')) {
      return []
    }
    return storedFavorites
  } catch {
    return []
  }
}

const setStoredFavorites = (favorites: string[]) => {
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

export const useFavorites = () => {
  const [favorites, setFavorites] = useState(
    new Set<string>(getStoredFavorites()),
  )
  useEffect(() => {
    setStoredFavorites([...favorites])
  }, [favorites])
  const toggleFavorite = (favorite: string) => {
    if (favorites.has(favorite)) {
      setFavorites(setRemove(favorites, favorite))
    } else {
      setFavorites(setAdd(favorites, favorite))
    }
  }
  const isFavorite = (favorite: string) => favorites.has(favorite)
  return {
    toggleFavorite,
    isFavorite,
    favoritesCount: favorites.size,
  }
}
