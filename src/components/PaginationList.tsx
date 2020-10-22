import React, { useState } from 'react'

type PaginationListProps<T = unknown> = React.FC<{
  visibleItems: number
  items: readonly T[]
  renderItem: (item: T) => React.ReactNode
}>

const usePagination = () => {}

export const PaginationList = ({ visibleItems, items, renderItem }) => {
  const [startIndex, setStartIndex] = useState(0)
  const currentItems = items.slice(startIndex, startIndex + visibleItems)
  return <ul>{currentItems.map(renderItem)}</ul>
}
