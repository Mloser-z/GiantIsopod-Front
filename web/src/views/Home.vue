<template >
    <div id="home">
        <Header />
        <MainPage @postSearchRequest="searchByPic" @postKeyWord="searchByKeyWords" @postOrder="search_in_carousel" :images="plants" v-show="displayType == 1" />
        <LoadView v-show="displayType == 0"></LoadView>
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
import LoadView from "@/components/LoadView.vue";
import { getLabelFromText } from "@/apis";
import { useRouter } from 'vue-router';
import { ref } from "vue";

const router = useRouter();
const displayType = ref(1)
const plants = ref([
  {order:1,url:'flowers1.jpg'},
  {order:2,url:'flowers2.jpg'},
  {order:3,url:'flowers3.jpg'},
  {order:4,url:'flowers4.jpg'},
  {order:5,url:'flowers5.jpg'},
  {order:6,url:'flowers6.jpg'}])
// 上传图片，预测返回多个结果
const searchByPic = (picFile) => {
    router.push({ name: 'predict' })
    // displayType.value = 0;
    console.log(picFile);
    // postImage('api/image/search', picFile).then((value) => {
    //     if (value.status == 200) {
    //         let params = { message: value.data["message"], possibilty: value.data["possibility"] }
    //         router.push({ name: 'predict', state: { params } })
    //     }

    // })
}
//根据关键词搜索唯一结果
const searchByKeyWords = (key_words) => {
    // 根据子组件传回植物名字搜索
    displayType.value = 0;
    console.log(key_words);
    getLabelFromText('api/image/search', key_words).then((value) => {
        if (value.status == 200) {
            // TODO: 文本搜索跳转路由
            let params = { name_zh: value.data }
            router.push({ name: 'plant', state: { params } })
        }
    })
}

const search_in_carousel = (msg) => {
  // 根据序号读取轮播图数据数组中的信息并转给详细信息网页
  let params = { from:"/" }
  router.push({ name: 'plant', state: { params } })
}
</script>

<style>
#home {
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
    background-size: 100%;
}
</style>
