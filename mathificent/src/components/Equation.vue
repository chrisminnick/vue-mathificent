<template>
    <div id="equation" :class="cls">
      <div class="col-5">{{String(question)}}</div>
      <div class="col-2">=</div>
      <div class="col-5">{{answer}}</div>
    </div>
</template>
<script>
export default {
    name: 'Equation',
    props: ['question','answer','answered'],
    computed: {
        cls:(answered)=>{answered
            ? 'row text-primary fade'
            : 'row text-secondary'}
    }
}
</script>
<style scoped>
#equation {
  font-size: 1.6em;
  margin: auto;
  width: 90%;
}
</style>