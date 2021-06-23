import {Excel} from '@/components/excel/Excel'
import {FormulaComponent} from '@/components/formula/FormulaComponent'
import {HeaderComponent} from '@/components/header/headerComponent'
import {TableComponent} from '@/components/table/TableComponent'
import {ToolbarComponent} from '@/components/toolbar/ToolbarComponent'
import './scss/index.scss'
const excel = new Excel('#app', {
  components: [
    HeaderComponent,
    ToolbarComponent,
    FormulaComponent,
    TableComponent,
  ]
})

excel.render()
