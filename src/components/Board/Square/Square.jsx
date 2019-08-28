import React from 'react'
import Cross from './Cross/Cross.jsx'
import Zero from './Zero/Zero.jsx'

function Square(props) {
  return (
    <div className="cell">
      {props.seq % 2 === 0 ? <Cross /> : <Zero />}
    </div>
  )
}

export default Square