import React from 'react'
import _ from 'underscore'
import IconButton from '@mui/material/IconButton'
import AddAPhotoIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import Modal from '@mui/material/Modal'
import Avatar from './avatar'

export default (props) => {
  const { size, data } = props


  return <div className='
      w-full 
      h-full 
      items-center 
      flex 
      justify-center  
      transform
      group-hover:scale-105
      transition
      duration-200
      ease-in-out
      '>
    <Avatar
      size={size * 4}
      badge={false}
      src={data.file
        ? URL.createObjectURL(data.file)
        : data.url
      } />
  </div>
}