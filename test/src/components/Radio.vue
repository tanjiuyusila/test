<template>
  <div>
    <h1>{{nowIndex}}.单选题</h1>
    <div>
      <span>{{nowTest.title}}</span>
      <el-radio-group v-model="radio" >
        <el-radio :label="index" v-for="(option,index) in nowTest.options" :key=index @change="radioChange()">{{option}}</el-radio>
      </el-radio-group>
    </div>
    <el-row>
      <el-radio-group v-model="nowIndex" @change="changIndex()">
        <el-col :span="6" class="testRow" v-for="index in selectNum" :key=index>
          <el-radio-button :label="index" fill>{{index}}</el-radio-button>
        </el-col>
      </el-radio-group>
    </el-row>
    <el-button type="primary" @click="nextIndex">下一页</el-button>


  </div>
</template>

<script>
  import{mapState,mapMutations} from 'vuex';
  export default {
    created(){
      // console.log(111);
      this.selectNum=this.select.length;
      this.nowTest = this.select[0];
      this.changIndex()
    },
    data(){
      return{
        selectNum:0,
        radio:'',
        radioAnswer:'',
        nowIndex:1,
        nowTest:{},
      }
    },
    methods:{
      nextIndex(){
        if(this.nowIndex < this.selectNum){
          console.log(this.nowIndex);
          console.log(this.selectNum);
          this.nowIndex ++ ;
          this.changIndex()
        }else{
          console.log('next');
          // $store.state.count++
        }
      },
      radioChange(){
        this.radioAnswer = this.radio;
        this.$store.dispatch('saveRadio',[this.nowTest.id,this.radio]);
        // console.log(1)
        console.log(this.radio)
      },
      changIndex(){
        this.radio='';
        // console.log(this.radio)
        this.nowTest = this.select[this.nowIndex-1];
        // console.log(this.nowTest.id);
        this.$store.dispatch('searchAnswer',[this.nowTest.id]);
        // console.log(this.nowData);
        if(this.nowData.length > 0){
          // console.log(this.radio);
          // console.log( this.nowData[0].user_answer);
          this.radio = this.nowData[0].user_answer;
          // console.log(this.radio);
        }
      },
    },
    computed:{
      ...mapState(['nowData'])
    },
    props:[
      'select',
      'index',
    ],
  }
</script>

<style scoped>

</style>
