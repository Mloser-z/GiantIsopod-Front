<template>
<div style="
    background: whitesmoke;
    height: 76vh;
    width: 99vw;
    border-radius: 5px;
    margin: 0px auto;
    overflow-y: scroll;
    overflow-x: hidden;">
 <div>
   <img src="flowers1.jpg" style="width: 18vw;aspect-ratio: 1;object-fit: cover;margin-top: 30px;border-style: solid;border-color:darkgrey;padding: 10px">
 </div>
  <div style="
    font-size: 25px;
    color: darkcyan;
    text-align: left;
    position: relative;
    left: 10vw;
    margin-top: 40px;">
    searching results：
  </div>
  <hr style="background-color:#ccc;height: 2px;width:90%;border: none;"/>
  <div style="
     display: flex;
     height: 30vh;
     position: relative;
     margin-top: 50px" v-for="result in results" :key="result.EnglishName">
    <div style="
    margin-top: 100px;
    margin-left: 100px;
    width: 10vw;
    height: 80px;
    font-size: 25px;
    line-height: 80px;
    color: gray;">{{result.possibility}}</div>
    <img class="result_pic" :src="result.picUrl1" style="border-left-style: solid;border-left-color: darkgrey"/>
    <img class="result_pic" :src="result.picUrl2"/>
    <div style="width: 10vw;height: 100%;">
      <div style="
            height: 20%;
            font-size: 29px;
            text-align: left;
            margin-left: 40px;
            margin-top: 60px;">
        {{result.EnglishName}}
      </div>
      <div style="
            text-align: left;
            font-size: 25px;
            margin-left: 45px;">
        {{result.ChineseName}}
      </div>
      <div style="
                height: 12%;
                margin-top: 30px;
                width: 250px;
                display: flex;">
        <img class="btn" src="searchBtn.png" title="查看详情" @click="search(result.EnglishName)">
        <img class="btn" src="GoogleBtn.png" title="谷歌搜索">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PredictCard"
}
</script>

<script setup>
import {ref} from "vue";
import {defineEmits} from "vue";

const emits = defineEmits(['transfer']);
const search = (EnglishName) => {
  emits('transfer',EnglishName)
}
let results = ref([
    {"possibility":"22%",
    "picUrl1":"flowers1.jpg",
    "picUrl2":"flowers1.jpg",
    "EnglishName":"Sunflower",
    "ChineseName":"向日葵"},
    {"possibility":"22%",
    "picUrl1":"flowers1.jpg",
    "picUrl2":"flowers1.jpg",
    "EnglishName":"Sunflower",
    "ChineseName":"向日葵"},
    {"possibility":"22%",
    "picUrl1":"flowers1.jpg",
    "picUrl2":"flowers1.jpg",
    "EnglishName":"Sunflower",
    "ChineseName":"向日葵"}])
</script>

<style scoped>
.result_pic{
  aspect-ratio: 1;
  padding: 10px;
  object-fit: cover;
  margin-left: 10px;
  transition: all 0.6s;
  cursor: pointer;
}
.result_pic:hover{
  box-shadow: 0px 0px 2px 3px grey;
}
.btn{
  height: 100%;
  aspect-ratio: 3;
  float: left;
  margin-left: 45px;
  object-fit: cover;
  cursor: pointer;
}
</style>
