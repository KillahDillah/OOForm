
require('./bootstrap');

// window.Vue = require('vue');

// Vue.component('example-component', require('./components/ExampleComponent.vue'));


new Vue({
    el: '#app',
    data: {
        name: '',
        description: '',
    },
    methods: {
        onSubmit() {
            axios.post('/projects', this.$data);
        }
    }
});
