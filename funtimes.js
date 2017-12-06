var funtimes = new Vue({
    el: '#funtimes',
    data: {
        mode: 'setup',
        setA: [],
        setB: []
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