
require('./bootstrap');

// window.Vue = require('vue');

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

new Vue({
    el: '#app',
    data: {
        name: '',
        description: '',
        errors: {},
    },
    methods: {
        onSubmit() {
            axios.post('/projects', this.$data)
                .then(response => alert ('No error!'))
                .catch(error => this.errors = error.response.data);
        }
    }
});
