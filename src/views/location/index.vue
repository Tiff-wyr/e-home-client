<template>
  <div class="main">
    <label for="file" class="file_select">
      <span class="add">+</span>
    </label>
    <input id="file" type="file" @change="changeFile" class="file" name="file">
  </div>
</template>

<script>
  export default {
    name: "index",
    data() {
      return {
        file: {},
      }
    },
    methods: {
      changeFile(event){
        this.file = event.target.files[0]
        let render = new FileReader()
        let base64 = ''
        render.readAsDataURL(this.file)
        render.onload = () => {
          let base = render.result
          base64 = base.split(',')[1]
          let form = new FormData()
          form.append('myFile', base64)
          this.$axios.post('/image/uploadBase64.do', form).then(res => {
            // this.imgUrl = base
            // this.$emit('input', res.url)
            // this.$emit('upLoad', true)
          })
        }
      }
    },
  }
</script>

<style scoped lang="scss">
  .main{
    position: relative;
    .file_select{
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1rem;
      height: 1rem;
      border: 1px solid #ccc;
      .add{
        font-size: 0.4rem;
        color: #ccc;
      }
    }
    .file{
      display: none;
    }
  }


</style>
