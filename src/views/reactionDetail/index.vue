<template>
    <div>
      <div class="main">
        <div class="top">
          <img :src="userInfo.header" alt="">
          <div class="top-middle">
            <div class="name">{{userInfo.username}}</div>
            <div class="top-middle-bottom">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shizhong"></use>
              </svg>
              <div class="time">{{userInfo.time}}</div>
            </div>
          </div>
        </div>
        <div class="content">{{userInfo.content}}</div>

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
              <div class="time">{{item.timeFormat}}</div>
            </div>
          </div>
        </div>
        <div class="content">{{item.comment}}</div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
            formData:[],
            userInfo:{},
          }
      },
      methods:{
          getData(id){
            this.$axios.get(`/hhdj/forum/forumCommentList.do?page=1&rows=10&forum_id=${id}`).then(res=>{
              if (res.code == 1){
                this.formData=res.rows
              }
            })
        }
      },
      created(){
        let id=this.$route.params.id
        this.userInfo = this.$route.query
        console.log(this.$route);
        console.log(this.$router);
        this.getData(id)
      }
    }
</script>

<style scoped lang="scss">
  .main{
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 7rem;
    height: 2.4rem;
    padding: 0.32rem;
    margin: 0.25rem auto;
    box-sizing: border-box;
  }
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
    height: 2.4rem;
    padding: 0.32rem;
    border: 0.02rem solid #ccc;
    margin: -0.02rem -0.02rem 0.02rem -0.02rem;
    box-sizing: border-box;
  }

</style>
