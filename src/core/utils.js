export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}


export function splitId(id) {
  return id.split(':')
}
export function getRowOrCol(id, type = 'row') {
  const [row, col] = id.split(':')
  return type === 'row' ? row : col
}
