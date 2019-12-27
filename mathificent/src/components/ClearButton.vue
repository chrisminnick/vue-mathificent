<template>
    <button class="btn btn-primary" v-on:click="$emit('clear')">Clear</button>
</template>

<script>
export default {
    name:'ClearButton'
}
</script>
<style scoped>
    button {
        width: 4.2em;
    }
</style>