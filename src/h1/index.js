import React from 'react'

export default (props) => {
  const { item: { params } } = props
  return <h1>{params.content}</h1>
}

