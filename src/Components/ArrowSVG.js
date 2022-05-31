import React from 'react'

function ArrowSVG({spin}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" className={`${spin ? 'rotate-180' : 'rotate-0'} duration-200`} fill-rule="evenodd" clip-rule="evenodd">
        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
    </svg>
  )
}

export default ArrowSVG