<template>
<div id="cards_board">
  <div id="cards_header">

  </div>
  <div id="cards_box">
    <view v-for='plant in plants'
          :key='plant.name'>
      <div style="float: left;width: 20%;overflow: hidden">
        <img :src= 'plant.url' class="card_img" @click="look_up_flower(plant.name)">
        <p class="plant_name">{{plant.name}}</p>
      </div>

    </view>
<!--    <ul>-->
<!--      <li-->
<!--          v-for='plant in plants'-->
<!--          :key='plant.name'-->
<!--      >-->
<!--        -->
<!--      </li>-->
<!--    </ul>-->
  </div>
</div>
</template>

<script>
export default {
  name: "CardsBoard"
}
</script>
<script setup>
import {ref} from "vue";
 const plants = ref([
  {url:'flowers1.jpg',name:'菊花'},
  {url:'flowers2.jpg',name:'荷花'},
  {url:'flowers3.jpg',name:'兰花'},
 {url:'flowers4.jpg',name:'竹子'},
 {url:'flowers5.jpg',name:'西兰芹'},
 {url:'flowers6.jpg',name:'马蹄兰'},
   {url:'flowers7.jpg',name:'七里香'},
   {url:'flowers8.jpg',name:'红花月季'},
   {url:'flowers9.jpg',name:'白叶玫瑰'},
   {url:'flowers10.jpg',name:'波斯菊'},
   {url:'flowers2.jpg',name:'玉竹'},
   {url:'flowers3.jpg',name:'芍药'},
   {url:'flowers10.jpg',name:'波斯菊'},
   {url:'flowers2.jpg',name:'玉竹'},
   {url:'flowers3.jpg',name:'芍药'}
 ]);
 const look_up_flower = (flower_name) => {
 }
</script>
<style scoped>
#cards_board{
  background: rgba(211,237,213,0.3);
  overflow-y: scroll;
  width: 100vw;
  height: 58vh;
  position: relative;
  top: 30vh;
}
#cards_header{
  height: 15vh;
  background: rgba(211,237,213,0.8);
}
#cards_box{
  padding: 5vh 6vw;
  display: block;
}

.card_img{
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  cursor: pointer;
  transition: all 0.6s;
}
.card_img:hover{
  transform: scale(1.4);
}
.plant_name{
  position: relative;
  margin-left: 50%;
  margin-top: -22%;
  color: whitesmoke;
  font-size: 3.5vh;
  line-height: 1;
  font-weight: bolder;
}

</style>
