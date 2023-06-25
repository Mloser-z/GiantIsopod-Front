<template>
    <a-carousel :autoPlay="{ interval: 3000, hoverToPause: true }" animation-name="card" show-arrow="never"
        indicator-position="outer" :style="{ width: '100%', height: '240px', }">
        <a-carousel-item v-for="image in props.images" :key="image" :style="{ width: '60%' }">
            <img :src="image" :style="{ width: '100%', }" />
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

</script>

<style></style>