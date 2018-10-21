<template>
    <div>
      <div class="inform">
        <div  @click="$router.go(-1)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shangyiye"></use>
          </svg>
        </div>
        <div class="title">个人信息</div>

        <div class="edit" @click="edit" v-if="!isEdit">编辑</div>
        <div class="save" @click="save" v-else>保存</div>
      </div>

      <div class="main">
        <div class="tiao1">
          <div class="text">头像</div>
          <img :src="userInfo.header" alt="" class="img" v-if="!isEdit">
          <imgUpload></imgUpload>
        </div>
        <div class="tiao1">
          <div class="text">姓名</div>
          <div class="text" v-if="!isEdit">{{userInfo.username}}</div>

          <input type="text" v-model="editData.username" v-else>

        </div>
        <div class="tiao1">
          <div class="text">身份证</div>
          <div class="text">{{userInfo.idCard}}</div>
        </div>
        <div class="tiao1">
          <div class="text">家庭住址</div>
          <div class="text" v-if="!isEdit">{{userInfo.hometown}}</div>
          <input type="text" v-model="editData.hometown" v-else>

        </div>
        <div class="tiao1">
          <div class="text">工作</div>
          <div class="text" v-if="!isEdit">{{userInfo.address}}</div>
          <input type="text" v-model="editData.address" v-else>
        </div>
        <div class="tiao1">
          <div class="text">民族</div>
          <div class="text" v-if="!isEdit">{{userInfo.nation}}</div>
          <input type="text" v-model="editData.nation" v-else>
        </div>
        <div class="tiao1">
          <div class="text">微信</div>
          <div class="text" v-if="!isEdit">{{userInfo.wxNum}}</div>
          <input type="text" v-model="editData.wxNum" v-else>
        </div>
        <div class="tiao1">
          <div class="text">qq</div>
          <div class="text" v-if="!isEdit">{{userInfo.qqNum}}</div>
          <input type="text" v-model="editData.qqNum" v-else>
        </div>
        <div class="tiao1">
          <div class="text">性别</div>
          <div class="text" v-if="!isEdit">
            {{userInfo.sex==1 ? '男':'女'}}
          </div>
          <div class="text pp" v-else>
            <input type="radio" name="sex" value="1" v-model="editData.sex"> 男
            <input type="radio" name="sex" value="0" v-model="editData.sex"> 女
          </div>

        </div>
        <div class="tiao1">
          <div class="text">学历</div>
          <div class="text" v-if="!isEdit">{{userInfo.education}}</div>
          <input type="text" v-model="editData.education" v-else>
        </div>
        <div class="tiao1">
          <div class="text">职称</div>
          <div class="text" v-if="!isEdit">{{userInfo.jobRank}}</div>
          <input type="text" v-model="editData.jobRank" v-else>
        </div>
        <div class="tiao1">
          <div class="text">薪资水平</div>
          <div class="text" v-if="!isEdit">{{userInfo.salary}}</div>
          <input type="text" v-model="editData.salary" v-else>
        </div>
        <div class="tiao1">
          <div class="text">入党时间</div>
          <div class="text" v-if="!isEdit">{{userInfo.joinPartyTime}}</div>
          <input type="date" v-model="editData.joinPartyTime" v-else>
        </div>
        <div class="tiao1">
          <div class="text">党费最后缴纳时间</div>
          <div class="text" v-if="!isEdit">{{userInfo.lastPayTime}}</div>
          <input type="date" v-model="editData.lastPayTime" v-else>
        </div>
        <div class="tiao1">
          <div class="text">当前身份</div>
          <div class="text" v-if="!isEdit">{{userInfo.partyIdentity}}</div>
          <div class="text" v-else>
            <select class="select" v-model="editData.partyStatus">
              <option value="0">积极分子</option>
              <option value="1">预备党员</option>
              <option value="2">党员</option>
            </select>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import imgUpload from '../location/index'
    export default {
        name: "index",
      components:{
        imgUpload
      },
      data(){
          return {
            userInfo:{},
            isEdit:false,
            editData: {
              username: '',
              hometown: '',
              idCard: '',
              address: '',
              nation: '',
              wxNum: '',
              qqNum: '',
              sex: '',
              education: '',
              jobRank: '',
              salary: '',
              joinPartyTime: '',
              lastPayTime: '',
              partyStatus: '',
              header: ''
            }
          }
      },
      methods:{
        ...mapMutations['setUser'],
        getUser(){
          this.$axios.get('/hhdj/user/userInfo.do').then(res=>{
            console.log(res);
            if(res.code === 1){
              this.userInfo=res.data
            }
          })
        },
        edit(){
          this.isEdit=true
        },
        save(){
          this.isEdit=false
          this.$axios.post('/hhdj/user/modifyInfo.do',this.editData).then(res=>{
            if(res.code == 1){
              console.log(res.msg);
            }
          })
        }
      },
      created(){
         this.getUser()
      },

    }
</script>

<style scoped lang="scss">
  .pp{
   font-size: 0;
    display: flex;
    align-items: center;
    input{
      font-size: 0.24rem;
    }
  }

  input{
    display: block;
    border: none;
    outline: none;
    text-align: right;
  }
  .inform{
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
    .save,.edit{
      width: 0.9rem;
      height: 0.4rem;
      color: #fff;
      position: absolute;
      font-size: 0.35em;
      right: 0;
      top: 0.15rem;
    }
  }
.select{
  outline: none;
  border: none;
}

  .main{
    display: flex;
    flex-direction: column;
    .tiao1{
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      height: 1rem;
      padding: 0.2rem 0.2rem;
      box-sizing: border-box;
      align-items: center;
      .img{
        display: block;
        width: 0.6rem;
        height: 0.6rem;
      }
      .text{
        font-size: 0.3rem;
      }
    }
  }
</style>
