
class Errors {
    constructor() { //accept errors 
        this.errors = {}; //store errors
    }
    has (field) {      // if this.errors contains a field
        return this.errors.hasOwnProperty(field);
    }
    any() {
        return Object.keys(this.errors).length > 0;
    }
    get (field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }
    record (errors) {
        this.errors = errors; // push errors that came through to errors object
    }

    clear(field) {
        delete this.errors[field];
    }
}

class Form {            
    constructor(data) {    //takes in name and description that was passed with it
        this.data = data;
        for (let field in data) {
            this[field] = data[field];
        }
        this.errors = new Errors();
    }
    reset () {

    }
    submit () {

    }
}


new Vue({
    el: '#app',
    data: {
        form: new Form ({       //create new class with name and description passed with it
            name: '',
            description: ''
        })
    },
    methods: {
        onSubmit() {
            axios.post('/projects', this.$data)
                .then(this.onSuccess)
                .catch(error => this.form.errors.record(error.response.data.errors));  // need to create a new function to handle record

                console.log(this.errors);
        },

        onSuccess(response) {
            alert(response.data.message);
            form.reset();   // reset form once submitted
        }
        
    }
});
