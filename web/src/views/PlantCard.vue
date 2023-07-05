<template>
    <div id="plantsCard">
        <Header />
        <Cards v-if="load" :plants="plants" />
        <InfoCard v-else></InfoCard>
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
import { getLabels } from "@/apis";

import { ref } from "vue";

let load = ref(true)
let plants = ref()

getLabels("api/image/label").then((response) => {
    if (response.status === 200) {
        plants.value = response.data["labels"]
        load.value = true
        console.log(plants)
    }
    else {
        console.log("err", response)
    }
})



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
