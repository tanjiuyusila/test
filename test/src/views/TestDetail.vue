<template>
  <div>

    <el-container class="container" style="border: 1px solid #eee;font-size: 30px">
      <el-header style="wigth:800px">
        <el-col :span="6">套题{{this.exec_id}}</el-col>
        <el-col :span="12" :offset="6">

          <el-radio-group v-model="activeName" @change="handleChange">
            <el-radio-button v-for="(elem,index) in examCategory" :label="index" :key="index">{{elem}}</el-radio-button>
          </el-radio-group>

        </el-col>
      </el-header>
      <el-main height='600px' v-if="show" >
          <Radio v-if="radioShow" :select="select" :token_id="token_id" :totalNum="totalNum" @plusOne="plusOne"></Radio>
          <Checkbox :multiple="multiple" v-if="selectShow" :token_id="token_id" :totalNum="totalNum" :selectNum="selectNum" @plusOne="plusOne"></Checkbox>
          <AnswerArea :program="program" :token_id="token_id" v-if="programShow"></AnswerArea>
      </el-main>
      <el-footer>
        <el-col :span="6" :offset="18">
          <el-button type="primary" size="medium" plain @click="submitAnswer" :disabled="disabled">提交</el-button>
        </el-col>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import axios from 'axios';
  import Radio from '@/components/Radio';
  import Checkbox from '@/components/Checkbox';
  import AnswerArea from '@/components/AnswerArea';
  import { mapState } from 'vuex';
  export default {
    created(){
      (async () => {
        let radio = await this.requestP('http://localhost:3000/single_r/'+this.exec_id);
        let select = await this.requestP('http://localhost:3000/multiple_r/'+this.exec_id);
        let program = await this.requestP('http://localhost:3000/program_r/'+this.exec_id);
        this.select = radio.data;
        this.multiple = select.data;
        this.program = program.data;
        this.selectNum = this.select.length;
        this.programNum = this.program.length;
        this.multipleNum = this.multiple.length;
        this.disabled=false,
        this.totalNum = this.select.length + this.program.length + this.multiple.length;
        if(this.select.length > 0){
          this.examCategory.push('单选题');
        };
        if(this.multiple.length > 0){
          this.examCategory.push('多选题');
        };
        if(this.program.length > 0){
          this.examCategory.push('编程题');
        }
        if(this.select.length > 0){
          this.nowTest = this.select;
        }else if(this.multiple.length > 0){
          this.nowTest = this.multiple;
        }else{
          this.nowTest = this.program;
        }
        this.handleChange();
        this.show = true;
      })();
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
        // nowIndex:1,  //当前索引
        totalNum:0,  //题数量
        nowTest:{},
        select:[],
        multiple:[],
        program:[],
        examCategory:[],
        activeName:0,
        allData:[],
        disabled:false,
      }
    },
    methods:{
      requestP(url) {
        return new Promise(function(resolve, reject) {
          axios(url).then( (res) => {
            resolve(res);
          });
        });
      },
      submitAnswer(){
        var sLength = this.radioData.length;
        var mLength = this.selectionData.length;
        var pLength = this.programData.length;
        console.log(this.radioData);
        console.log(this.selectionData);
        console.log(this.programData);
        if(sLength+mLength+pLength < this.selectNum+this.programNum+this.multipleNum){
          console.log('没答完题');
          this.$message('请在作答全部习题之后提交答案');
        }else{
          console.log('答完啦');

            this.allData.push(this.radioData);
            this.allData.push(this.selectionData);
            this.allData.push(this.programData);

          console.log(this.allData);
          axios.post('http://localhost:3000/all_write',this.allData)
            .then(res => {
              console.log(res);
              if(res.data.code == 200){
                this.disabled = true;
              }else{
                this.$message('提交失败，请重新提交');
              }
            }).catch(err => {
              console.log(err)
          });
        }
      },
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
    computed:{
      ...mapState(['radioData','selectionData','programData']),
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
  height: 700px;
  width: 100%;
  margin:20px auto;
}
.el-aside {
  color: #333;
  padding:20px 0;
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
