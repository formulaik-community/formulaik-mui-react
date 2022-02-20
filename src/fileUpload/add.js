import React from 'react'
import _ from 'underscore'
import AddAPhotoIcon from '@mui/icons-material/Add'

export default (props) => {
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