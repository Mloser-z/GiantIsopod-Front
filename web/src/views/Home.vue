<template >
  <div id="home">
    <Header/>
    <MainPage />
  </div>

</template>

<script>
export default {
    name: 'HomeVue',
}
</script>

<script setup>
import Header from "@/components/Header";
import MainPage from '@/components/MainPage.vue';
</script>

<style>
#home{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-image: url("../assets/bg2.jpg");
  /*linear-gradient(*/
  /*rgba(0, 0, 0, 0.9),*/
  /*rgba(0, 0, 0, 0.9) 60%,*/
  /*rgba(34, 34, 34, 0.1)*/
  /*),*/
  background-repeat: no-repeat;
  background-size:100%;
}
</style>
