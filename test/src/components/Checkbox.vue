<template>
  <div>
    <h1>{{nowIndex}}.多选题</h1>
    <span>{{nowTest.title}}</span>
    <el-checkbox-group v-model="checkList" v-for="(option,index) in nowTest.options" :key=index @change="checkBoxChange">
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
  import{ mapState } from 'vuex';
  export default {
    created(){
      // console.log(this.multiple);
      this.nowTest = this.multiple[0];
      this.multipleNum = this.multiple.length;
      this.changIndex();
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
      checkBoxChange(){
        // console.log(this.checkList);
        this.$store.dispatch('saveCheckbox',[this.nowTest.id,this.checkList]);
      },
      changIndex(){
        this.checkList=[];
        this.nowTest = this.multiple[this.nowIndex-1];
        // console.log(this.nowIndex);
        this.$store.dispatch('searchSelect',[this.nowTest.id]);
        console.log(this.nowData);
        if(this.nowData.length > 0){
          // console.log(1111)
          this.checkList = this.nowData[0].user_answer;
        }
      },
    },
    computed:{
      ...mapState(['nowData'])
    }
  }
</script>

<style scoped>

</style>
