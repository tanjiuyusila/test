<template>
  <div>

    <el-container class="container" style="height: 500px; border: 1px solid #eee">
      <el-header>
        <span>
          套题{{this.paperId}}
        </span>
        <span>
          计时：
        </span>
      </el-header>
      <el-main height='500px'>
         <Radio :index="nowIndex" :title="nowTest.title" :options="nowTest.options" v-show="radioShow"></Radio>
          <Checkbox :index="nowIndex" :title="nowTest.title" :options="nowTest.options" v-show="selectShow"></Checkbox>
          <AnswerArea :index="nowIndex" :title="nowTest.title" v-show="programShow"></AnswerArea>
      </el-main>

      <el-footer>
            <span>全部试题（{{now}}/{{totalNum}}）</span> 

            <el-tabs v-model="activeName" type="card" @tab-click="change">
              <el-tab-pane label="单选题部分" name="t_select">
                <el-row>
                  <el-radio-group v-model="nowIndex" @change="changIndex">
                    <el-col :span="6" class="testRow" v-for="index in selectNum" :key=index>
                        <el-radio-button :label="index" fill></el-radio-button>
                    </el-col>
                  </el-radio-group>
                </el-row>
              </el-tab-pane>

              <el-tab-pane label="多选题部分" name="t_multiple">
                <el-row>
                  <el-radio-group v-model="nowIndex" @change="changIndex">
                    <el-col :span="6" class="testRow" v-for="index in multipleNum" :key=index>
                        <el-radio-button :label="index" fill></el-radio-button>
                    </el-col>
                  </el-radio-group>
                </el-row>
              </el-tab-pane>

              <el-tab-pane label="在线编程题部分" name="t_program">
                <el-row>
                  <el-radio-group v-model="nowIndex" @change="changIndex">
                    <el-col :span="6" class="testRow" v-for="index in programNum" :key=index>
                      <el-radio-button :label="index" ></el-radio-button>
                    </el-col>
                  </el-radio-group>
                </el-row>
              </el-tab-pane>
            </el-tabs>
            
            
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
      this.nowTest = this.select[0];
      // console.log(this.totalNum);
      // this.buttonRadio='1';

      this.changIndex();
    },
    data(){
      return{
        radioShow:true,
        selectShow:false,
        programShow:false,
        // currentView: 'Radio',
        // buttonRadio:'1',
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
            id:1,
            flag:2,
            title:'多选题1XXXXXXXXXX',
            options:['aaaa','bbbb','ccc','dddd']
          },
           {
            id:1,
            flag:2,
            title:'多选题2XXXXXXXXXX',
            options:['aaaa','bbbb','ccc','dddd']
          }, {
            id:1,
            flag:2,
            title:'多选题3XXXXXXXXXX',
            options:['aaaa','bbbb','ccc','dddd']
          }, {
            id:1,
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
      changIndex(){
        this.nowTest = this.select[this.nowIndex-1];
      },
      change(tab, event){
        // console.log(tab, event);
        // console.log(this.activeName);
        if(this.activeName == 't_select'){
          this.radioShow=true;
          this.selectShow=false;
          this.programShow=false;
        }else if(this.activeName == 't_multiple'){
          this.radioShow=false;
          this.selectShow=true;
          this.programShow=false;
          this.nowIndex = 1;
        }else{
          this.radioShow=false;
          this.selectShow=false;
          this.programShow=true;
          this.nowIndex = 1;
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
