<template>
    <HomeVue />
</template>

<script>
export default {
    name: 'App',
}
</script>

<script setup>
import HomeVue from '@/views/Home.vue'
</script>

<style>
#app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url("assets/bg1.jpg");
    /*linear-gradient(*/
    /*rgba(0, 0, 0, 0.9),*/
    /*rgba(0, 0, 0, 0.9) 60%,*/
    /*rgba(34, 34, 34, 0.1)*/
    /*),*/
    background-repeat: no-repeat;
    background-size: 100%;
}

body {
    margin: 0;
    /* 外边距 */
    padding: 0;
    /* 内边距 */
    border: 0;
    /* 边框 */
}
</style>
