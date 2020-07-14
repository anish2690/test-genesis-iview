import { ClientOptions } from '@fmfe/genesis-core';
import Vue from 'vue';
import App from './app.vue';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import '../src/main.css';
Vue.use(ViewUI);

export default async (clientOptions: ClientOptions): Promise<Vue> => {
    return new Vue({
        render(h) {
            return h(App);
        }
    });
};
