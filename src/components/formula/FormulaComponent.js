import {ExcelComponent} from '@core/ExcelComponent';

export class FormulaComponent extends ExcelComponent {
  static className = 'excel__formula'
  constructor($root) {
    super($root, {
      name: 'FormulaComponent',
      listeners: ['input', 'click']
    })
  }
  toHTML() {
    return `
      <div class="formula-FX">fx</div>
      <div class="formula-input" contenteditable spellcheck="false"></div>
    `
  }
  onInput(event) {
    console.log('On input formula', event.target.textContent)
  }

  onClick(event) {
    console.log('Click')
  }
}

