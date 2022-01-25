import React from 'react'

export default (props) => {
  const { item: { props: itemProps } } = props
  return <h4>{itemProps.content}</h4>
}

