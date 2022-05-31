import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import IconButton from '@mui/material/IconButton'

import { Trash, ChevronUp, ChevronDown } from 'react-feather'

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

  return <Accordion defaultExpanded className={`
            w-full
            border-warmGray-200
            hover:border-warmGray-300
            transition-all
            ease-in-out
            duration-300
            border-2
            px-4
            py-2
            rounded-xl
            ${className}`}>
    <AccordionSummary
      expanded
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header">
      <div className="grid grid-cols-2 justify-between w-full ">
        <div className="">
          <h4>{title && title({ value, index })}</h4>
        </div>
        <div className="flex justify-end mr-4">
          {summary && summary({ value, index })}
          {showControls && <div className='flex gap-3'>
            <IconButton aria-label="Move up" disabled={disabled || !canMoveUp} component="span"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onMoveUpRequired && onMoveUpRequired()
              }} >
              <ChevronUp
                size={20}
              />
            </IconButton>
            <IconButton aria-label="Move down" disabled={disabled || !canMoveDown} component="span"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onMoveDownRequired && onMoveDownRequired()
              }}
            >
              <ChevronDown
                size={20}
              />
            </IconButton>
            <IconButton aria-label="Delete" disabled={disabled} component="span"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onRemoveRequired && onRemoveRequired()
              }} >
              {canRemove && <Trash
                size={20}
              />}
            </IconButton>
          </div>
          }
        </div>
      </div>
    </AccordionSummary>
    <AccordionDetails className={``}>
      {children}
    </AccordionDetails>
  </Accordion>
}
