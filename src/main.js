import { createApp } from 'vue';
import VueDOMPurifyHTML from 'vue-dompurify-html';

import App from './App.vue';

// import './assets/main.css';

createApp(App).use(VueDOMPurifyHTML).mount('#app');
