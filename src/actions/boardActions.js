import { DRAW_X, DRAW_O } from '../helpers/actionTypes'

export function drawXAction(cellIndex) {
  return {
    type: DRAW_X,
    cellIndex
  }
}

export function drawOAction(cellIndex) {
  return {
    type: DRAW_O,
    cellIndex
  }
}

