<template>
    <div style="margin: 10px auto;text-align: center">
        <a-input-search style="margin-left: 28vw;float: left;margin-right: 25px;" :style="{ width: '700px' }" size="large"
            placeholder="搜索图片" search-button v-on:search="search_by_keywords" v-model="key_words" />
        <div class="upload-container">
            <img src="../assets/camera.png" style="float: left;height: 65px;">
            <label for="pic">上传图片</label>
            <input type="file" name="pic" id="pic" v-on:input="showImg" accept="image/png, image/jpg" style="display: none">
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

    <div style="margin: 120px auto;text-align: center;">
      <LoadView v-if="displayType == 0"></LoadView>
      <image-card :images="images" v-if="displayType == 1" @postSearchRequest="search_from_imgCard"></image-card>
      <info-card v-if="displayType == 2" :plant="plant_result"></info-card>
      <predict-card v-if="displayType == 3" @transfer="search"></predict-card>
    </div>
</template>

<script>
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
import PredictCard from './PredictCard';
import LoadView from './LoadView';
import { getLabelFromText, postImage } from "@/apis";

// 轮播图url数组
const images = ref(['flowers1.jpg', 'flowers2.jpg', 'flowers3.jpg','flowers4.jpg','flowers5.jpg','flowers6.jpg'])
// 根据变量展示界面，0为加载中，1为初始界面，2为单个植物具体信息界面，3为预测结果界面（多种可能展示）
const displayType = ref(1)
// 存储待搜索关键词的变量
const key_words = ref('')
// 存储搜索结果
const plant_result = ref({ flower_name: '大王花对对对', flower_type: '霸王拿书', flower_intro: '1111', pics: ['flowers1.jpg','flowers1.jpg','flowers1.jpg'] })

// 上传图片，预测返回多个结果
const showImg = () => {
    displayType.value = 0;
    postImage('api/image/search', document.getElementById('pic').files[0]).then((value) => {
      if(value.status == 200){
        displayType.value = 2;
      }

    })

}
//关键词，识别结果
const search_by_keywords = () => {
  displayType.value = 0;
  getLabelFromText('api/image/search', key_words.value).then((value) => {
    console.log(value);
    if(key_words.value == ''){
      displayType.value = 1;
    }else {
      displayType.value = 3;
    }
  })
}
//根据植物名搜索唯一结果
const search = (plantName) => {
  // 根据子组件传回植物名字搜索
  displayType.value = 0;
  console.log(plantName);
  getLabelFromText('api/image/search', plantName).then((value) => {
    console.log(value);
    if(key_words.value == ''){
      displayType.value = 1;
    }else {
      displayType.value = 3;
    }
  })
}
//主页轮播图，搜索结果
const search_from_imgCard = (imgUrl) =>
{
  postImage('api/image/search', new File([imgUrl],'plant')).then((value) => {
    console.log(value)
  })
  displayType.value = 2;
}</script>

<style scoped>
.upload-container {
    text-align: center;
    float: left;
    background: rgba(7, 54, 36, 0.9);
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

.arco-btn-primary,
.arco-btn-primary[type='button'],
.arco-btn-primary[type='submit'] {
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
