import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initRouter } from './router'
import Iudx from './idux'
import 'vuesax/dist/vuesax.css'


const app = createApp(App);
 initRouter(app)
app.mount('#app')
app.use(Iudx)

