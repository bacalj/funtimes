var funtimes = new Vue({
    el: '#funtimes',
    data: {
        mode: 'setup',
        setA: [],
        setB: [],
        problems: [],
        answer: "",
        responseEmoji: "🤔"
    },

    methods: {
        setUp(){ 
            this.mode = 'setup';
        },

        practice(){
            this.mode = 'practice';
        },

        toggleInSet: function(num, set){
            indS = set.indexOf(num);
            if ( indS > -1 ){
                set.splice(indS, 1);
            } else {
                set.push(num);
            }
        }
    }
});