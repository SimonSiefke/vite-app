import { useEffect } from 'react'
import { useSelected } from './useSelected'

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
  const {
    isSelected: isFavorite,
    selectedCount: favoritesCount,
    toggleSelect: toggleFavorite,
    selectedItems: favorites,
  } = useSelected(getStoredFavorites())
  useEffect(() => {
    setStoredFavorites([...favorites])
  }, [favorites])
  return {
    toggleFavorite,
    isFavorite,
    favoritesCount,
  }
}
