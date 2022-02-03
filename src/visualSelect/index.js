import React, { useState } from 'react'
import _ from 'underscore'

export default (props) => {
  const {
    values,
    customOnValueChanged,
    errors,
    item: { label, id, props: itemProps = {} }
  } = props

  const [selectedItems, setSelectedItems] = useState(values[id] ? (values[id]).filter(a => a) : [])

  const { items, isGrid = true, cols = 1, maxSelectionAllowed, itemHeight = 'h-72', ContentComponent } = itemProps

  const onClickItem = (e, item) => {
    e.preventDefault()
    e.stopPropagation()
    const { id } = item
    const isSelected = selectedItems.includes(id)
    var newSelectedItems
    if (isSelected) {
      newSelectedItems = selectedItems.filter(a => a !== id)
    } else {
      newSelectedItems = selectedItems.length < maxSelectionAllowed ? [...selectedItems, id] : [...selectedItems]
    }


    setSelectedItems(newSelectedItems)
    customOnValueChanged && customOnValueChanged(newSelectedItems)
  }

  const renderThumbnail = (item) => {
    const isSelected = selectedItems.includes(item.id)
    return <div
      onClick={e => onClickItem(e, item)}
      className={`
        w-full
        cursor-pointer
        rounded-2xl
        overflow-hidden
        group
        relative
        transform
        transition
        duration-200
        ease-in-out
        ${itemHeight}
        ${isSelected ? 'border-4' : 'border-2'}
        ${isSelected ? 'opacity-100' : 'opacity-90 hover:opacity-100'}
        ${isSelected ? 'scale-105' : 'hover:scale-105'}
        ${isSelected ? 'border-pink-600' : 'border-warmGray-200 hover:border-pink-600'}
        `}>
      <div className={`
        absolute
        left-1
        right-1
        bottom-1
        top-1
        flex
        rounded-xl
        overflow-hidden
        justify-center
        group-hover:flex
        bg-warmGray-100
        bg-opacity-80
        group-hover:bg-opacity-100
    `}>
        <ContentComponent item={item} />
      </div>
    </div>
  }

  const renderItem = (item, index) => <li className={`w-full`}> {renderThumbnail(item)}</li>

  return <ul className={`grid-cols-${cols} grid gap-x-5 gap-y-7 py-4`}>
    {(items && items.length > 0) && items.map(renderItem)}
  </ul>
}
