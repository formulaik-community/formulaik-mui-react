import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import ArrowDownward from '@mui/icons-material/ArrowDownward'
import ArrowUpward from '@mui/icons-material/ArrowUpward'
import RemoveButton from '@mui/icons-material/DeleteOutline'
import IconButton from '@mui/material/IconButton'

export default (props) => {
  const {
    summary,
    details,
    label,
    onMoveDownRequired,
    onRemoveRequired,
    onMoveUpRequired,
    canRemove,
    canMoveUp,
    canMoveDown,
    showControls,
    disabled = false
  } = props

  return <Accordion defaultExpanded className="w-full border-warmGray-200  border-2 px-4 py-2 rounded-xl">
    <AccordionSummary
      expanded
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header">
      <div className="grid grid-cols-2 justify-between w-full ">
        <div className="">
          <h4>{label}</h4>
        </div>
        <div className="flex justify-end mr-4">
          {summary}
          {showControls && <div className='flex gap-3'>
            <IconButton aria-label="Move up" disabled={disabled || !canMoveUp} component="span"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onMoveUpRequired && onMoveUpRequired()
              }} >
              <ArrowUpward />
            </IconButton>
            <IconButton aria-label="Move down" disabled={disabled || !canMoveDown} component="span"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onMoveDownRequired && onMoveDownRequired()
              }}
            >
              <ArrowDownward />
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
    <AccordionDetails>
      {details}
    </AccordionDetails>
  </Accordion>
}
