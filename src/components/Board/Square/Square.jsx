import React from 'react'
import { connect } from 'react-redux'

import Cross from './Cross/Cross.jsx'
import Zero from './Zero/Zero.jsx'
import { drawXAction, drawOAction } from '../../../actions/boardActions.js';
import { toggleTurnAction } from '../../../actions/playerActions.js';

function Square(props) {
  const { symbol, index, draw, players, board } = props

  const disabled = symbol ? 'disabled' : ''

  return (
    <div className={'cell ' + disabled} onClick={() => draw(board, players, index)}>
      {symbol ? (symbol === 'X' ? <Cross /> : <Zero />) : ''}
    </div >
  )
}

const mapStateToProps = ({ board, players }) => ({ board, players })

const mapDispatchToProps = dispatch => ({
  draw: (board, players, cellIndex) => {
    if (!board[cellIndex]) {
      if (players[players.turn] === 'X') {
        dispatch(drawXAction(cellIndex))
      } else {
        dispatch(drawOAction(cellIndex))
      }

      dispatch(toggleTurnAction())
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Square)