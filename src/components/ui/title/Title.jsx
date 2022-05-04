import React from 'react'

import './style/style.css'

export default React.memo(function Title({ text }) {
  return (
    <h2 className='title-component'>{text}</h2>
  )
})
