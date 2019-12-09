<template>
    <div>
        <SelectInput />
        <SelectInput />
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
    }
}
</script>