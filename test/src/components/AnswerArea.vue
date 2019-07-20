<template>
  <div>
    <h1>{{nowIndex}}.编程题</h1>
    <!--<iframe src="http://localhost:8080/code" width="500px" height="500px" frameborder="0" scrolling="auto" ref="iframe">-->
    <!--</iframe>-->
    {{nowTest.title}}
    <el-row>
      <el-radio-group v-model="nowIndex" @change="changIndex()">
        <el-col :span="6" class="testRow" v-for="index in programNum" :key=index>
          <el-radio-button :label="index" fill >{{index}}</el-radio-button>
        </el-col>

      </el-radio-group>
    </el-row>
    <el-button type="primary" @click="nextIndex" :disabled="disabled">下一页</el-button>
    <el-button type="primary" @click="saveFinal">保存答案</el-button>
    <!--<el-input v-model="inputHtml" placeholder="html" @blur="saveHtml"></el-input>-->
    <!--<el-input v-model="inputCss" placeholder="css" @blur="saveCss"></el-input>-->
    <!--<el-input v-model="inputJavascript" placeholder="js" @blur="saveJs"></el-input>-->
    <el-input v-model="inputHtml" placeholder="html"></el-input>
    <el-input v-model="inputCss" placeholder="css"></el-input>
    <el-input v-model="inputJavascript" placeholder="js"></el-input>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    created(){
      this.nowTest = this.program[0];
      this.programNum = this.program.length;
      this.inputHtml='';
      this.inputCss='';
      this.inputJavascript='';
      this.changIndex();
    },
    mounted () {
      // console.log(this.$refs.iframe.contentWindow.document);
      // var a = document.getElementById('preview');
    },
    data(){
      return {
        nowIndex:1,
        nowTest:{},
        programNum:0,
        // iframe1:'',
        inputHtml:'',
        inputCss:'',
        inputJavascript:'',
        disabled:false,
      }
    },
    methods:{
      // saveHtml(){
      //     this.$store.dispatch('saveHtml',[this.token_id,this.nowTest.p_id,this.inputHtml]);
      // },
      // saveCss(){
      //     this.$store.dispatch('saveCss',[this.token_id,this.nowTest.p_id,this.inputCss]);
      // },
      // saveJs(){
      //     this.$store.dispatch('saveJs',[this.token_id,this.nowTest.p_id,this.inputJavascript]);
      // },
      getEditor(){
        // var iframe = document.getElementById('myFrame');
        // if (iframe.attachEvent) {
        //   iframe.attachEvent("onload", function () {
        //     console.log(iframe.contentWindow.document.body.innerHTML);
        //   });
        // } else {
        //   iframe.onload = function () {
        //     console.log(iframe.contentWindow.document.body.innerHTML);
        //   };
        // }

      },
      saveFinal(){
        this.$store.dispatch('saveHtml',[this.token_id,this.nowTest.p_id,this.inputHtml]);
        this.$store.dispatch('saveCss',[this.token_id,this.nowTest.p_id,this.inputCss]);
        this.$store.dispatch('saveJs',[this.token_id,this.nowTest.p_id,this.inputJavascript]);
        // console.log(this.programData);
      },
      changIndex(){
        // this.$store.dispatch('saveHtml',[this.token_id,this.nowTest.p_id,this.inputHtml]);
        // this.$store.dispatch('saveCss',[this.token_id,this.nowTest.p_id,this.inputCss]);
        // this.$store.dispatch('saveJs',[this.token_id,this.nowTest.p_id,this.inputJavascript]);
        this.nowTest = this.program[this.nowIndex-1];
        this.inputHtml = '';
        this.inputCss = '';
        this.inputJavascript = '';
        this.$store.dispatch('searchProgram',[this.nowTest.p_id]);
        if(this.nowData.length > 0){
          this.programData = this.nowData[0];
          // console.log(this.programData)
          // console.log(this.nowData);
          this.inputHtml = this.nowData[0].html;
          this.inputCss = this.nowData[0].css;
          this.inputJavascript = this.nowData[0].javascript;
        }
        if(this.nowIndex < this.programNum){
          this.disabled = false;
        }else{
          this.disabled = true;
        }
      },
      nextIndex(){
        this.nowIndex ++ ;
        console.log(this.nowIndex );
        console.log(this.programNum );
        if(this.nowIndex < this.programNum){
          this.disabled = false;
          this.changIndex();
        }else{
          this.changIndex();
          this.disabled = true;
        }
      },
    },
    computed:{
      ...mapState(['nowData'])
    },
    props:[
      'index',
      'program',
      'token_id',
    ],
  }
</script>

<style scoped>

</style>


