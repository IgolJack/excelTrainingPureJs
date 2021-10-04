import {splitId} from '@core/utils';

export function keyPressed(event, context) {
  event.preventDefault()
  let [row, col] = splitId(event.target.dataset.id)
  switch (event.code) {
    case 'Enter':
    case 'ArrowDown':
      row++
      break
    case 'Tab':
    case 'ArrowRight':
      col++
      break
    case 'ArrowUp':
      row--
      break
    case 'ArrowLeft':
      col--
      break
  }
  const $targetCell = context.$root.find(nextSelector(row, col))
  if ($targetCell.$el !== null) {
    context.selection.select($targetCell)
  }
}

function nextSelector(row, col) {
  return `[data-id="${+row}:${+col}"]`
}
