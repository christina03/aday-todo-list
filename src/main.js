import Vue from 'vue'
import App from './App.vue'
import { Button, Dialog, Divider, Checkbox, CheckboxGroup, Card, Input } from 'element-ui'
import './plugins/element.js'

Vue.use(Button).use(Divider).use(Dialog).use(Checkbox).use(CheckboxGroup).use(Card).use(Input);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
