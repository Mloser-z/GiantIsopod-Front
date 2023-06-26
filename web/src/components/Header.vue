<template>
<div style="width: 100vw;height: 12vh;background-color: rgba(3,3,41,0.5);display: block;">
  <img src="../assets/logo.png" id="logo">
<!--  <img src="../assets/back_btn.png" id="back_btn">-->
</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header'
}
</script>

<style scoped>
#logo{
  height: 115%;
  width: auto;
}
#back_btn{
  float: right;
  height: 85%;
  width: auto;
  margin: 20px;
}
#back_btn:hover{
  cursor: pointer;
}
</style>
