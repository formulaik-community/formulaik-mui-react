import React, { useState } from 'react'
import _ from 'underscore'
import Add from './add'
import Preview from './preview'
import FileUploader from './fileUploader'
import IconButton from '@mui/material/IconButton'
import AddAPhotoIcon from '@mui/icons-material/Add'
import RemoveButton from '@mui/icons-material/DeleteOutline'
import EditOutlined from '@mui/icons-material/EditOutlined'

export default (props) => {
  const {
    value,
    onValueChanged,
    item: { params = {} }
  } = props

  const {
    itemHeight = '32',
    itemWidth = '48',
    canRemove = true,
    canEdit = false,
    hideControls = false } = params

  const [data, setData] = useState(value ? value : {})

  const onFileChanged = (file) => {
    if (props.disabled || props.readOnly) {
      return
    }

    var _data = { ...data, file, mimeType: file.type }
    if (!_data.file) {
      _data = null
    }
    setData(_data)
    onValueChanged && onValueChanged(_data)
  }

  const _props = { ...params, data, disabled: props.disabled, readOnly: props.readOnly }
  const onClick = () => { }

  const hasData = data.url || data.file

  return <div className={`
            flex
            group
            `}>
    <div className={`
            border
            border-warmGray-300
            rounded-lg 
            h-${itemHeight}
            w-${itemWidth}
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
        {hasData
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
      ${(!props.disable || !props.readOnly || hasData) ? 'hidden' : 'flex'}
      ${(!props.disable && !props.readOnly) ? 'group-hover:flex' : ''}
      items-center
      px-2
      py-2
      text-center
      justify-center
      `}>
        <span><small>{`${hasData ? 'Drag and drop or click to change file' : 'Drag and drop or click to add a file'}`}</small></span>
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
        {(!props.disable && !props.readOnly) ?
          <FileUploader onFileChanged={onFileChanged} {..._props} />
          : null}
      </div>
    </div>
    {(!hideControls && hasData && (!props.disable && !props.readOnly)) ?
      <div className={`
            px-2
            py-4
            h-full
            hidden
            'group-hover:grid'
            place-items-center
            grid-cols-1
            transform
            transition
            duration-200
            ease-in-out
            `}>
        {canRemove ? <IconButton aria-label="Delete" component="span"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()

            const _data = {}
            setData(_data)
            onValueChanged && onValueChanged(_data)
          }} >
          <RemoveButton />
        </IconButton> : null}
        {canEdit ? <IconButton aria-label="Move up" component="span"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()

          }} >
          <EditOutlined />
        </IconButton> : null}
      </div>
      : null}
  </div>
}
