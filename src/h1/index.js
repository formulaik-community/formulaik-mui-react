import React from 'react'

export default (props) => {
  const { item: { props: itemProps } } = props
  return <h1>{itemProps.content}</h1>
}

