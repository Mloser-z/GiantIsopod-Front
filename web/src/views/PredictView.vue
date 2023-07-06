<template>
    <div style="
    background: whitesmoke;
    height: 75vh;
    width: 98vw;
    border-radius: 4px;
    margin: -1px auto;
    overflow-y: scroll;
    overflow-x: hidden;">
        <div>
            <img src="flowers0.jpg"
                style="width: 18vw;aspect-ratio: 1;object-fit: cover;margin-top: 30px;border-style: solid;border-color:darkgrey;padding: 10px">
        </div>
        <div style="
    font-size: 24px;
    color: darkcyan;
    text-align: left;
    position: relative;
    left: 9vw;
    margin-top: 39px;">
            searching results：
        </div>
        <hr style="background-color:#ccc;height: 1px;width:90%;border: none;" />
        <div style="
     display: flex;
     height: 29vh;
     position: relative;
     margin-top: 49px" v-for="result in results" :key="result.name_en">
            <div style="
    margin-top: 99px;
    margin-left: 99px;
    width: 9vw;
    height: 79px;
    font-size: 24px;
    line-height: 79px;
    color: gray;">{{ result.similarity }}</div>
            <img class="result_pic" :src="result.url0" style="border-left-style: solid;border-left-color: darkgrey" />
            <img class="result_pic" :src="result.url1" />
            <div style="width: 9vw;height: 100%;">
                <div style="
            height: 19%;
            font-size: 28px;
            text-align: left;
            margin-left: 39px;
            margin-top: 59px;">
                    {{ result.name_en }}
                </div>
                <div style="
            text-align: left;
            font-size: 24px;
            margin-left: 44px;">
                    {{ result.name_zh }}
                </div>
                <div style="
                height: 11%;
                margin-top: 29px;
                width: 249px;
                display: flex;">
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

.btn {
    height: 100%;
    aspect-ratio: 3;
    float: left;
    margin-left: 45px;
    object-fit: cover;
    cursor: pointer;
}
</style>