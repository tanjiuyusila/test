<template>
  <div>
    <h1>{{index}}.单选题</h1>
    <span>{{title}}</span>
    <el-radio-group v-model="radio" v-for="(option,index) in options">
      <el-radio :label="index">{{option[index]}}</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        radio:''
      }

    },
    props:[
      'index',
      'title',
      'options'
    ],
  }
</script>

<style scoped>

</style>
