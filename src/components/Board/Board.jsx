import React from 'react'

import Square from './Square/Square.jsx'

function Board(props) {

  //TODO: Get this from redux
  const board = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div id="board" className="mt-4 d-flex flex-wrap">
      {
        board.map((el, i) => <Square key={i} seq={el} />)
      }
    </div>
  )
}

export default Board