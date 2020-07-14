import { ClientOptions } from '@fmfe/genesis-core';
import Vue from 'vue';
import App from './app.vue';
// import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
// Vue.use(ViewUI);
// import '../src/main.css';

export default async (clientOptions: ClientOptions): Promise<Vue> => {
    return new Vue({
        render(h) {
            return h(App);
        }
    });
};
