<template>
    <div style="margin: 10px auto;text-align: center">
        <a-input-search style="margin-left: 28vw;float: left;margin-right: 25px;"
                        :style="{ width: '700px' }" size="large"
                        placeholder="搜索图片" search-button
                        v-on:search="search_by_keywords" v-model="key_words"/>
        <div class="upload-container">
            <img src="../assets/camera.png" style="float: left;height: 65px;">
            <label for="pic">上传图片</label>
            <input type="file" name="pic" id="pic" v-on:input="showImg" accept="image/gif, image/jpeg"
                style="display: none">
        </div>
    </div>
    <!--  <div style="margin: 14vh 10vw;width: 40vw;height: 45vh;">-->
    <!--    <div style="width: 40vw;height: 45vh;background-color: rgba(0,0,0,0.8);">-->
    <!--      <img src="../assets/search.png" id="plantImg" style="height: 100%;width: 100%;object-fit: contain">-->
    <!--    </div>-->
    <!--    <div class="upload-container">-->
    <!--      <label for="pic">上传图片</label>-->
    <!--      <input type="file" name="pic" id="pic" v-on:input="showImg" accept="image/gif, image/jpeg" style="display: none">-->
    <!--    </div>-->
    <!--  </div>-->

    <!--TODO: 调整样式-->
    <div style="margin: 120px auto;text-align: center;">
        <image-card :images="images" v-if="displayType==1"></image-card>
        <info-card  v-if="displayType==2"></info-card>
    </div>

</template>

<script>
// TODO: 改用set-up语法糖，当前文件修改到views目录下
export default {
    name: 'MainPage',
    // methods: {
    //     showImg() {
    //         //获取上传文件的信息
    //         var upfile = document.getElementById('pic').files[0];
    //         //生成文件url
    //         var sr = window.URL.createObjectURL(upfile);
    //         var goodsimg = document.getElementById('plantImg');
    //         goodsimg.src = sr;
    //     },
    // }
}
</script>

<script setup>
import { ref } from 'vue';
import ImageCard from './ImageCard.vue';
import InfoCard from './InfoCard.vue';
import { getLabelFromText , postImage} from "@/apis";

const images = ref(['flowers1.jpg', 'flowers2.jpg', 'flowers3.jpg'])
const displayType = ref(1)
const key_words = ref(' ')

const showImg = () => {
  postImage('/image/search', document.getElementById('pic').files[0]).then((value) => {
    console.log(value)
  })
  displayType.value = 2;
}

const search_by_keywords = () =>{
  console.log(key_words)
  getLabelFromText('/image/search',key_words).then((value) => {
    console.log(value)
  })

  displayType.value = 2;
}
</script>

<style scoped>
.upload-container {
    text-align: center;
    float: left;
    background: rgba(7,54,36,0.9);
    border-radius: 6px;
    padding: 0 10px;
}

.upload-container label {
    padding: 12px;
    color: white;
    cursor: pointer;
    font-size: 3.8vh;
    float: left;
}
</style>
<style>
.arco-input-wrapper .arco-input.arco-input-size-large {
    padding-top: 9px !important;
    padding-bottom: 9px !important;
    font-size: 28px !important;
}

.arco-btn-size-large.arco-btn-only-icon {
    width: 60px !important;
    height: 60px !important;
}

.arco-btn-primary, .arco-btn-primary[type='button'], .arco-btn-primary[type='submit'] {
  background-color: green !important;
  margin-right: 1.5px;
}

.arco-carousel-card .arco-carousel-item-prev {
  opacity: 1 !important;
}

.arco-carousel-card .arco-carousel-item-next {
  opacity: 1 !important;
}
</style>
