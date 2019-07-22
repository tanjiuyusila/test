<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>对标往届成绩线，距离一目了然</span>
        <el-button style="float: right; padding: 3px 0" type="text">换一批</el-button>
      </div>
      <el-row :gutter="20" >

        <router-link v-for="(paper, index) in testSummary" :key="index" :to="'/testDetail/'+paper.id">
          <el-col :span="6" class="testRow">
            <el-card :body-style="{ padding: '0px' }">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <div style="padding: 14px;">
                <span>题库{{paper.id}}</span>
              </div>
            </el-card>
          </el-col>
        </router-link>
      </el-row>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        currentDate: new Date(),
        testSummary:[
          {
            id:1,
            name:'套题',
          },{
            id:2,
            name:'套题',
          },{
            id:3,
            name:'套题',
          },{
            id:4,
            name:'套题',
          },{
            id:5,
            name:'套题',
          },{
            id:6,
            name:'套题',
          },{
            id:7,
            name:'套题',
          },{
            id:8,
            name:'套题',
          }
        ]
      };
    },
    methods:{
      fn(paper){
        console.log(paper.id)
      }
    }
  }
</script>

<style scoped>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 1000px;
    margin:20px auto;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
  .testRow{
    margin-bottom:20px;
  }
  /*.testRow:hover{*/

  /*}*/
</style>
