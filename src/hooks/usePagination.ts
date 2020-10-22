import { useState } from 'react'

function clamp(value: number, min: number, max: number) {
  return min < max
    ? value < min
      ? min
      : value > max
      ? max
      : value
    : value < max
    ? max
    : value > min
    ? min
    : value
}

/**
 *  based on https://dev.to/admantium/react-creating-a-custom-hook-for-pagination-jni
 */
export const usePagination = <T>(data: readonly T[], itemsPerPage: number) => {
  const minPage = 1
  const maxPage = Math.ceil(data.length / itemsPerPage)
  const [currentPage, setCurrentPage] = useState(1)

  const begin = (currentPage - 1) * itemsPerPage
  const end = begin + itemsPerPage
  const currentData = data.slice(begin, end)

  const canGoPrev = currentPage > 1
  const canGoNext = currentPage < maxPage

  const next = () =>
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))

  const prev = () =>
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1))

  const jump = (pageNumber: number) =>
    setCurrentPage(() => clamp(pageNumber, minPage, maxPage))

  return {
    next,
    prev,
    jump,
    currentData,
    currentPage,
    maxPage,
    canGoPrev,
    canGoNext,
  }
}
