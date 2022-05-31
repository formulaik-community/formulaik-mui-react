import React from 'react'
import IconButton from '@mui/material/IconButton'

import { Trash, ChevronLeft, ChevronRight } from 'react-feather'

export default (props) => {
  const {
    summary,
    title,
    children,
    onMoveDownRequired,
    onRemoveRequired,
    onMoveUpRequired,
    canRemove,
    canMoveUp,
    canMoveDown,
    showControls,
    disabled = false,
    readOnly = false,
    value,
    index,
    className,
    error
  } = props

  return <div className={`
          border-warmGray-200
          hover:border-warmGray-300
          transition-all
          ease-in-out
          duration-300
          border-2
          py-1
          rounded-xl ${className}`}>
    <div className='
    border-b
    border-warmGray-100
    px-2
    py-1
    flex justify-end mr-4'>
      {summary && summary({ value, index })}
      {showControls && <div className='flex gap-3'>
        <IconButton aria-label="Move up" disabled={disabled || !canMoveUp} component="span"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onMoveUpRequired && onMoveUpRequired()
          }} >
          <ChevronLeft
            size={20}
          />
        </IconButton>
        <IconButton aria-label="Move down" disabled={disabled || !canMoveDown} component="span"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onMoveDownRequired && onMoveDownRequired()
          }}>
          <ChevronRight
            size={20}
          />
        </IconButton>
        <IconButton aria-label="Delete" disabled={disabled} component="span"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onRemoveRequired && onRemoveRequired()
          }} >
          {canRemove &&
            <Trash
              size={20}
            />}
        </IconButton>
      </div>
      }
    </div>
    <div className='px-1'>
      {children}
    </div>
  </div>
}
