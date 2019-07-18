<template>
  <div>
    <h1>{{nowIndex}}.编程题</h1>
    <!--<iframe src="http://localhost:8080/code" width="500px" height="500px" frameborder="0" name="programData" scrolling="auto" id="iframe1">-->
    <iframe src="http://localhost:8080/code" width="500px" height="500px" frameborder="0" scrolling="auto" ref="iframe">
    </iframe>
  </div>
</template>

<script>
  export default {
    created(){
      this.nowTest = this.program[0];
      this.programNum = this.program.length;
    },
    mounted () {
      console.log(this.$refs.iframe.contentWindow);
      // var a = document.getElementById('preview');

    },
    data(){
      return {
        nowIndex:1,
        nowTest:{},
        programNum:0,
        iframe1:'',

      }
    },
    methods:{
      getEditor(){
        // var iframe = document.getElementById('myFrame');
        // if (iframe.attachEvent) {
        //   iframe.attachEvent("onload", function () {
        //     console.log(iframe.contentWindow.document.body.innerHTML);
        //   });
        // } else {
        //   iframe.onload = function () {
        //     console.log(iframe.contentWindow.document.body.innerHTML);
        //   };
        // }

      },
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


