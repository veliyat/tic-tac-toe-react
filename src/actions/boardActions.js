import { DRAW_X, DRAW_Y } from '../helpers/actionTypes'

export function drawXAction(cell) {
  return {
    type: DRAW_X,
    cell
  }
}

export function drawYAction(cell) {
  return {
    type: DRAW_Y,
    cell
  }
}

