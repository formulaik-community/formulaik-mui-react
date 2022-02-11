import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize'

export default (props) => {
    const { customOnValueChanged, field, errors, item: { props: itemProps = {}, id } } = props
    const { maxRows = 1000, minRows = 3, placeholder } = itemProps
    return <TextareaAutosize
        aria-label="minimum height"
        minRows={maxRows}
        minRows={minRows}
        onChange={({ target: { value } }) => customOnValueChanged(value)}
        placeholder={placeholder}
        {...field}
        className={`textarea h-64 textarea-bordered text-base ${errors[id] ? 'bg-red-100 border-red-600' : 'border-warmGray-400'}`}
    />
}
