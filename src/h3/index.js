import React from 'react'

export default (props) => {
  const { item: { params } } = props
  return <h3>{params.content}</h3>
}

