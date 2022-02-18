import React from 'react'

export default (props) => {
  const { item: { params } } = props
  return <h4>{params.content}</h4>
}

