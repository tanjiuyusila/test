<template>
  <div>
    SingleTestSingleTestSingleTestSingleTest
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    created(){
      axios.get('http://localhost:3000/program_r').then( res => {
        console.log(res)
      })
    }
  }
</script>

<style scoped>

</style>
