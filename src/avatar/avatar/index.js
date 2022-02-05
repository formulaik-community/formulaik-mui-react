import React from 'react'
import Avatar from '@mui/material/Avatar'
import { deepOrange, deepPurple } from '@mui/material/colors'
import Shell from './shell'


export default (props) => {
  const { size = 50, badge = false, initials = 'N/A', bgcolor = deepOrange[500], } = props
  return (
    <Shell badge={badge}>
      <Avatar
        sx={{
          bgcolor: props.bgcolor,
          width: props.size,
          height: props.size
        }}
        src={props.src}>
        {props.initials ?? props.initials}
      </Avatar>
    </Shell>
  )
}
