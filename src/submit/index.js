import React from 'react'
import Button from '@mui/material/Button'

export default (props) => {
  const { isSubmitting, item: { value } } = props

  return <div className={`flex justify-center mt-4`}>
    {/* <Button variant="text" onClick={onClick}
     className={`btn btn-outline btn-lg w-60  ${isSubmitting ? 'loading' : ''}`}>
      {label}
    </Button> */}

    <button

      type="submit"
      disabled={isSubmitting}>
      {isSubmitting ? '' : value}
    </button>
  </div>
}
