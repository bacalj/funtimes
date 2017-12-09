var funtimes = new Vue({
    el: '#funtimes',
    data: {
        mode: 'setup',
        setA: [0, 1, 2],
        setB: [1, 2, 3],
        problems: [],
        currProbIndex: 0,
        responseEmoji: "🤔",
        answer:'',
        errorMessage:''
    },

    methods: {
        setUp(){ 
            this.mode = 'setup';
            this.problems = [];
        },

        practice(){
            if (this.setA.length < 1 || this.setB.length < 1 ){
                this.errorMessage = 'Hey, you need to choose at least one factor to practice from each list.';
            } 
            
            else {
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
            }
        },

        toggleInSet: function(num, set){
            indS = set.indexOf(num);
            if ( indS > -1 ){
                set.splice(indS, 1);
            } else {
                set.push(num);
            }
            if (this.setA.length > 0 || this.setB.length > 0){
                this.errorMessage = '';
            }
        },

        indexUp(){
            this.currProbIndex++;
            if (this.currProbIndex > this.problems.length -1){
                this.currProbIndex = 0;
            }
            this.resetPracticeArea();
        },

        indexDown(){
            this.currProbIndex--;
            if (this.currProbIndex < 0 ){
                this.currProbIndex = this.problems.length - 1;
            }
            this.resetPracticeArea();
        },

        check(){
            if (this.answer == '' || this.answer == ' ' || this.answer == "__") {
                this.responseEmoji = "🤔";
                console.log('space');
            } else if (this.answer == this.problems[this.currProbIndex].product){
                this.responseEmoji = "😄";
                console.log('correct');
            } else {
                this.responseEmoji = "🙁";
                console.log('incorrect');
            }
        },

        shuffle(){
            this.problems.sort(() => Math.random() * 2 - 1);
        },

        resetPracticeArea(){
            this.responseEmoji = "🤔";
            this.answer = "";
            document.getElementById("theanswer").focus();
            this.errorMessage = '';
        }
    }
});