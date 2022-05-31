import React, { Children } from 'react'

function Title({size,children}) {
  return (
    <h1 className={`${size ? size : 'text-7xl'} font-bold h-auto w-auto `}>{children}</h1>
  )
}

export default Title