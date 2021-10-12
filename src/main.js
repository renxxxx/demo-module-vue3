
import { createApp } from 'vue'
import App from './App.vue'

import popup from '@/components/popupindex'

 let app = createApp(App);
 app.use(popup);
 app.mount("#app");
