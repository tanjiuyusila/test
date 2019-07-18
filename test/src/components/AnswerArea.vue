<template>
  <div>
    <h1>{{nowIndex}}.编程题</h1>

  </div>
</template>

<script>
  export default {
    created(){
      this.nowTest = this.program[0];
      this.programNum = this.program.length;
      // console.log(this.nowTest);
    },
    data(){
      return {
        nowIndex:1,
        nowTest:{},
        programNum:0,
      }
    },
    methods:{
      changIndex(){
        this.nowTest = this.program[this.nowIndex-1];
      },
    },
    props:[
      'index',
      'program',
    ],
  }
</script>

<style scoped>

</style>


