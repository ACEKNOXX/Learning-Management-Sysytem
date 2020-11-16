import Vue from 'vue';
import App from './components/App.vue';
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

new Vue({
    el: '#app',
    render: h => h(App)
});
