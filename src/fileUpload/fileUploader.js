import React from 'react'
import _ from 'underscore'
import { FileUploader } from "react-drag-drop-files"

export default (props) => {
  const {
    fileTypes = ["JPG", "JPEG", "WEBP", "PNG", "GIF"],
    onFileChanged, maxFileSize = 10 } = props

  return <FileUploader
    maxSize={maxFileSize}
    onSizeError={() => { alert(`Please choose a smaller file (${maxFileSize}mb max)`) }}
    handleChange={onFileChanged}
    name="file"
    types={fileTypes} />
}