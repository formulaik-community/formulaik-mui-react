import React from 'react'
import _ from 'underscore'
import AddAPhotoIcon from '@mui/icons-material/Add'

const fileTypes = ["JPG", "PNG", "GIF"]

export default (props) => {
  const { size, onFileChanged } = props

  return <div className='items-center flex overflow-hidden relative'>
    <div className='    
      items-center 
      flex 
      overflow-hidden 
      justify-center
      absolute 
      left-0 
      right-0 
      bottom-0 
      top-0'>
      <AddAPhotoIcon fontSize={'large'} color={'#858585'} />
    </div>
  </div>
}