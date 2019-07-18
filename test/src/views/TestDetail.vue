<template>
  <div>

    <el-container class="container" style="height: 500px; border: 1px solid #eee">
      <el-header>
        <el-col :span="6">套题{{this.paperId}}</el-col>
        <el-col :span="12" :offset="6">

          <el-radio-group v-model="activeName" @change="handleChange">
            <el-radio-button v-for="(elem,index) in examCategory" :label="index" :key="index">{{elem}}</el-radio-button>
          </el-radio-group>

        </el-col>

      </el-header>
      <el-main height='500px'>
          <Radio :index="nowIndex" v-if="radioShow" :select="select" :totalNum="categoryNum" @plusOne="plusOne"></Radio>
          <Checkbox :index="nowIndex" :multiple="multiple" v-if="selectShow" @plusOne="plusOne"></Checkbox>
          <AnswerArea :index="nowIndex" :program="program" v-if="programShow"></AnswerArea>
      </el-main>

    </el-container>
  </div>
</template>

<script>
  import axios from 'axios';
  import Radio from '@/components/Radio';
  import Checkbox from '@/components/Checkbox';
  import AnswerArea from '@/components/AnswerArea';
  export default {
    created(){
      this.totalNum = this.select.length + this.program.length + this.multiple.length;
      this.selectNum = this.select.length;
      this.programNum = this.program.length;
      this.multipleNum = this.multiple.length;
      this.nowTest = this.select;
      this.categoryNum = this.examCategory.length;
      this.activeName = 0;
      axios.get('http://localhost:3000/single_r/'+this.paperId)
        .then(res => {
          console.log(res);
        }).catch()
    },
    data(){
      return{
        // radio : '',
        // currentView:1,
        radioShow:true,
        selectShow:false,
        programShow:false,
        paperId:this.$route.params.id,
        nowIndex:1,  //当前索引
        totalNum:0,  //题数量
        nowTest:{},
        select:[
          {
            id:11,
            flag:1,
            title:'选择题1XXXXXXXXXX',
            options:['aaaa','bbbb','cccc','ddd']
          },
          {
            id:22,
            flag:1,
            title:'选择题2XXXXXXXXXX',
            options:['aaa','bbbb','cccc','dddd']
          },
          {
            id:33,
            flag:1,
            title:'选择题3XXXXXXXXXX',
            options:['aaaa','bbb','cccc','dddd']
          },
          {
            id:44,
            flag:1,
            title:'选择题4XXXXXXXXXX',
            options:['aaaa','bbbb','ccc','dddd']
          }
        ],
        multiple:[
          {
            id:21,
            flag:2,
            title:'多选题1XXXXXXXXXX',
            options:['aaaa','bbbb','ccc','dddd']
          },
           {
            id:31,
            flag:2,
            title:'多选题2XXXXXXXXXX',
            options:['aaaa','bbbb','ccc','dddd']
          }, {
            id:41,
            flag:2,
            title:'多选题3XXXXXXXXXX',
            options:['aaaa','bbbb','ccc','dddd']
          }, {
            id:51,
            flag:2,
            title:'多选题4XXXXXXXXXX',
            options:['aaaa','bbbb','ccc','dddd']
          },
        ],
        program:[
          {
            id:111,
            title:'fill1'
          },
          {
            id:122,
            title:'fill2'
          },
          {
            id:133,
            title:'fill3'
          },{
            id:144,
            title:'fill4'
          }
        ],
        examCategory:['单选题','多选题','编程题'],
        activeName:0,
      }
    },
    methods:{
      plusOne(){
        this.activeName += 1;
        this.handleChange();
      },
      handleChange(tab, event) {
        switch(this.examCategory[this.activeName]){
          case  '单选题':
            this.changeToRadio();
            break;
          case  '多选题':
            this.changeToSelect();
            break;
          case  '编程题':
            this.changeToProgram();
            break;
        }
      },

      changeToRadio(){
        this.radioShow=true;
        this.selectShow=false;
        this.programShow=false;
      },
      changeToSelect(){
        this.radioShow=false;
        this.selectShow=true;
        this.programShow=false;
      },
      changeToProgram(){
        this.radioShow=false;
        this.selectShow=false;
        this.programShow=true;
      },
    },
    components:{
      Radio,
      Checkbox,
      AnswerArea,
    },
  }
</script>

<style scoped>
.container{
  height: 800px;
  width: 1000px;
  margin:20px auto;
  /*background: #cccccc;*/
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  /*text-align: center;*/
  /*line-height: 200px;*/
  padding:20px 0;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  /*text-align: center;*/
  /*line-height: 160px;*/
}
.el-header{
  background-color: #ccc;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-footer{
  background-color: #ccc;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.testRow{
  margin-bottom:20px;
}

</style>
