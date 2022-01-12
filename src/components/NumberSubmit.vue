<template>
  <div>
    <input type="number" v-model="number">
    <button @click="addNumber(number)">Add New Number</button>
  </div>
</template>

<script>
export default {
  name: "NumberSubmit",
  data(){
    return {
      number:0
    }
  },
  methods:{
    addNumber(number){
      this.$store.dispatch('addNumber', number)
    }
  }
}
</script>

<style scoped>

</style>
