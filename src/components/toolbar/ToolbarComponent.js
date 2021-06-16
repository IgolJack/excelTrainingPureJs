import {ExcelComponent} from '@core/ExcelComponent';

export class ToolbarComponent extends ExcelComponent {
  static className = 'excel__toolbar'
  constructor($root) {
    super($root, {
      name: 'ToolbarComponent',
      listeners: ['click']
    });
  }
  toHTML() {
    return `
      <div class="button">
        <span class="material-icons">format_bold</span>
        <span class="material-icons">format_italic</span>
        <span class="material-icons">format_underline</span>
        <span class="material-icons">format_align_left</span>
        <span class="material-icons">format_align_center</span>
        <span class="material-icons">format_align_right</span>
      </div>
      `
  }
  onClick(event) {
    console.log(event.target)
  }
}
