<template>
    <div>
        <SelectInput :currentValue="currentOperation" label="Operation" id="operation" v-model="currentOperation" :options="operations" />
        <SelectInput :currentValue="maxNumber" label="Maximum Number" id="max-number" v-model="maxNumber" :options="numbers" />
        <ScoreOutputBox />
        <PlayButton />
        <p>current operation: {{currentOperation}}</p>
        <p>max number: {{maxNumber}}</p>
    </div>
</template>
<script>
import SelectInput from './SelectInput';
import ScoreOutputBox from './ScoreOutputBox';
import PlayButton from './PlayButton';

export default {
    name: 'Main',
    components: {
        SelectInput,
        ScoreOutputBox,
        PlayButton
    },
    data: function(){
        return {
        operations: ['+','x','/','-'],
        currentOperation:'+',
        maxNumber:2
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
    }
    
}
</script>