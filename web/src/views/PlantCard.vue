<template>
  <div id="plantsCard">
    <Header />
    <Cards v-if="load" :plants="plants" @postSearchRequest="look_up_a_plant" />
    <div style="margin: 120px auto;text-align: center;">
      <InfoCard :plant="plant"  v-if=" !load"></InfoCard>
    </div>
  </div>

</template>

<script>
export default {
    name: "PlantCard"
}
</script>
<script setup>
import Header from "@/components/Header";
import Cards from "@/components/Cards";
import InfoCard from "@/components/InfoCard";
import { getLabels, getLabel } from "@/apis";

import { ref } from "vue";

let load = ref(false)
let plants = ref()
let plant = ref(new Object())
// let test_plant = ref({ flower_name: '大王花对对对', flower_type: '霸王拿书', flower_intro: '1111', pics: ['flowers1.jpg','flowers1.jpg','flowers1.jpg'] })

getLabels("api/image/labels").then((response) => {
    if (response.status === 200) {
        plants.value = response.data["labels"]
        load.value = true
        console.log(plants)
    }
    else {
        console.log("err", response)
    }
})

const look_up_a_plant = (msg) => {
    // msg为传入的数组id（顺序
    getLabel("api/image/label", msg).then((response) => {
        if (response.status === 200) {
            plant.value.flower_name = plants.value[msg].name_zh;
            plant.value.flower_type = plants.value[msg].name_en;
            plant.value.flower_intro = response.data.info;
            plant.value.pics = response.data.urls;
            console.log(plant)
            load.value = false;
        }
        else {
            console.log("err", response)
        }
    })
}


</script>
<style scoped>
#plantsCard {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url("../assets/bg4.jpg");
    /*linear-gradient(*/
    /*rgba(0, 0, 0, 0.9),*/
    /*rgba(0, 0, 0, 0.9) 60%,*/
    /*rgba(34, 34, 34, 0.1)*/
    /*),*/
    background-repeat: no-repeat;
    background-size: 100%;
}
</style>
