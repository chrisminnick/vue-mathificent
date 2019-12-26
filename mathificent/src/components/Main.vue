<template>
<div>
    <div v-if="screen==='config'">
        <SelectInput :currentValue="currentOperation" label="Operation" id="operation" v-model="currentOperation" :options="operations" />
        <SelectInput :currentValue="maxNumber" label="Maximum Number" id="max-number" v-model="maxNumber" :options="numbers" />
        <button v-on:click="play()">Play!</button>
        <p>current operation: {{currentOperation}}</p>
        <p>max number: {{maxNumber}}</p>
    </div>
    <div v-if="screen==='play'">
        <div className="container" id="game-container">
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
                    Equation: (equation here)
                </div>
                <div class="row" id="buttons">
                    <button class="btn btn-primary" v-for="button in buttons" v-bind:key="button" v-bind:value="button">{{button}}</button>
                    <button class="btn btn-primary" v-on:click="clear()">Clear</button>
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

export default {
    name: 'Main',
    components: {
        SelectInput,
        Score,
        Timer
    },
    data: function(){
        return {
        score: 0,
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
        }
    },
    methods: {
        config() {
            this.screen = "config";
        },
        play() {
            this.screen = "play";
        }
    }
    
}
</script>

<style scoped>
    .game-ui {
        border-bottom: "thin #000 solid";
        font-size: 1.5em;
    }
    #game-container {
        width: 320px;
        margin: 1em auto;
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