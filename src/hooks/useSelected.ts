import { useState } from 'react'
import { setAdd, setRemove } from '../util'

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
  }
}
