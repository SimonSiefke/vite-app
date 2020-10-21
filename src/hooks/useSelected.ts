import { useState } from 'react'

const setRemove = <T>(set: Set<T>, item: T) => {
  return new Set([...set].filter((existingItem) => existingItem !== item))
}

const setAdd = <T>(set: Set<T>, item: T) => {
  return new Set([...set, item])
}

export const useSelected = (initialSelected = []) => {
  const [selectedItems, setSelectedItems] = useState(
    new Set<string>(initialSelected),
  )
  const toggleSelect = (item: string) => {
    if (selectedItems.has(item)) {
      setSelectedItems(setRemove(selectedItems, item))
    } else {
      setSelectedItems(setAdd(selectedItems, item))
    }
  }
  const isSelected = (item: string) => selectedItems.has(item)
  return {
    toggleSelect,
    isSelected,
    selectedCount: selectedItems.size,
    selectedItems,
  }
}
