<template>
    <div class="today">
      <div class="message">
        <div @click="$router.go(-1)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangyiye"></use>
          </svg>
        </div>
        <div class="title">党史上的今天</div>
      </div>
      <div class="content" v-html="message"></div>
    </div>
</template>

<script>
    export default {
        name: "index",
      data(){
          return {
              message:'',
          }
      },
      methods:{
          getToday(){
            this.$axios.get('/hhdj/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70502%2Findex.html').then(res=>{
              let str =res.split("<!--content-->")[1]
              this.message=str.split("<!--p1 end-->")[0]
              console.log(this.message);
            })
          }
      },
      created(){
          this.getToday()
      }
    }
</script>

<style scoped lang="scss">
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

  .content {
    width: 7.5rem;
    height: 100%;
    font-size: 0;
  }
</style>
