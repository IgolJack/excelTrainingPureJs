import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {tableResizer} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.functions';

export class TableComponent extends ExcelComponent {
  static className = 'excel__table'
  constructor($root) {
    super($root, {
      name: 'TableComponent',
      listeners: ['mousedown']
    });
  }
  toHTML() {
    return createTable()
  }
  onMousedown(event) {
    if (shouldResize(event)) {
      tableResizer(event, this.$root)
    }
  }
}


