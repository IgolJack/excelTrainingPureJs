import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';

export class FormulaComponent extends ExcelComponent {
  static className = 'excel__formula'
  constructor($root, options) {
    super($root, {
      name: 'FormulaComponent',
      listeners: ['input', 'keydown'],
      ...options
    })
  }
  toHTML() {
    return `
      <div class="formula-FX">fx</div>
      <div id = "formula" class="formula-input" contenteditable spellcheck="false"></div>
    `
  }
  init() {
    super.init()
    this.$formula = this.$root.find('#formula')

    this.$on('table:selectCell', $cell => {
      const text = $cell.text()
      text.length === 0
          ? this.$formula.text(' ')
          : this.$formula.text(text)
    })
    this.$on('table:input', $cell => this.$formula.text($cell.text()))
  }

  onInput(event) {
    this.$emit('formula:input', $(event.target).text())
  }
  onKeydown(event) {
    const keys = ['Enter', 'Tab']
    if (keys.includes(event.code)) {
      event.preventDefault()
      this.$emit('formula:done', event)
    }
  }
}
