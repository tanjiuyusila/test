<template>
  <div style="height:500px">

    <el-container>


      <el-main style="height:500px;line-height:30px;text-align:justify">
        <el-row>
          <el-col :span="6">
            <div style="font-size: 20px;margin:0 0 10px 0">{{nowIndex}}.多选题</div>
          </el-col>
        </el-row>
        <div style="font-size:20px;line-height:20px" class="addPadding">{{nowTest.title}}</div>
        <div style="font-size:30px;margin-top:40px;background-color:#f8f9fb">
          <el-row :gutter="20">

          <el-col :span="2" :offset="1">

            <el-checkbox-group v-model="checkList" >
              <!-- 64.8 -->
              <el-row :gutter="20" style="line-height:60px">
              <!-- <el-row :gutter="20"> -->
                <el-col :span="2" :offset="1">
                    <el-checkbox :label="0" @change="checkBoxChange" style="display: block;width:1200px">{{nowTest.choice_a}}</el-checkbox>
                </el-col>
              </el-row>

              <el-row :gutter="20" style="height:64.8px;line-height:60px">
              <!-- <el-row :gutter="20"> -->
                <el-col :span="2" :offset="1">
                  <el-checkbox :label="1" @change="checkBoxChange" style="display: block;width:1200px">{{nowTest.choice_b}}</el-checkbox>
                </el-col>
              </el-row>

              <el-row :gutter="20" style="height:64.8px;line-height:60px">
              <!-- <el-row :gutter="20" > -->
                <el-col :span="2" :offset="1">
                  <el-checkbox :label="2" @change="checkBoxChange" style="display: block;width:1200px">{{nowTest.choice_c}}</el-checkbox>
                </el-col>
              </el-row>

              <el-row :gutter="20" style="height:64.8px;line-height:60px">
              <!-- <el-row :gutter="20"> -->
                <el-col :span="2" :offset="1">
                  <el-checkbox :label="3" @change="checkBoxChange" style="display: block;width:1200px">{{nowTest.choice_d}}</el-checkbox>
                </el-col>
              </el-row>

              <!-- <el-checkbox :label="0" @change="checkBoxChange">{{nowTest.choice_a}}</el-checkbox>
              <el-checkbox :label="1" @change="checkBoxChange">{{nowTest.choice_b}}</el-checkbox>
              <el-checkbox :label="2" @change="checkBoxChange">{{nowTest.choice_c}}</el-checkbox>
              <el-checkbox :label="3" @change="checkBoxChange">{{nowTest.choice_d}}</el-checkbox> -->
            </el-checkbox-group>
          </el-col>
          </el-row>

        </div>


      </el-main>

      <el-aside width="150px">
        <el-row>
          <el-radio-group v-model="nowIndex" @change="changIndex()" size="medium">

            <el-col>
              <el-row :gutter="0">
                <el-col :span="12" v-for="index in multipleNum" :key=index  style="line-height:50px">
                  <el-radio-button :label="index" fill="#ffa800">{{index}}</el-radio-button>
                </el-col>
              </el-row>
            </el-col>

          </el-radio-group>
        </el-row>


        <el-button type="primary" @click="nextIndex" :disabled="disabled">下一页</el-button>
      </el-aside>

    </el-container>




  </div>
</template>

<script>
  import{ mapState } from 'vuex';
  export default {
    created(){
      this.nowTest = this.multiple[0];
      this.multipleNum = this.multiple.length;
      this.changIndex();
    },
    data(){
      return{
        checkList:[],
        nowTest:{},
        nowIndex:1,
        multipleNum:0,
        disabled:false,
      }
    },
    methods:{
      nextIndex(){
        if(this.nowIndex < this.multipleNum){
          this.nowIndex ++ ;
          this.changIndex();
          console.log(this.nowIndex);
          console.log(this.selectNum);
          console.log(this.totalNum);
          if(this.nowIndex + this.selectNum == this.totalNum){
            this.disabled = true;
          }
        }else{
          this.$emit('plusOne');
        }
      },
      checkBoxChange(){
        // console.log(this.nowTest.mc_id);
        // console.log(this.checkList);
        this.$store.dispatch('saveCheckbox',[this.nowTest.mc_id,this.checkList,this.token_id]);
        // console.log(this.selectData)
      },
      changIndex(){
        this.checkList=[];
        this.nowTest = this.multiple[this.nowIndex-1];
        this.$store.dispatch('searchSelect',[this.nowTest.mc_id]);
        // console.log(this.nowData);
        if(this.nowData.length > 0){
          this.checkList = this.nowData[0].user_answer;
        }
        if(this.nowIndex + this.selectNum == this.totalNum){
          this.disabled = true;
        }else{
          this.disabled = false;
        }
      },
    },
    computed:{
      ...mapState(['nowData'])
    },
    props:[
      'index',
      'multiple',
      'token_id',
      'selectNum',
      'totalNum',
    ],
  }
</script>

<style scoped>
  .addPadding{
    padding:15px;
    background-color:#f8f9fb
  }
</style>
