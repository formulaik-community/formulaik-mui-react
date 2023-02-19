import React from 'react'
import Button from '@mui/material/Button'

export default ({ onAdd, title, disabled }) =>
  <div className={`flex justify-center my-10`}>
    <Button variant="text"
      onClick={onAdd}
      disabled={disabled}>
      {title ? title : "Add"}
    </Button >
  </div>
