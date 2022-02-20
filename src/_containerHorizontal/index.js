import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import ArrowDownward from '@mui/icons-material/ArrowLeft'
import ArrowUpward from '@mui/icons-material/ArrowRight'
import RemoveButton from '@mui/icons-material/DeleteOutline'
import IconButton from '@mui/material/IconButton'

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

  return <Accordion defaultExpanded className={`border-warmGray-200  border-2 px-2 py-1 rounded-xl ${className}`}>
    <AccordionSummary
      expanded
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header">
      <div className="grid grid-cols-2 justify-between">
        <div className="">
          <h4>{title && title({ value, index })}</h4>
        </div>
        <div className="flex justify-end mr-4">
          {summary && summary({ value, index })}
          {showControls && <div className='flex gap-3'>
            <IconButton aria-label="Move down" disabled={disabled || !canMoveDown} component="span"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onMoveDownRequired && onMoveDownRequired()
              }}
            >
              <ArrowDownward />
            </IconButton>
            <IconButton aria-label="Move up" disabled={disabled || !canMoveUp} component="span"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onMoveUpRequired && onMoveUpRequired()
              }} >
              <ArrowUpward />
            </IconButton>

            <IconButton aria-label="Delete" disabled={disabled} component="span"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onRemoveRequired && onRemoveRequired()
              }} >
              {canRemove && <RemoveButton />}
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
