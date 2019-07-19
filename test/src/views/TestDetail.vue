<template>
  <div>

    <el-container class="container" style="height: 500px; border: 1px solid #eee">
      <el-header>
        <el-col :span="6">套题{{this.exec_id}}</el-col>
        <el-col :span="12" :offset="6">

          <el-radio-group v-model="activeName" @change="handleChange">
            <el-radio-button v-for="(elem,index) in examCategory" :label="index" :key="index">{{elem}}</el-radio-button>
          </el-radio-group>

        </el-col>

      </el-header>
      <el-main height='500px' v-if="show">
          <Radio :index="nowIndex" v-if="radioShow" :select="select" :totalNum="categoryNum" :token_id="token_id" @plusOne="plusOne"></Radio>
          <Checkbox :index="nowIndex" :multiple="multiple" v-if="selectShow" :token_id="token_id" @plusOne="plusOne"></Checkbox>
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
      axios.get('http://localhost:3000/single_r/'+this.exec_id)
        .then(res => {
          // this.select = res.data;
          // console.log(res.data);
          this.select = res.data;
          // console.log(this.select);
          this.show = true
        }).catch();
      axios.get('http://localhost:3000/multiple_r/'+this.exec_id)
        .then(res => {
          this.multiple = res.data;
          this.show = true
        }).catch();
      // this.totalNum = this.select.length + this.program.length + this.multiple.length;
      // this.selectNum = this.select.length;
      // this.programNum = this.program.length;
      // this.multipleNum = this.multiple.length;
      this.nowTest = this.select;
      this.categoryNum = this.examCategory.length;
      this.activeName = 0;
      this.token_id=118118;

    },
    data(){
      return{
        // radio : '',
        // currentView:1,
        show :false,
        radioShow:true,
        selectShow:false,
        programShow:false,
        exec_id:this.$route.params.id,
        nowIndex:1,  //当前索引
        totalNum:0,  //题数量
        nowTest:{},
        /* 原select
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
        */
        select:[],
        multiple:[
          {
            answer: "优",
            answer_desc: "要选就选最好的",
            choice_a: "优",
            choice_b: "良",
            choice_c: "中",
            choice_d: "差",
            exer_id: 1,
            mc_id: 1,
            title: "多选题第一道",
          },{
            answer: "好迪",
            answer_desc: "好迪真好",
            choice_a: "你好",
            choice_b: "我好",
            choice_c: "大家好",
            choice_d: "好迪",
            exer_id: 1,
            mc_id: 2,
            title: "多选题第二道",
          },{answer: "北岛",
            answer_desc: "卑鄙是卑鄙者的通行证",
            choice_a: "食指",
            choice_b: "海子",
            choice_c: "卞之琳",
            choice_d: "北岛",
            exer_id: 1,
            mc_id: 3,
            title: "多选题第三道"
          },{
            answer: "choice_b",
            answer_desc: "春天，十个海子全部复活",
            choice_a: "哈尔盖",
            choice_b: "春天",
            choice_c: "撒哈拉",
            choice_d: "相信未来",
            exer_id: 1,
            mc_id: 4,
            title: "多选题第四道"
        }],
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
