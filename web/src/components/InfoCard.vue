<template>
    <div style="background: #d7edde;height:100vh;width: 99vw;border-radius: 5px;margin: 0px auto;overflow-y: scroll;">

        <p style="
    font-size: 8vh;
    position: relative;
    top: 90px;
    margin-top: -2vh;
    left: -35vw;"> {{ flower_name }}</p>

        <p style="
    font-size: 2.5vh;
    color: darkgreen;
    position: relative;
    top: 35px;
    left: -35vw;">{{ flower_type }}</p>

        <div style="
    display: block;
    position: relative;
    top: 60px;
    left: -10vw;">
            <img src="flowers1.jpg" class="flower_img">
            <img src="flowers1.jpg" class="flower_img">
            <img src="flowers1.jpg" class="flower_img">
        </div>
        <div style="
    height: 100vh;
    top: 10vh;
    position: relative;
    background: whitesmoke;
    padding: 5vh 6vw;
    font-size: 2.5vh;
    line-height: 1.4;">
            {{ flower_intro }}
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoCard"
}
</script>
<script setup>
import { ref } from 'vue';


const flower_name = ref("荷花")
const flower_type = ref("莲科莲属植物")
const flower_intro = ref("荷花，是莲科莲属多年生草本植物，根茎肥大多节，横生于水底泥中；叶盾状圆形，表面深绿色，被蜡质白粉，背面灰绿色；花单生于花梗顶端，高于水面之上，花色有白色、深红色、淡紫色或间色等变化，花后结实；果为椭圆形；花期6-9月，果期9-10月， [19] 公元前九百多年前的殷周时代，人们称荷花为芙藥，名称的由来当追潮到土地国有的“井田制”。")
</script>
<style scoped>
.flower_img {
    height: 25vh;
    object-fit: contain;
    position: relative;
    margin-left: 20px;
}
</style>
