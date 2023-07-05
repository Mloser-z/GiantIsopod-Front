<template>
    <div style="background: #d7edde;height:100vh;width: 99vw;border-radius: 5px;margin: 0px auto;overflow-y: scroll;">

        <p style="
    font-size: 8vh;
    position: relative;
    top: 90px;
    margin-top: -2vh;
    left: -35vw;"> {{ props.plants.flower_name }}</p>

        <p style="
    font-size: 2.5vh;
    color: darkgreen;
    position: relative;
    top: 35px;
    left: -35vw;">{{ props.plants.flower_type }}</p>

        <div style="
    display: block;
    position: relative;
    top: 60px;
    left: -10vw;">
            <img :src="props.plants.pics[0]" class="flower_img">
            <img :src="props.plants.pics[1]" class="flower_img">
            <img :src="props.plants.pics[2]" class="flower_img">
        </div>
        <div style="
    height: 100vh;
    top: 10vh;
    position: relative;
    background: whitesmoke;
    padding: 5vh 6vw;
    font-size: 2.5vh;
    line-height: 1.4;">
            {{ props.plants.flower_intro }}
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoCard"
}
</script>
<script setup>
import {defineProps} from 'vue';
const props = defineProps({ plant:{flower_name:String, flower_type:String,flower_intro:String,pics:Array } });

</script>
<style scoped>
.flower_img {
    height: 25vh;
    object-fit: contain;
    position: relative;
    margin-left: 20px;
}
</style>
