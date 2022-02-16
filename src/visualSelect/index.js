import React, { useState } from 'react'
import _ from 'underscore'

export default (props) => {
  const {
    value,
    customOnValueChanged,
    item: { props: itemProps = {} }
  } = props

  const [selectedItems, setSelectedItems] = useState(value ? (value).filter(a => a) : [])

  const {
    items,
    cols = 1,
    maxSelectionAllowed,
    itemHeight = 'h-72',
    ContentComponent,
    highlightColor = 'pink-600',
    baseColor = 'warmGray-100',
    useLatestSelection = false
  } = itemProps

  const onClickItem = (e, item) => {
    e.preventDefault()
    e.stopPropagation()
    if (props.disabled || props.readOnly) {
      return
    }
    const { id } = item
    const isSelected = selectedItems.includes(id)
    var newSelectedItems
    if (isSelected) {
      newSelectedItems = selectedItems.filter(a => a !== id)
    } else {
      if (useLatestSelection) {
        newSelectedItems = [...selectedItems, id]
        if (newSelectedItems.length > maxSelectionAllowed) {
          newSelectedItems.splice(0, 1)
        }
      }
      else {
        newSelectedItems = selectedItems.length < maxSelectionAllowed ? [...selectedItems, id] : [...selectedItems]
      }
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
        ${(!props.disabled && !props.readOnly && isSelected) ? 'border-4' : 'border-4'}
        ${(!props.disabled && !props.readOnly && isSelected) ? 'opacity-100' : 'opacity-70 hover:opacity-80'}
        ${(!props.disabled && !props.readOnly && isSelected) ? 'scale-105' : 'hover:scale-105'}
        ${(!props.disabled && !props.readOnly && isSelected) ? `border-${highlightColor}` : `border-${baseColor} ${(!props.disabled && !props.readOnly && isSelected) ? 'hover:border-${highlightColor}' : ''}`}
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
        bg-${baseColor}
        bg-opacity-80
        group-hover:bg-opacity-100
    `}>
        <ContentComponent item={item} />
      </div>
    </div>
  }

  const renderItem = (item, index) => <li className={`w-full`}> {renderThumbnail(item)}</li>

  return <ul className={`grid-cols-${cols} grid gap-x-6 gap-y-6 py-0`}>
    {(items && items.length > 0) && items.map(renderItem)}
  </ul>
}
