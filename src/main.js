import { createApp } from 'vue';

import store from './store/index.js';
import App from './App.vue';

import BaseCard from './components/ui/BaseCard.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';

const app = createApp(App);

app.use(store);

app.component('base-card', BaseCard);
app.component('base-spinner', BaseSpinner);

app.mount('#app');
