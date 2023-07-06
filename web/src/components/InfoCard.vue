<template>
    <div style="background: #d7edde;height:100vh;width: 99vw;border-radius: 5px;margin: 0px auto;overflow-y: scroll;">
      <div style="padding: 4vh 6vw 2vh;width: 100vw">
        <p style="font-size: 8vh;text-align: left"> {{ props.plant.flower_name }}</p>
        <p style="font-size: 2.5vh;color: darkgreen;text-align: left;margin-top: -25px;margin-left: 20px;">{{ props.plant.flower_type }}</p>
        <div style="padding-top: 24px;text-align: left">
          <img :src="props.plant.pics[0]" class="flower_img">
          <img :src="props.plant.pics[1]" class="flower_img">
          <img :src="props.plant.pics[2]" class="flower_img">
        </div>
      </div>
      <div style="
  height: 100vh;
  top: 10vh;
  position: relative;
  background: whitesmoke;
  padding: 5vh 6vw;
  font-size: 2.5vh;
  line-height: 1.4;">
          {{ props.plant.flower_intro }}
      </div>
    </div>
</template>

<script>
export default {
    name: "InfoCard"
}
</script>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({ plant: Object });

</script>
<style scoped>
.flower_img {
    height: 25vh;
    object-fit: contain;
    position: relative;
    margin-left: 20px;
}
</style>
