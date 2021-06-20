import {$} from '@core/dom';

export function tableResizer(event, root) {
  const $resizer = $(event.target)
  const nameOfTarget = event.target.dataset.resize.toString()
  const $parent = $(event.target).closest('[data-type="resizable"]')
  const coords = $parent.getCoords()
  const $objects = root.findAll(`
    [data-cell-${nameOfTarget}-id="${$parent.data.idObject}"]
  `)
  let value = 0
  $resizer.css({opacity: 1, bottom: '-100vh', right: '-100vw'})
  document.onmousemove = e => {
    if (nameOfTarget === 'col') {
      const delta = e.pageX - coords.right
      $resizer.css({right: -delta + 'px'})
      value = coords.width + delta
    } else {
      const delta = e.pageY - coords.bottom + 3
      $resizer.css({bottom: -delta + 'px'})
      value = coords.height + delta
    }
  }
  document.onmouseup = () => {
    $resizer.css({opacity: 0, bottom: 0})
    if (nameOfTarget === 'col') {
      $parent.css({width: value + 'px'})
      $objects.forEach(cell => cell.style.width = value + 'px')
    } else {
      $parent.css({height: value + 'px'})
      $objects.forEach(row => row.style.height = value + 'px')
    }
    $resizer.css({right: 0, bottom: 0})
    document.onmousemove = null
    document.onmouseup = null
  }
}
