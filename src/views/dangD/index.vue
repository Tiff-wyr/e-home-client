<template>
<div>
  <div class="message">
    <div @click="$router.go(-1)">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangyiye"></use>
      </svg>
    </div>
    <div class="title">党员互动</div>
  </div>

    <div class="chat" v-for="(item,index) in formData">
      <div class="top">
        <img :src="item.header" alt="">
        <div class="top-middle">
          <div class="name">{{item.username}}</div>
          <div class="top-middle-bottom">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shizhong"></use>
            </svg>
            <div class="time">{{item.currentTime}}</div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-laba"></use>
            </svg>
            <div class="gk">公开</div>
          </div>
        </div>
        <div class="top-right">
          党员互动
        </div>
      </div>
      <div class="content">{{item.content}}</div>
        <div class="reply" @click="enter(item)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-liaotian1"></use>
          </svg>
          <div class="huifu">回复</div>
        </div>
    </div>


</div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            formData:[]
          }
      },
      methods:{
        getData(){
          this.$axios.get('/hhdj/forum/forumList.do?page=1&rows=10&type=0&cates=0').then(res=>{
            if(res.code == 1){
              this.formData=res.rows
            }
          })
        },
        enter(item){
          this.$router.push({
            path: `/reactionDetail/${item.forumId}`,
            query: {
              header: item.header,
              username: item.username,
              time: item.currentTime,
              content: item.content
            }
          })
        }
      },
      created(){
        this.getData()
      }
    }
</script>

<style scoped lang="scss">
  .top-right{
    margin-left: 0.1rem;
    font-size: 0.3rem;
    color: #f00;
    border-radius: 0.15rem;
    border: 1px solid #f00;
    padding: 0.1rem 0.1rem;
  }
  .top{
    display: flex;
    width: 6.86rem;
    height: 0.92rem;
    font-size: 0;
    align-items: center;
    img{
      width:0.66rem;
      height: 0.66rem;
      border-radius: 50%;
    }
    .top-middle{
      display: flex;
      flex-direction: column;
      width: 4rem;
      margin-left: 0.2rem;
      .name{
        font-size: 0.35rem;
        height: 0.4rem;
      }
      .top-middle-bottom{
        display: flex;
        height: 0.4rem;
        font-size: 0;
        .time,.gk{
          font-size: 0.16rem;
          margin: 0 0.1rem;
        }
        .icon{
          width: 0.3rem;
        }
      }

    }
  }
  .content{
    font-size: 0.4rem;
    width: 6.86rem;
    height: 0.8rem;
    padding: 0.2rem 0;
    box-sizing: border-box;
  }
  .reply{
      display: flex;
      justify-content: flex-end;
      .icon{
        width: 0.4rem;
        height: 0.4rem;
      }
      .huifu{
        font-size: 0.3rem;
      }
    }
  .chat{
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 7.54rem;
    height: 2.82rem;
    padding: 0.32rem;
    border: 0.02rem solid #ccc;
    margin: -0.02rem -0.02rem 0.02rem -0.02rem;
    box-sizing: border-box;
  }

  .message{
    width: 7.5rem;
    background: #c50206;
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

</style>
