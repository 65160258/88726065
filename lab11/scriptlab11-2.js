 const app = Vue.createApp({
            data() {
                return {
                    errors: {},
                    name: null,
                    age: null,
                    gender: null,
                    movie: null
                }
            },
            computed: {
                hasErrors() {
                    return Object.keys(this.errors).length > 0;
                }
            },
            methods: {
                checkForm() {
                    this.errors = {};
                    if (!this.name) this.errors['name'] = "Name required.";
                    if (!this.age) this.errors['age'] = "Age required.";
                    if (!this.gender) this.errors['gender'] = "Gender required.";
                    if (!this.movie) this.errors['movie'] = "Movie required.";
                    // prevent form submission
                    // e.preventDefault();
                }
            }
        }).mount('#app');
