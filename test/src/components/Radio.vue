<template>
<el-col :span="24">
  <div style="height:500px;">
    <el-container >


      <el-main style="height:500px;line-height:30px;text-align:justify">
        <el-row>
          <el-col :span="6">
            <div style="font-size: 20px;margin:0 0 10px 0">{{nowIndex}}.单选题</div>
          </el-col>
        </el-row>


        <div style="font-size: 20px;line-height:20px" class="addPadding">{{nowTest.title}}</div>
        <div style="font-size: 30px;margin-top:40px;background-color:#f8f9fb">
          <el-row :gutter="20" >
            <el-col :span="2" :offset="1">

              <el-radio-group v-model="radio">

                <el-row :gutter="20" style="line-height:60px">
                  <el-col :span="2" :offset="1">
                    <el-radio label="0" @change="radioChange()" size="medium" style="line-height:60px">{{nowTest.choice_a}}</el-radio>
                  </el-col>
                </el-row>



                <el-row :gutter="20" style="height:64.8px;line-height:60px" >
                  <el-col :span="2" :offset="1">
                    <el-radio label="1" @change="radioChange()" size="medium" style="line-height:60px">{{nowTest.choice_b}}</el-radio>
                  </el-col>
                </el-row>


                <el-row :gutter="20" style="height:64.8px;line-height:60px">
                  <el-col :span="2" :offset="1">
                    <el-radio label="2" @change="radioChange()" size="medium" style="line-height:60px">{{nowTest.choice_c}}</el-radio>
                  </el-col>
                </el-row>

                <el-row :gutter="20" style="height:64.8px;line-height:60px">
                  <el-col :span="2" :offset="1">
                    <el-radio label="3" @change="radioChange()" size="medium" style="line-height:60px">{{nowTest.choice_d}}</el-radio>
                  </el-col>
                </el-row>


                <!-- <el-radio label="0" @change="radioChange()" size="medium" style="display:block">{{nowTest.choice_a}}</el-radio>

                <el-radio label="1" @change="radioChange()" size="medium" style="display:block">{{nowTest.choice_b}}</el-radio>

                <el-radio label="2" @change="radioChange()" size="medium" style="display:block">{{nowTest.choice_c}}</el-radio>

                <el-radio label="3" @change="radioChange()" size="medium" style="display:block">{{nowTest.choice_d}}</el-radio> -->

              </el-radio-group>
            </el-col>

          </el-row>

        </div>
      </el-main>

      <el-aside width="150px">
        <el-row >
          <el-radio-group v-model="nowIndex" @change="changIndex()" size="medium">

            <el-col >
              <el-row :gutter="0"  >
                <el-col :span="12" v-for="index in selectNum" :key=index style="line-height:50px">
                  <el-radio-button :label="index" fill>{{index}}</el-radio-button>
                </el-col>
              </el-row>
            </el-col>

          </el-radio-group>
        </el-row>

        <el-button type="primary" @click="nextIndex" :disabled="disabled">下一页</el-button>
      </el-aside>





    </el-container>
  </div>
</el-col>

</template>

<script>
  import{mapState} from 'vuex';
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
    ]
  }
</script>

<style scoped>

.container{
  height: 600px;
  width: 800px;
  margin:20px auto;
  /* background: #ff0036; */
}


  .el-aside {
    /* background-color: #D3DCE6; */
    /* background-color: #b0ecc1; */
    color: #333;
    text-align: center;
    /* line-height: 200px; */
  }

  .el-main {
    /* background-color: #b0ecc1; */
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    line-height: 160px;
    width: 800px;
    height: 600px;

  }
  .addPadding{
    padding:15px;
    background-color:#f8f9fb
  }
</style>
