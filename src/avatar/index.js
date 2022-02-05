import React, { useState } from 'react'
import _ from 'underscore'
import Add from './add'
import Preview from './preview'
import Shell from './shell'
import FileUploader from './fileUploader'
import IconButton from '@mui/material/IconButton'
import AddAPhotoIcon from '@mui/icons-material/Add'


export default (props) => {
  const {
    values,
    customOnValueChanged,
    item: { id, props: itemProps = {} }
  } = props

  const [data, setData] = useState(values[id])
  const { size } = itemProps

  const onFileChanged = (file) => {
    const _data = { ...data, file }
    setData(_data)
    customOnValueChanged && customOnValueChanged(_data)
  }

  const _props = { ...itemProps, data }
  const onClick = () => { }

  const showPreview = data.url || data.file

  return <div className={`  
            my-4
            border 
            border-warmGray-300 
            rounded-full
            h-${size}
            w-${size}                            
            align-middle             
            hover:bg-warmGray-50
            cursor-pointer
            justify-center
            items-center 
            flex
            group 
            relative
            overflow-hidden`}
    onClick={onClick}>
    <div className={`
      bg-pink-300
      bg-opacity-25
      absolute 
      left-0 
      right-0 
      bottom-0 
      top-0      
      `}>
      {showPreview
        ? <Preview {..._props} />
        : <Add {..._props} />
      }
    </div>
    <div className={`
      bg-pink-300 
      bg-opacity-70
      absolute 
      left-0 
      right-0 
      bottom-0 
      top-0    
      hidden
      group-hover:flex 
      items-center
      px-2
      py-2
      text-center
      justify-center 
      `}>
      <span><small>Click to change picture</small></span>
    </div>
    <div className={`      
      bg-opacity-25
      items-center 
      flex 
      overflow-hidden 
      h-full 
      w-full 
      opacity-0
      bg-blue-500
      hover:scale-105
        transition
        duration-200
        ease-in-out'>
      `}>
      <FileUploader onFileChanged={onFileChanged} />
    </div>

  </div>
}