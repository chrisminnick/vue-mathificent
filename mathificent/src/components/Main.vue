<template>
    <div>
        <SelectInput label="Operation" id="operation" :values="operations" />
        <SelectInput label="Maximum Number" id="max-number" :values="numbers" />
        <ScoreOutputBox />
        <PlayButton />
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