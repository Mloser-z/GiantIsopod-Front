<template>
  <div style="height: 10vh;background-color: rgba(3,3,41,0.9);display: block;position: static">
    <img src="../assets/logo.png" id="logo">
    <router-link to="/">
      <img src="../assets/home_btn.png" id="back_btn">
    </router-link>
    <!--  <img src="../assets/back_btn.png" id="back_btn">-->
  </div>
  <div id="predictBox">
        <div id="box_of_origin">
            <img src="flowers3.jpg" id="plant_origin_img">
        </div>
        <div id="text">searching results：</div>
        <hr id="hr" />
        <div v-for="result in results" :key="result.name_en" id="result_box">
            <div class="similarity">{{ result.similarity }}</div>
            <img class="result_pic" :src="result.url0" style="border-left-style: solid;border-left-color: darkgrey" />
            <img class="result_pic" :src="result.url1" />
            <div class="info_box">
                <div class="name">
                    {{ result.name_en }}
                </div>
                <div class="name">
                    {{ result.name_zh }}
                </div>
                <div class="btn_box">
                    <img class="btn" src="searchBtn.png" title="查看详情" @click="search(result.name_en)">
                    <img class="btn" src="GoogleBtn.png" title="谷歌搜索">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PredictView"
}
</script>

<script setup>



import { ref } from 'vue';
// import { useRoute } from 'vue-router'
// import { getLabel } from '@/apis';

// const route = useRoute();
// let plant = ref(new Object());
// let load = ref(false)
let results = ref([
    {
        "similarity": "21%",
        "url0": "flowers1.jpg",
        "url1": "flowers1.jpg",
        "name_en": "Sunflower",
        "name_zh": "向日葵"
    },
    {
        "similarity": "21%",
        "url0": "flowers1.jpg",
        "url1": "flowers1.jpg",
        "name_en": "Sunflower",
        "name_zh": "向日葵"
    },
    {
        "similarity": "21%",
        "url0": "flowers1.jpg",
        "url1": "flowers1.jpg",
        "name_en": "Sunflower",
        "name_zh": "向日葵"
    }]);
// let msg = route.query.id;
// getLabel("api/image/label", msg).then((response) => {
//     if (response.status === 200) {
//         plant.value.flower_name = history.state.params.name_zh;
//         plant.value.flower_type = history.state.params.name_en;
//         plant.value.flower_intro = response.data.info;
//         plant.value.pics = response.data.urls;
//         console.log(plant);
//         load.value = true;
//     }
//     else {
//         console.log("err", response);
//     }
// })

</script>

<style>
#logo {
  height: 115%;
  width: auto;
}

#back_btn {
  float: right;
  height: 98%;
  width: auto;
  padding-top: 10px;
  cursor: pointer;
}

#back_btn:hover {
  height: 100%;
}

#predictBox{
  height: 88vh;
  width: 100vw;
  background: whitesmoke;
  overflow-y: scroll;
  overflow-x: hidden
}

#plant_origin_img{
  width: 18vw;
  aspect-ratio: 1;
  object-fit: cover;
  margin-top: 130px;
  border-style: solid;
  border-color:darkgrey;
  padding: 10px
}

#box_of_origin{
  text-align: center;
}

#text{
  font-size: 24px;
  color: darkcyan;
  text-align: left;
  position: relative;
  left: 15vw;
  margin-top: 39px;
}

#hr{
  background-color:#ccc;
  height: 1px;
  width:80%;
  border: none;
}

#result_box{
  display: flex;
  height: 29vh;
  position: relative;
  margin-top: 49px
}

.similarity{
  margin-top: 99px;
  margin-left: 23vw;
  width: 9vw;
  height: 79px;
  font-size: 24px;
  line-height: 79px;
  color: gray;
}
.result_pic {
    aspect-ratio: 1;
    padding: 10px;
    object-fit: cover;
    margin-left: 10px;
    transition: all 0.6s;
    cursor: pointer;
}

.result_pic:hover {
    box-shadow: 0px 0px 2px 3px grey;
}

.info_box{
  width: 9vw;
  height: 100%;
  text-align: left;
  padding: 60px 50px;
}

.name{
  font-size: 28px;
  margin-bottom: 20px;
}

.btn_box{
  height: 12%;
  margin-top: 29px;
  width: 249px;
  display: flex;
  margin-left: -45px;
}
.btn {
    height: 100%;
    aspect-ratio: 3;
    float: left;
    margin-left: 45px;
    object-fit: cover;
    cursor: pointer;
}
</style>
