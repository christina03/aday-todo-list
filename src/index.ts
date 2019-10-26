import Vue from 'vue'
import App from './App.vue'

import {
  Button,
  Steps,
  Step,
  Tabs,
  TabPane,
  Link,
  Form,
  FormItem,
  Input,
  Upload,
  RadioGroup,
  Radio,
  TimePicker,
  DatePicker,
  Row,
  Col,
  Table,
  TableColumn,
  Pagination,
  Dialog
} from 'element-ui';

Vue.use(Button);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Link);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Upload);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Row);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Pagination);
Vue.use(Dialog);
Vue.use(TimePicker);
Vue.use(DatePicker);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
