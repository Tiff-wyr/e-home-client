<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
img{
  width: 100%;
}
h1 {
  font-size: .48rem;
  font-weight: 500;
  margin: .2rem 0;
}
h2 {
  font-size: .4rem;
  font-weight: 500;
  margin: .2rem 0;
}
.p1_02 {
  width: 7.5rem;
  height: 100%;
  padding: 0.2rem 0.2rem;
  box-sizing: border-box;
}
h5 {
  font-size: .26rem;
}
p {
  font-size: .28rem;
  line-height: 1.5;
  margin: .2rem 0;
}
.icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
