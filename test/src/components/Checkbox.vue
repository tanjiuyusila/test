<template>
  <div>
    <h1>{{index}}.多选题</h1>
    <span>{{title}}</span>
    <el-checkbox-group v-model="checkList" v-for="(option,index) in options" :key=index @change="fn">
      <el-checkbox :label="index" :key="index">{{option}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        checkList:[],
      }
    },
    props:[
      'index',
      'title',
      'options'
    ],
    methods:{
      fn(){
        console.log(this.checkList)
      }
    }
  }
</script>

<style scoped>

</style>
