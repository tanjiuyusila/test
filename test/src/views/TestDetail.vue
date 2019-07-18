<template>
  <div>

    <el-container class="container" style="height: 500px; border: 1px solid #eee">
      <el-header>
        <el-col :span="6">套题{{this.paperId}}</el-col>
        <el-col :span="12" :offset="6">

          <!--<el-row>-->
            <!--<el-radio-group v-model="currentView" @chang="changeCurrentView">-->
              <!--<el-radio-button label="1">单选题</el-radio-button>-->
              <!--<el-radio-button label="2">多选题</el-radio-button>-->
              <!--<el-radio-button label="3">编程题</el-radio-button>-->
            <!--</el-radio-group>-->
          <!--</el-row>-->
          <el-button type="primary" plain size="mini" @click="changeToRadio">单选题</el-button>
          <el-button type="primary" plain size="mini" @click="changeToSelect">多选题</el-button>
          <el-button type="primary" plain size="mini" @click="changeToProgram">编程题</el-button>
        </el-col>


      </el-header>
      <el-main height='500px'>
          <Radio :index="nowIndex" v-if="radioShow" :select="select"></Radio>
          <Checkbox :index="nowIndex" :multiple="multiple" v-if="selectShow"></Checkbox>
          <AnswerArea :index="nowIndex" :program="program" v-if="programShow"></AnswerArea>
      </el-main>

      <el-footer>
            <span>全部试题（{{now}}/{{totalNum}}）</span>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
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
      this.changIndex();
    },
    data(){
      return{
        // radio : '',
        currentView:1,
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
        activeName:"t_select",
      }
    },
    methods:{
      changeCurrentView(){
        console.log(this.currentView);
        switch (this.currentView) {
          case 1:
            this.changeToRadio();
            break;
          case 2:
            this.changeToSelect();
            break;
          case 3:
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
      changIndex(){
        if(this.activeName == 't_select'){
          this.nowTest = this.select[this.nowIndex-1];
        }else if(this.activeName == 't_multiple'){
          this.nowTest = this.multiple[this.nowIndex-1];
        }else{
          this.nowTest = this.program[this.nowIndex-1];
        }

        // this.nowTest = this.select[this.nowIndex-1];
      },
      change(tab, event){
        // console.log(tab, event);
        // console.log(this.activeName);
        // console.log(this.nowIndex-1);

        if(this.activeName == 't_select'){
          this.radioShow=false;
          this.selectShow=true;
          this.programShow=false;
          this.nowIndex = 1;
          this.nowTest = this.select[0];
        }else if(this.activeName == 't_multiple'){
          this.radioShow=false;
          this.selectShow=true;
          this.programShow=false;
          this.nowIndex = 1;
          this.nowTest = this.multiple[0];

        }else{
          this.radioShow=false;
          this.selectShow=false;
          this.programShow=true;
          this.nowIndex = 1;
          this.nowTest = this.program[0];

        }
      }
    },
    components:{
      Radio,
      Checkbox,
      AnswerArea,

    },
    computed:{

      now(){
        if(this.activeName == 't_select'){
          return this.nowIndex;
        }else if(this.activeName == 't_multiple'){
          return this.nowIndex + this.select.length;
        }else{
          return this.nowIndex + this.select.length + this.multiple.length;
        }
      }

    }
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
