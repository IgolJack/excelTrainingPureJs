import {ExcelComponent} from '@core/ExcelComponent';

export class HeaderComponent extends ExcelComponent {
  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options,
    });
  }
  static className = 'excel__header'
  toHTML() {
    return `
      <input type="text" class="input" value="Новая таблица"/>
      <div class="button">
          <span class="material-icons">delete_forever</span>
          <span class="material-icons">logout</span>
      </div>
      `
  }
}
