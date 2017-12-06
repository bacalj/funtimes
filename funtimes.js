var funtimes = new Vue({
    el: '#funtimes',
    data: {
        mode: 'setup'
    },

    methods: {
        setUpMode(){ 
            this.mode = 'setup';
        },

        practiceMode(){
            this.mode = 'practice';
        }
    }
});