import React from 'react'

export default (props) => {
  const {
    item: { label, id, props: itemProps } } = props

  return <div>
    {itemProps.content}
  </div>
}

