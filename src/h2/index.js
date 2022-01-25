import React from 'react'

export default (props) => {
  const { item: { props: itemProps } } = props
  return <h2>{itemProps.content}</h2>
}

