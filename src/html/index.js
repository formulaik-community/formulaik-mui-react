import React from 'react'

export default (props) => {
  const {
    item: { label, id, params } } = props

  return <div>
    {params.content}
  </div>
}

