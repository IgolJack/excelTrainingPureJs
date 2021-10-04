const CODES = {
  A: 65,
  Z: 90,
}

function createCell(count, rowId) {
  const $cell = []
  for (let i = 0; i <= count; i++) {
    // data-cell-row-id="${rowId}"получаем строчки
    $cell.push(`
     <div
     class="cell"
     contenteditable
     data-cell-col-id="${i}"
     data-id="${rowId}:${i}"
     ></div>
    `)
  }
  return $cell.join('')
}

function createCol() {
  const $col = []
  for (let i = CODES.A; i <= CODES.Z; i++) {
    $col.push(`
      <div 
      class="column" 
      data-type="resizable" 
      data-id-object="${i - CODES.A}"
      >
          ${String.fromCharCode(i)}
           <div class="col-resize" data-resize="col"></div>
      </div>
    `)
  }
  return $col.join('')
}

function createRow(numberOfRow, HtmlData) {
  const res = '<div class="row-resize" data-resize="row"></div>'
  return `
  <div class="row" data-id-object="${numberOfRow}" data-type="resizable">
      <div 
      class="row-info" 
      >
        ${numberOfRow ? numberOfRow : ''}
        ${numberOfRow ? res : ''}
      </div>
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
    : $rows.push(createRow(i, createCell(colsCount, i - 1)))
  }
  return $rows.join('')
}
