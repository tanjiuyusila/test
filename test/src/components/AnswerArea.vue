<template>
  <div>
    <h1>{{nowIndex}}.编程题</h1>
    <span>{{nowTest.title}}</span>
    <el-row>
      <el-radio-group v-model="nowIndex" @change="changIndex()">
        <el-col :span="6" class="testRow" v-for="index in programNum" :key=index>
          <el-radio-button :label="index" fill>{{index}}</el-radio-button>
        </el-col>
      </el-radio-group>
    </el-row>
  </div>
</template>

<script>
  export default {
    created(){
      this.nowTest = this.program[0];
      this.programNum = this.program.length;
      console.log(this.nowTest);
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


