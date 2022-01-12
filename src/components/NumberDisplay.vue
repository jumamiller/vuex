<template>
  <div class="container">
    <h3>{{getNumbers}}</h3>
  </div>
  <div>
    <NumberSubmit/>
  </div>
</template>

<script>
import NumberSubmit from './NumberSubmit.vue';
export default {
  name: "NumberDisplay",
  computed:{
    getNumbers(){
      return this.$store.getters.getNumbers;
    }
  },
  components:{
    NumberSubmit
  }
}
</script>

<style scoped>

</style>
