<template>
  <div>
    <el-container >
      <el-aside width="200px">
        <div style="font-size: 20px;margin:0 0 10px 0">{{nowIndex}}.编程题</div>
        <div style="font-size: 20px;line-height:20px" class="addPadding">{{nowTest.title}}</div>
      </el-aside>
      <el-main style="height:500px;line-height:30px;text-align:justify">

        <mavon-editor v-model="inputHtml" :toolbars="toolbars" style="width:100%" placeholder="html"/>

        <mavon-editor v-model="inputCss" :toolbars="toolbars" style="width:100%" placeholder="css"/>

        <mavon-editor v-model="inputJavascript" :toolbars="toolbars" style="width:100%" placeholder="javascript"/>

      </el-main>

      <el-aside width="150px">
        <el-row >
          <el-radio-group v-model="nowIndex" @change="changIndex()" size="medium">

            <el-col >
              <el-row :gutter="0"  >
                <el-col :span="12" v-for="index in programNum" :key=index style="line-height:50px">
                  <el-radio-button :label="index" fill>{{index}}</el-radio-button>
                </el-col>
              </el-row>
            </el-col>

          </el-radio-group>
        </el-row>

        <el-button type="primary" @click="nextIndex" :disabled="disabled">下一页</el-button>
        <el-button type="primary" @click="saveFinal">保存答案</el-button>
      </el-aside>
    </el-container>
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
        context: ' ',//输入的数据
        toolbars: {
          bold: false, // 粗体
          italic: false, // 斜体
          header: false, // 标题
          underline: false, // 下划线
          mark: false, // 标记
          superscript: false, // 上角标
          quote: false, // 引用
          ol: false, // 有序列表
          link: false, // 链接
          imagelink: false, // 图片链接
          help: true, // 帮助
          code: true, // code
          subfield: false, // 是否需要分栏
          fullscreen: false, // 全屏编辑
          readmodel: false, // 沉浸式阅读
          /* 1.3.5 */
          undo: true, // 上一步
          trash: true, // 清空
          save: false, // 保存（触发events中的save事件）
          /* 1.4.2 */
          navigation: false // 导航目录
        }
      }
    },
    methods:{
      fn(){
        console.log(this.inputHtml);
      },
      // saveHtml(){
      //     this.$store.dispatch('saveHtml',[this.token_id,this.nowTest.p_id,this.inputHtml]);
      // },
      // saveCss(){
      //     this.$store.dispatch('saveCss',[this.token_id,this.nowTest.p_id,this.inputCss]);
      // },
      // saveJs(){
      //     this.$store.dispatch('saveJs',[this.token_id,this.nowTest.p_id,this.inputJavascript]);
      // },
      saveFinal(){
        this.$store.dispatch('saveHtml',[this.token_id,this.nowTest.p_id,this.inputHtml]);
        this.$store.dispatch('saveCss',[this.token_id,this.nowTest.p_id,this.inputCss]);
        this.$store.dispatch('saveJs',[this.token_id,this.nowTest.p_id,this.inputJavascript]);
        console.log(this.programData);
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
  .addPadding{
    padding:15px;
    background-color:#f8f9fb
  }
</style>


