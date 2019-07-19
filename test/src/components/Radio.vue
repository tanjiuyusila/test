<template>
  <div>
    <h1>{{nowIndex}}.单选题</h1>
    <div>
      <span>{{nowTest.title}}</span>
      <el-radio-group v-model="radio" >
        <!--<el-radio :label="index" v-for="(option,index) in nowTest.options" :key=index @change="radioChange()">{{option}}</el-radio>-->
        <el-radio label="0" @change="radioChange()">{{nowTest.choice_a}}</el-radio>
        <el-radio label="1" @change="radioChange()">{{nowTest.choice_b}}</el-radio>
        <el-radio label="2" @change="radioChange()">{{nowTest.choice_c}}</el-radio>
        <el-radio label="3" @change="radioChange()">{{nowTest.choice_d}}</el-radio>
      </el-radio-group>
    </div>
    <el-row>
      <el-radio-group v-model="nowIndex" @change="changIndex()">
        <el-col :span="6" class="testRow" v-for="index in selectNum" :key=index>
          <el-radio-button :label="index" fill>{{index}}</el-radio-button>
        </el-col>
      </el-radio-group>
    </el-row>
    <el-button type="primary" @click="nextIndex" :disabled="disabled">下一页</el-button>
  </div>
</template>

<script>
  import{mapState,mapGetters} from 'vuex';
  export default {
    created(){
      this.selectNum=this.select.length;
      this.nowTest = this.select[0];
      this.changIndex();
    },
    data(){
      return{
        selectNum:0,
        radio:'',
        radioAnswer:'',
        nowIndex:1,
        nowTest:{},
        disabled:false
      }
    },
    methods:{
      nextIndex(){
        if(this.nowIndex < this.selectNum){
          this.nowIndex ++ ;
          this.changIndex()
          if(this.nowIndex == this.totalNum){
            this.disabled = true;
          }
        }else{
            this.$emit('plusOne');
        }
      },
      radioChange(){
        this.radioAnswer = this.radio;
        this.$store.dispatch('saveRadio',[this.nowTest.sc_id,this.radio,this.token_id]);
        console.log(this.radio);
        // console.log(this.exec_id)
      },
      changIndex(){
        this.radio='';
        this.nowTest = this.select[this.nowIndex-1];
        this.$store.dispatch('searchAnswer',[this.nowTest.sc_id]);
        if(this.nowData.length > 0){
          this.radio = this.nowData[0].user_answer;
        }
        if(this.nowIndex == this.totalNum){
          this.disabled = true;
        }else{
          this.disabled = false;
        }
      },
    },
    computed:{
      ...mapState(['nowData']),
    },
    props:[
      'select',
      'index',
      'token_id',
      'totalNum',
    ],
  }
</script>

<style scoped>

</style>
