<template>
  <div>
    <h1>{{nowIndex}}.多选题</h1>
    <span>{{nowTest.title}}</span>
    <el-checkbox-group v-model="checkList" v-for="(option,index) in nowTest.options" :key=index @change="change">
      <el-checkbox :label="index" :key="index">{{option}}</el-checkbox>
    </el-checkbox-group>
    <el-row>
      <el-radio-group v-model="nowIndex" @change="changIndex()">
        <el-col :span="6" class="testRow" v-for="index in multipleNum" :key=index>
          <el-radio-button :label="index" fill>{{index}}</el-radio-button>
        </el-col>
      </el-radio-group>
    </el-row>
  </div>
</template>

<script>
  export default {
    created(){
      console.log(this.multiple);
      this.nowTest = this.multiple[0];
      this.multipleNum = this.multiple.length;
    },
    data(){
      return{
        checkList:[],
        nowTest:{},
        nowIndex:1,
        multipleNum:0,
      }
    },
    props:[
      'index',
      'multiple',
    ],
    methods:{
      change(){
        console.log(this.checkList);
      },
      changIndex(){
        this.checkList=[];
        this.nowTest = this.multiple[this.nowIndex-1]
        // console.log(this.nowIndex);
      },
    }
  }
</script>

<style scoped>

</style>
