
require('./bootstrap');

// window.Vue = require('vue');

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
class Errors {
    constructor() { //accept errors 
        this.errors = {}; //store errors
    }
    get (field) {
        if (this.errors[field]) {
            this.errors[field][0];
        }
    }
    record(errors) {
        this.errors = errors;
    }
}


new Vue({
    el: '#app',
    data: {
        name: '',
        description: '',
        errors: new Errors()
    },
    methods: {
        onSubmit() {
            axios.post('/projects', this.$data)
                .then(response => alert ('No error!'))
                .catch(error => this.errors.record(error.response.data));  // need to create a new function to handle record
        }
    }
});
