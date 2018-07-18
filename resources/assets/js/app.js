
class Errors {
    constructor() { //accept errors 
        this.errors = {}; //store errors
    }
    get (field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }
    record (errors) {
        this.errors = errors; // push errors that came through to errors object
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
                .catch(error => this.errors.record(error.response.data.errors));  // need to create a new function to handle record

                console.log(this.errors);
        }
        
    }
});
