<template>
  <div>
    <el-container class="container">
      <el-header>
        <span>
          套题{{this.paperId}}
        </span>
        <span>
          计时：
        </span>
      </el-header>
      <el-container>
        <el-main>
          <!--<div>-->
            <!--{{nowTest.title}}-->
          <!--</div>-->
          <!--<div v-for="(option,index) in nowTest.options">-->
            <!--{{option}}-->
          <!--</div>-->
          <!--<Radio :index="nowIndex" :title="nowTest.title" :options="nowTest.options"></Radio>-->
          <Checkbox :index="nowIndex" :title="nowTest.title" :options="nowTest.options"></Checkbox>
        </el-main>
        <el-aside width="200px">
            <h1>全部试题（{{nowIndex}}/{{totalNum}}）</h1>
            <p>第一部分：选择题部分</p>

            <el-row>
              <el-radio-group v-model="nowIndex" @change="changIndex">
                <el-col :span="6" class="testRow" v-for="index in totalNum">
                    <el-radio-button :label="index" fill></el-radio-button>
                  <!--<el-radio v-model="nowIndex" :label="index" name="button" border>{{index}}</el-radio>-->
                  <!--<el-button type="primary" circle plain @click="clickButton(index)">{{index}}</el-button>-->
                </el-col>
              </el-radio-group>
            </el-row>

        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  // import Radio from '@/components/Radio';
  import Checkbox from '@/components/Checkbox';
  export default {
    created(){
      this.totalNum = this.select.length + this.program.length;
      this.nowTest = this.select[0];
      // console.log(this.totalNum);
      this.buttonRadio='1'
    },
    data(){
      return{
        buttonRadio:'1',
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
            flag:2,
            title:'选择题4XXXXXXXXXX',
            options:['aaaa','bbbb','ccc','dddd']
          }
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
          }
        ]
      }
    },
    methods:{
      changIndex(){
        // console.log(this.nowIndex);
        if(this.nowIndex <= this.select.length){
          // console.log(this.nowIndex);
          this.nowTest = this.select[this.nowIndex-1];
          // console.log(this.select[this.nowIndex])
        }else{
          this.nowTest = this.program[this.nowIndex - this.select.length-1]
        }
      }
    },
    components:{
      // Radio,
      Checkbox,

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
.testRow{
  margin-bottom:20px;
}

</style>
