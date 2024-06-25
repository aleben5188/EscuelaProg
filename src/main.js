import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
//Importar Bootstrap CSS y JS
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importar Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css';


createApp(App)
  .use(router)
  .mount('#app')