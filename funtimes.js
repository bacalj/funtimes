var funtimes = new Vue({
    el: '#funtimes',
    data: {
        mode: 'setup',

    },

    methods: {
        setUp(){ 
            this.mode = 'setup';
        },

        practice(){
            this.mode = 'practice';
        }
    }
});