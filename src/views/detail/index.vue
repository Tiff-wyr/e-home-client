<template>
   <div>
     <div class="message">
       <div @click="$router.go(-1)">
         <svg class="icon" aria-hidden="true">
           <use xlink:href="#icon-shangyiye"></use>
         </svg>
       </div>
       <div class="title">参评党员</div>
     </div>
      <div class="main" v-for="(item,index) in formData">
        <img :src="item.header" alt="">
        <div class="name">{{item.username}}</div>
        <div class="school">{{item.branchName}}</div>
      </div>
   </div>
</template>

<script>
  import { Loadmore } from 'mint-ui';
  import {mapState} from 'vuex'
    export default {
        name: "index",
      data(){
          return {
            formData:[],
            page: 1
          }
      },
      methods:{
        getData(id){
         this.$axios.get(`/hhdj/nationComment/userList.do?select_branch=${id}&user_id=${this.token}&page=${this.page}&rows=10`).then(res=>{
           this.formData=res.rows
         })
        }
      },
      created(){
          let id=this.$route.params.id
          this.getData(id)
      },
      computed:{
        ...mapState(['token'])
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
  .main{
    display: flex;
    width: 100%;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 0;
    border-bottom: 1px solid #ccc;
    justify-content: space-around;
    img{
      width: 1rem;
      height: 1rem;
    }
    .name{
      font-size: 0.3rem;
    }
    .school{
      font-size: 0.25rem;
    }
  }
</style>
