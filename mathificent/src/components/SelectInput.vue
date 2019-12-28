<template>
    <div>
        <label>{{label}}
            <select :name="id" v-bind:value="currentValue" v-on:input="$emit('input',$event.target.value)">
            <option v-for="option in options" v-bind:key="option" v-bind:value="option">{{option}}</option>
            </select>
        </label>
    </div>
</template>
<script>
export default {
    name: 'SelectInput',
    props: ['id','label','options','currentValue']
}
</script>