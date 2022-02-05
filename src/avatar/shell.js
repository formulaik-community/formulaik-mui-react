import React from 'react'

export default (props) => {
  const {
    size = 100,
    highlightColor = 'pink-600',
    baseColor = 'warmGray-100',
    children,
    onClick
  } = props

  return <div className={`
            border 
            border-warmGray-300 
            rounded-full
            h-${size}
            w-${size}                
            flex     
            align-middle 
            overflow-hidden
            hover:bg-warmGray-50
            cursor-pointer
            justify-center`}
    onClick={onClick} >
    {children}
  </div>
}