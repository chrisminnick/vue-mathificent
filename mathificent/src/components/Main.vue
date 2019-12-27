<template>
<div>
    <div v-if="screen==='config'">
        <div class="container" id="config-container">
            <SelectInput :currentValue="currentOperation" label="Operation" id="operation" v-model="currentOperation" :options="operations" />
            <SelectInput :currentValue="maxNumber" label="Maximum Number" id="max-number" v-model="maxNumber" :options="numbers" />
            <button class="btn btn-primary" v-on:click="play()">Play!</button>
            <p>current operation: {{currentOperation}}</p>
            <p>max number: {{maxNumber}}</p>
        </div>
    </div>
    <div v-if="screen==='play'">
        <div class="container" id="game-container">
            <template v-if="timeLeft===0">
                <button class="btn btn-primary" v-on:click="config()">Play Again</button>
            </template>
            <template v-else>
                <div class="row game-ui">
                    <div class="col mx-3 text-left">
                        <Score :score="score" />
                    </div>
                    <div class="col mx-3 text-left">
                        <Timer :timeLeft="timeLeft" />
                    </div>
                </div>
                <div class="row">
                    <Equation :question="question" 
                      :answer="answer"
                      :answered="answered" 
                      v-on:correct="newQuestion"/>
                </div>
                <div class="row" id="buttons">
                    <button class="btn btn-primary" :prevValue = "input" v-for="button in buttons" v-on:click="setInput(input,button)" v-bind:key="button" v-bind:value="button">{{button}}</button>
                    <ClearButton @clear="clear()" />
                </div>
            </template>
        </div>
    </div>
</div>
</template>
<script>
import SelectInput from './SelectInput';
import Score from './Score';
import Timer from './Timer';
import Equation from './Equation';
import ClearButton from './ClearButton';
import {checkAnswer,getRandNumbers,getCorrectAnswer} from '../helpers/gameplay';


    /* if (displayAnswer === 'correct') {
      
      score = score + 1;
      operands = getRandNumbers(
      props.operation, 0,
      props.maxNumber
      );
      correctAnswer = getCorrectAnswer(
      props.operation,
      newRandNums.num1,
      newRandNums.num2
      );

      } */

export default {
    name: 'Main',
    components: {
        SelectInput,
        Score,
        Timer,
        Equation,
        ClearButton
    },
    data: function(){
        return {
        score: 0,
        input: '',
        answer: '',
        operands: {num1:4,num2:1},
        correctAnswer: 2, 
        answered: true,
        timeLeft:10,
        operations: ['+','x','/','-'],
        buttons: [1,2,3,4,5,6,7,8,9,0],
        currentOperation: '+',
        maxNumber: 2,
        screen: 'config'
        }
    },
    computed: {
        numbers: function() {
            let numbers = [];
            for (let number=2;number<=100;number++){
                numbers.push(number);
            }
            return numbers;
        },
        getOperands: function() {
            let randNums = getRandNumbers(
                this.operation, 0,
                this.maxNumber);
                return randNums;
        },
        question: function(){
            let equation = `${this.operands.num1} ${this.currentOperation} ${this.operands.num2}`;
            return equation;
        },
    },
    methods: {
        config() {
            this.screen = "config";
        },
        play() {
            this.screen = "play";
        },
        clear() {
            this.answer = '';
        },
        setInput(prevValue,value){
            this.input = String(prevValue) + String(value);
            this.answer = checkAnswer(this.input,this.correctAnswer);
        },
        newQuestion() {
            this.setInput('');
            this.answered = false;
            this.operands = getRandNumbers(
                this.operation, 0, this.maxNumber
            );
            let newCorrectAnswer = getCorrectAnswer(
                this.operation,
                this.operands.num1,
                this.operands.num2
            );
            this.correctAnswer = newCorrectAnswer;
        },
        getCorrectAnswer
    }
    
}
</script>

<style scoped>
    .game-ui {
        border-bottom: "thin #000 solid";
        font-size: 1.5em;

    }
    #game-container {
        width: 400px;
        margin: 1em auto;
    }
    #config-container {
        width: 400px;
        margin: 1em auto;
        font-size: 1.5em;
    }
    #buttons button {
        border-radius: .25em;
        font-size: 3em;
        height: 2em;
        margin: .1em;
        text-align: center;
        width: 2em;
    }
</style>