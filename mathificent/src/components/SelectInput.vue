<template>
    <div>
        <label>{{label}}
            <select :name="id">
            <option v-for="value in values" v-bind:key="value" v-bind:value="value">{{value}}</option>
            </select>
        </label>
    </div>
</template>
<script>
export default {
    name: 'SelectInput',
    props: ['id','label','values']
}
</script>