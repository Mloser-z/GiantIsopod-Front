<template>
    <a-carousel :autoPlay="{ interval: 3000, hoverToPause: true }" animation-name="card" show-arrow="always"
        indicator-position="bottom" :style="{ width: '100%', height: '340px', }">
        <a-carousel-item v-for="image in props.images" :key="image" :style="{ width: '60%' }">
            <img :src="image" :style="{ height: '100%', }" @click="search(image)" class="plant"/>
        </a-carousel-item>
    </a-carousel>
</template>

<script>
export default {
    name: 'ImageCard'
}
</script>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({ images: Array })
import {defineEmits} from "vue";

const emits = defineEmits(['postSearchRequest']);
const search = (img_url) => {
  emits('postSearchRequest',img_url)
}
</script>

<style>
.plant{
  cursor: pointer;
  transition: all 0.6s;
}
.plant:hover{
  transform: scale(1.2);
}
</style>
