import React from 'react'

export default (props) => {
  const { item: { props: itemProps } } = props
  return <h3>{itemProps.content}</h3>
}

