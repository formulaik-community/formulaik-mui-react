import React from 'react'
import Button from '@mui/material/Button'

export default ({ onClick, title, disabled }) =>
  <div className={`flex justify-center my-10`}><Button variant="text" onClick={onClick} disabled={disabled}>
    {title ? title : "Add"}
  </Button >
  </div>
