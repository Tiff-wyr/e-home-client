<template>
    <div>
      <div class="message">
        <div @click="$router.go(-1)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangyiye"></use>
          </svg>
        </div>

        <div class="title">个人量化积分</div>
      </div>
      <div class="img">
       <div class="text">64.4</div>
      </div>
      <div class="text1" @click="scoreM">
        <img src="../../img/icon2.png" alt="" class="sipp">
        <div class="text"> 个人量化积分</div>
        <img src="../../img/arrow.png" alt="" class="arrow">
      </div>
      <div class="shuz" v-for="(item,index) in scoreRules">
        <div class="name">{{item.name}}</div>
        <div class="score">{{item.score}}</div>
      </div>
    </div>
</template>

<script>
  import router from '../../router/index'
    export default {
        name: "index",
      data(){
          return {
            scoreRules: [
              {name: '登录app', score: 5},
              {name: '完善个人信息', score: 2},
              {name: '查看积分', score: 1},
              {name: '按时缴纳党费', score: 10},
              {name: '查看通知', score: 2},
              {name: '了解学院工作状态', score: 5},
              {name: '上交思想汇报经审核通过', score: 5},
              {name: '主动学习相关文件', score: 10},
              {name: '认真撰写心得总结并上交，经审核通过', score: 5},
              {name: '提交个人总结，并参与评议', score: 2},
              {name: '积极参与互动', score: 5},
              {name: '学习党建知识', score: 5},
              {name: '学习党史', score: 10},
              {name: '创先争优事迹', score: 10},
              {name: '学党章，学习近平总书记系列讲话', score: 10},
              {name: '用镜头记录两学一做过程中令人感动的人和事', score: 3},
              {name: '关注并积极参与特色活动', score: 5},
              {name: '制度化、常态化建设', score: 5},
            ]
          }
      },
      methods:{
        scoreM(){
          router.push('/scoreM')
        }
      },
      created(){

      }
    }
</script>

<style scoped lang="scss">
  .message{
    width: 7.5rem;
    background:#c50206;
    .title{
      text-align: center;
      color: #fff;
      height: 0.86rem;
      line-height: 0.86rem;
      width: 7.1rem;
      margin: 0 auto;
      font-size: 0.34rem;
    }
    .icon{
      width: 0.9rem;
      height: 0.9rem;
      color: #fff;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .img{
    background-image: url("../../img/jifen.png");
    background-size: 100% 100%;
    width: 7.5rem;
    height: 2.8956rem;
    display: flex;
    align-items: center;
    justify-content: center;
  .text{
    font-size: 0.3rem;
    color: #f00;
  }
  }
  .text1{
    display: flex;
    width: 7.54rem;
    height: 1.08rem;
    padding: 0.32rem 1.08rem;
    border: 0.02rem solid #ccc;
    margin: -0.02rem;
    box-sizing: border-box;
    font-size: 0;
    position: relative;
    .text{
      font-size: 0.3rem;
    }
    .sipp{
      width: 0.64rem;
      height: 1.04rem;
      padding: 0.2rem 0;
      box-sizing: border-box;
      position: absolute;
      left: 0.2rem;
      top: 0;
    }
    .arrow{
      width: 0.1534rem;
      height: 1.04rem;
      padding: 0.4rem 0;
      box-sizing: border-box;
      position: absolute;
      right: 0.2rem;
      top: 0;
    }
  }
  .shuz{
    display: flex;
    justify-content: space-between;
    width: 7.5rem;
    height: 0.7rem;
    box-sizing: border-box;
    padding: 0.1rem 0.2rem;
    border-bottom: 1px solid #ccc;
    .name{
      font-size: 0.3rem;
    }
    .score{
      font-size: 0.3rem;
      color: #f00;
    }
  }
</style>
