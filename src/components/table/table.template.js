const CODES = {
  A: 65,
  Z: 90,
}

function createCell(count) {
  const $cell = []
  for (let i = 0; i <= count; i++) {
    $cell.push(`
     <div class="cell" contenteditable></div>
    `)
  }
  return $cell.join('')
}

function createCol() {
  const $col = []
  for (let i = CODES.A; i <= CODES.Z; i++) {
    $col.push(`<div class="column">${String.fromCharCode(i)}</div>`)
  }
  return $col.join('')
}

function createRow(numberOfRow, HtmlData) {
  return `
  <div class="row">
      <div class="row-info">${numberOfRow ? numberOfRow : ''}</div>
        <div class="row-data">
         ${HtmlData}
        </div>
      </div>
  </div>
  `
}

export function createTable(rowsCount = 60) {
  const colsCount = CODES.Z - CODES.A
  const $rows = []
  for (let i = 0; i <= rowsCount; i++) {
    i === 0
    ? $rows.push(createRow(null, createCol()))
    : $rows.push(createRow(i, createCell(colsCount)))
  }
  return $rows.join('')
}
