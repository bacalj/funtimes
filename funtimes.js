var funtimes = new Vue({
    el: '#funtimes',
    data: {
        mode: 'setup',
        setA: [],
        setB: [],
        problems: [],
        currProbIndex: 0,
        responseEmoji: "🤔"
    },

    computed: {
        // answer: function(){
        //     return this.problems[currProbIndex].factorA * this.problems[currProbIndex].factorB;
        // }
    },

    methods: {
        setUp(){ 
            this.mode = 'setup';
        },

        practice(){
            this.mode = 'practice';
            for (var i = 0; i < this.setA.length; i++) {
                var factorA = this.setA[i];
                for (var k=0; k < this.setB.length; k++){
                    var prob = {};
                    prob.factor1 = this.setA[i];
                    prob.factor2 = this.setB[k];
                    prob.showProduct = false;
                    prob.product = prob.factor1 * prob.factor2;
                    this.problems.push(prob);
                }
            }
        },

        toggleInSet: function(num, set){
            indS = set.indexOf(num);
            if ( indS > -1 ){
                set.splice(indS, 1);
            } else {
                set.push(num);
            }
        },

        indexUp(){
            this.currProbIndex++;
            if (this.currProbIndex > this.problems.length -1){
                this.currProbIndex = 0;
            }
        },

        indexDown(){
            this.currProbIndex--;
            if (this.currProbIndex < 0 ){
                this.currProbIndex = this.problems.length - 1;
            }
        }

    }
});