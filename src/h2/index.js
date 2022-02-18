import React from 'react'

export default (props) => {
  const { item: { params } } = props
  return <h2>{params.content}</h2>
}

