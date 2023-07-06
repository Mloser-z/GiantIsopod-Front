<template>
    <div>
        <InfoCard v-if="load" :plant="plant" />
    </div>
</template>

<script>
export default {
    name: "InfoView"
}
</script>

<script setup>
import InfoCard from '@/components/InfoCard.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { getLabel } from '@/apis';

const router = useRouter();
let plant = ref(new Object());
let load = ref(false)

let msg = router.query.id;
getLabel("api/image/label", msg).then((response) => {
    if (response.status === 200) {
        plant.value.flower_name = history.state.params.name_zh;
        plant.value.flower_type = history.state.params.name_en;
        plant.value.flower_intro = response.data.info;
        plant.value.pics = response.data.urls;
        console.log(plant);
        load.value = true;
    }
    else {
        console.log("err", response);
    }
})

</script>

<style></style>