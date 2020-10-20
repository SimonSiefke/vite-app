import React, { useRef, useState } from 'react'

const nextId = (() => {
  let id = 0
  return () => id++
})()

const useToggle = (): [boolean, () => void] => {
  const [on, setOn] = useState(false)
  const toggle = () => setOn((oldOn) => !oldOn)
  return [on, toggle]
}

export const MultiSelect: React.FC<{
  items: string[]
  toggleSelect: (item: string) => void
  isSelected: (item: string) => boolean
  label: string
}> = ({ items, toggleSelect, isSelected, label }) => {
  const [activeIndex, setActiveIndex] = useState(-1)
  const [isOpen, toggleIsOpen] = useToggle()
  const listBoxId = useRef(nextId())
  const ariaActiveDescendant =
    activeIndex === -1 ? '' : `listbox${listBoxId.current}-${activeIndex}`

  const handleClick = (index: number) => {
    setActiveIndex(index)
    toggleSelect(items[index])
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        handleClick(activeIndex)
        break
      case 'ArrowDown':
        setActiveIndex((activeIndex + 1) % items.length)
        break
      case 'ArrowUp':
        setActiveIndex((activeIndex - 1 + items.length) % items.length)
        break
      case 'Home':
        setActiveIndex(0)
        break
      case 'End':
        setActiveIndex(items.length - 1)
        break
      default:
        if (/\w/.test(event.key)) {
          const remainingItems = items.slice(activeIndex)
          const startsWithIndex = remainingItems.findIndex((item) =>
            item.startsWith(event.key),
          )
          if (startsWithIndex !== -1) {
            setActiveIndex(
              startsWithIndex + items.length - remainingItems.length,
            )
          }
        }
    }
  }
  return (
    <div>
      <button aria-haspopup="listbox" onClick={toggleIsOpen}>
        {label}
      </button>
      <ul
        id={`listbox${listBoxId.current}`}
        role="listbox"
        tabIndex={0}
        aria-label={label}
        aria-multiselectable={true}
        aria-activedescendant={ariaActiveDescendant}
        onKeyDown={handleKeyDown}
        data-open={isOpen}
      >
        {items.map((item, index) => (
          <li
            id={`listbox${listBoxId.current}-${index}`}
            key={item}
            onClick={() => handleClick(index)}
            role="option"
            aria-selected={isSelected(item)}
            data-focused={index === activeIndex}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
