<template>
    <div>
        <label>{{label}}
            <select :name="id" v-on:input="$emit('input',$event.target.value)">
            <option v-for="option in options" v-bind:key="option" v-bind:value="option">{{option}}</option>
            </select>
        </label>
        <p>selected: {{selected}}</p>
    </div>
</template>
<script>
export default {
    name: 'SelectInput',
    props: ['id','label','options'],
    data: function(){
        return {
            selected: ''
        }
    }
}
</script>