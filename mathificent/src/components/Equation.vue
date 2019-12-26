<template>
    <div id="equation" :class="cls">
      <div className="col-5">{{question}}</div>
      <div className="col-2">=</div>
      <div className="col-5">{{answer}}</div>
    </div>
</template>
<script>
export default {
    name: 'Timer',
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