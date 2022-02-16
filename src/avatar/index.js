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
    values,
    customOnValueChanged,
    item: { id, props: itemProps = {} }
  } = props

  const [data, setData] = useState(values[id] ? values[id] : {})
  const { size, canRemove = true, canEdit = false } = itemProps

  const onFileChanged = (file) => {
    if (props.disabled || props.readOnly) {
      return
    }

    var _data = { ...data, file }
    if (!_data.file) {
      _data = null
    }
    setData(_data)
    customOnValueChanged && customOnValueChanged(_data)
  }

  const _props = { ...itemProps, data, disabled: props.disabled, readOnly: props.readOnly }
  const onClick = () => { }

  const hasData = data.url || data.file


  return <div className={`
            my-4
            flex
            group
            `}>
    <div className={`
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
        <span><small>{`${hasData ? 'Click to change picture' : 'Click to add a picture'}`}</small></span>
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
          <FileUploader onFileChanged={onFileChanged} />
          : null}
      </div>
    </div>
    {hasData ?
      <div className={`
            px-2
            py-4
            h-full
            hidden
            ${(!props.disable && !props.readOnly) ? 'group-hover:grid' : ''}
            place-items-center
            grid-cols-1
            transform
            transition
            duration-200
            ease-in-out
            `}>
        {(!props.disable && !props.readOnly && canRemove) ? <IconButton aria-label="Delete" component="span"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            if (props.disabled || props.readOnly) {
              return
            }
            const _data = {}
            setData(_data)
            customOnValueChanged && customOnValueChanged(_data)
          }} >
          <RemoveButton />
        </IconButton> : null}
        {canEdit ? <IconButton aria-label="Move up" component="span"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            if (props.disabled || props.readOnly) {
              return
            }
          }} >
          <EditOutlined />
        </IconButton> : null}
      </div>
      : null}
  </div>
}
