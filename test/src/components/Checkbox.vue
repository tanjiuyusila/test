<template>
  <div>
    <h1>{{nowIndex}}.多选题</h1>
    <span>{{nowTest.title}}</span>
    <el-checkbox-group v-model="checkList" >
      <el-checkbox :label="0" @change="checkBoxChange">{{nowTest.choice_a}}</el-checkbox>
      <el-checkbox :label="1" @change="checkBoxChange">{{nowTest.choice_b}}</el-checkbox>
      <el-checkbox :label="2" @change="checkBoxChange">{{nowTest.choice_c}}</el-checkbox>
      <el-checkbox :label="3" @change="checkBoxChange">{{nowTest.choice_d}}</el-checkbox>
    </el-checkbox-group>
    <el-row>
      <el-radio-group v-model="nowIndex" @change="changIndex()">
        <el-col :span="6" class="testRow" v-for="index in multipleNum" :key=index>
          <el-radio-button :label="index" fill>{{index}}</el-radio-button>
        </el-col>
      </el-radio-group>
    </el-row>
    <el-button type="primary" @click="nextIndex" :disabled="disabled">下一页</el-button>
  </div>
</template>

<script>
  import{ mapState } from 'vuex';
  export default {
    created(){
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
        disabled:false,
      }
    },
    methods:{
      nextIndex(){
        if(this.nowIndex < this.multipleNum){
          this.nowIndex ++ ;
          this.changIndex();
          console.log(this.nowIndex);
          console.log(this.selectNum);
          console.log(this.totalNum);
          if(this.nowIndex + this.selectNum == this.totalNum){
            this.disabled = true;
          }
        }else{
          this.$emit('plusOne');
        }
      },
      checkBoxChange(){
        // console.log(this.nowTest.mc_id);
        // console.log(this.checkList);
        this.$store.dispatch('saveCheckbox',[this.nowTest.mc_id,this.checkList,this.token_id]);
        // console.log(this.selectData)
      },
      changIndex(){
        this.checkList=[];
        this.nowTest = this.multiple[this.nowIndex-1];
        this.$store.dispatch('searchSelect',[this.nowTest.mc_id]);
        // console.log(this.nowData);
        if(this.nowData.length > 0){
          this.checkList = this.nowData[0].user_answer;
        }
        if(this.nowIndex + this.selectNum == this.totalNum){
          this.disabled = true;
        }else{
          this.disabled = false;
        }
      },
    },
    computed:{
      ...mapState(['nowData'])
    },
    props:[
      'index',
      'multiple',
      'token_id',
      'selectNum',
      'totalNum',
    ],
  }
</script>

<style scoped>

</style>
