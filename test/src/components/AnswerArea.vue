<template>
  <div>
    <h1>{{nowIndex}}.编程题</h1>
    <iframe src="http://localhost:8080/code" width="500px" height="500px" frameborder="0" name="progranIframe" scrolling="yes">
    </iframe>
  </div>
</template>

<script>
  var a = document.getElementsByTagName('iframe');
  console.log(a);
  export default {
    created(){
      this.nowTest = this.program[0];
      this.programNum = this.program.length;

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


