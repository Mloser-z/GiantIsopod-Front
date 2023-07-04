<template>
    <div style="width: 100vw;height: 12vh;background-color: rgba(3,3,41,0.5);display: block;position: static">
        <img src="../assets/logo.png" id="logo">
        <router-link to="/plants">
            <img src="../assets/infoDic_btn.png" width="80px" alt="图片" class="back_btn" v-if="this.$route.path == '/'">
        </router-link>
        <router-link to="/">
            <img src="../assets/home_btn.png" width="80px" alt="图片" class="back_btn" v-if="this.$route.path == '/plants'">
        </router-link>
        <!--  <img src="../assets/back_btn.png" id="back_btn">-->
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header'
}
</script>
<script setup>
  // import { ref } from 'vue';
  // const go_to_plants = () => {
  //
  // }
  // const displaytype = ref()
</script>
<style scoped>
#logo {
    height: 115%;
    width: auto;
}

.back_btn {
    float: right;
    height: 85%;
    width: auto;
    margin: 20px;
    cursor: pointer;
}

.back_btn:hover {
    height: 87%;
}
</style>
