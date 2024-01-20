import { createApp } from 'vue';
import App from './App.vue';
import './main.scss';
import router from "./routes";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas)
library.add(fab)

const app = createApp(App)

app.use(router);

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
