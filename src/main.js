import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css' // 添加normalize css的功能
import './style/index.scss' // 导入统一的css文件

createApp(App).directive('focus', { //加入v-focus指令
    mounted(el) {
        el.focus(); 
    }
}).use(store).use(router).mount('#app')
