import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {tableResizer} from '@/components/table/table.resize';
import {
  shouldResize,
  shouldSelectCell}
  from '@/components/table/table.functions';
import {tableSelector} from '@/components/table/table.select';
import {TableSelection} from '@/components/table/TableSelection';
import {keyPressed} from '@/components/table/table.onKeyClick';
import {$} from '@core/dom';

export class TableComponent extends ExcelComponent {
  static className = 'excel__table'
  constructor($root, options) {
    super($root, {
      name: 'TableComponent',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options,
    });
  }
  toHTML() {
    return createTable()
  }
  prepare() {
    this.selection = new TableSelection()
  }

  init() {
    super.init();
    const $cell = this.$root.find('[data-id="0:0"]')
    this.selection.select($cell)
    this.$emit('table:selectCell', $cell)
    this.$on('formula:input', text => this.selection.current.text(text))
    this.$on('formula:done', () => this.selection.current.focusEl())
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      tableResizer(event, this.$root)
    } else if (shouldSelectCell(event)) {
      tableSelector(event, this)
      this.$emit('table:selectCell', this.selection.current)
    }
  }
  onKeydown(event) {
    const keys = ['Enter', 'Tab', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']
    if (keys.includes(event.code) && !event.shiftKey === true) {
      keyPressed(event, this)
      this.$emit('table:selectCell', this.selection.current)
    }
  }
  onInput(event) {
    this.$emit('table:input', $(event.target))
  }
}


