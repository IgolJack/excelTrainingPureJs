import {splitId} from '@core/utils';

export function tableSelector(event, context) {
  const eObj = {
    $startCell: null,
    $cell: null,
    $endCell: null,
    $cells: [],
    $prevEndCell: null
  }
  const coords = {
    sRow: null,
    eRow: null,
    sCol: null,
    eCol: null,
  }

  eObj.$startCell = event.target.dataset.id
  eObj.$cell = context.$root.find(`[data-id="${eObj.$startCell}"]`)
  context.selection.select(eObj.$cell)

  document.onmousemove = eve => {
    context.selection.unColorGroup()
    eObj.$cells = []
    eObj.$endCell = eve.target.dataset.id
    if (eObj.$startCell === eObj.$endCell) {
      context.selection.select(eObj.$cell)
    }
    if (typeof eObj.$endCell === 'undefined') {
      eObj.$endCell = eObj.$prevEndCell
    }
    eObj.$prevEndCell = eObj.$endCell
    const [rStCell, cStCell] = splitId(eObj.$startCell)
    const [rEndCell, cEndCell] = splitId(eObj.$endCell)
    coords.sRow = +rStCell < +rEndCell ? +rStCell : +rEndCell
    coords.eRow = +rStCell < +rEndCell ? +rEndCell : +rStCell
    coords.sCol = +cStCell < +cEndCell ? +cStCell : +cEndCell
    coords.eCol = +cStCell < +cEndCell ? +cEndCell : +cStCell
    for (let i = +coords.sRow; i <= +coords.eRow; i++) {
      for (let j = +coords.sCol; j <= +coords.eCol; j++) {
        eObj.$cells.push(context.$root.find(`[data-id="${i}:${j}"]`))
      }
    }
    context.selection.colorGroup(eObj.$cells)
  }

  document.onmouseup = () => {
    eObj.$cells.length > 0 && context.selection.selectGroup(eObj.$cells)
    document.onmousemove = null
    document.onmouseup = null
  }
}
