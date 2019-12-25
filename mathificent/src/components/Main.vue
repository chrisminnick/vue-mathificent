<template>
<div>
    <div v-if="screen==='config'">
        <SelectInput :currentValue="currentOperation" label="Operation" id="operation" v-model="currentOperation" :options="operations" />
        <SelectInput :currentValue="maxNumber" label="Maximum Number" id="max-number" v-model="maxNumber" :options="numbers" />
        <ScoreOutputBox />
        <button v-on:click="play()">Play!</button>
        <p>current operation: {{currentOperation}}</p>
        <p>max number: {{maxNumber}}</p>
    </div>
    <div v-if="screen==='play'">
        <button v-on:click="config()">Change the Game!</button>
    </div>
</div>
</template>
<script>
import SelectInput from './SelectInput';
import ScoreOutputBox from './ScoreOutputBox';

export default {
    name: 'Main',
    components: {
        SelectInput,
        ScoreOutputBox
    },
    data: function(){
        return {
        operations: ['+','x','/','-'],
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