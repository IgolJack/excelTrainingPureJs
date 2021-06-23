export class TableSelection {
  constructor() {
    this.group = []
    this.color = []
    this.current = null
  }
  select($el) {
    this.current = $el
    this.unColorGroup()
    this.group.push($el)
    $el.addClass('selected')
    $el.focusEl()
  }
  selectGroup($els) {
    this.current = $els[0]
    this.unColorGroup()
    $els.forEach($el => {
      this.group.push($el)
      $el.addClass('selected')
    })
  }
  colorGroup($els) {
    $els.forEach($el => {
      this.color.push($el)
      $el.addClass('preselected')
    })
  }
  unColorGroup() {
    this.unSelectAll()
    this.color.forEach(cell => cell.remClass('preselected'))
    this.color.length = 0
  }
  unSelectAll() {
    this.group.forEach(cell => cell.remClass('selected'))
    this.group.length = 0
  }

  del() {
    this.group.forEach(cell => cell.$el.innerText = '')
  }
}
