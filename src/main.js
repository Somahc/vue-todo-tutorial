import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';

//「.use(router)」を追加
createApp(App).use(router).mount('#app');
