<template>
    <div style="margin: 10px auto;text-align: center">
        <a-input-search style="margin-left: 28vw;float: left;margin-right: 25px;" :style="{ width: '700px' }" size="large"
            placeholder="搜索图片" search-button v-on:search="search_by_keywords" v-model="key_words" />
        <div class="upload-container">
            <img src="../assets/camera.png" style="float: left;height: 65px;">
            <label for="pic">上传图片</label>
            <input type="file" name="pic" id="pic" v-on:input="showImg" accept="image/png, image/jpg" style="display: none">
        </div>
    </div>

    <div style="margin: 120px auto;text-align: center;">
        <a-carousel :autoPlay="{ interval: 3000, hoverToPause: true }" animation-name="card" show-arrow="always"
            indicator-position="bottom" :style="{ width: '100%', height: '340px', }">
            <a-carousel-item v-for="image in props.images" :key="image.order" :style="{ width: '60%' }">
                <img :src="image.url" :style="{ height: '100%',cursor:'pointer' }" @click="search_in_carousel(image.order)" class="plant" />
            </a-carousel-item>
        </a-carousel>
    </div>
</template>

<script>
export default {
    name: 'MainPage',
    // methods: {
    //     showImg() {
    //         //获取上传文件的信息
    //         var upfile = document.getElementById('pic').files[0];
    //         //生成文件url
    //         var sr = window.URL.createObjectURL(upfile);
    //         var goodsimg = document.getElementById('plantImg');
    //         goodsimg.src = sr;
    //     },
    // }
}
</script>

<script setup>
import { ref, defineEmits,defineProps} from 'vue';
const emits = defineEmits(['postSearchRequest', 'postKeyWord','postOrder']);

// 轮播图url数组
const props = defineProps({images:Array})

// 存储待搜索关键词的变量
const key_words = ref('')
// 存储搜索结果
// const plant_result = ref({ flower_name: '大王花对对对', flower_type: '霸王拿书', flower_intro: '1111', pics: ['flowers1.jpg', 'flowers1.jpg', 'flowers1.jpg'] })


//关键词，识别结果
const search_by_keywords = () => {
    emits('postKeyWord', key_words.value)
}
// 传输n图片用于搜索
const showImg = () => {
    emits('postSearchRequest', document.getElementById('pic').files[0])
};

// 查询轮播图中数据结果
const search_in_carousel = (order) => {
  emits('postOrder',order)
}
// //根据植物名搜索唯一结果
// const search = (plantName) => {
//     // 根据子组件传回植物名字搜索
//     displayType.value = 0;
//     console.log(plantName);
//     getLabelFromText('api/image/search', plantName).then((value) => {
//         console.log(value);
//         if (key_words.value == '') {
//             displayType.value = 1;
//         } else {
//             displayType.value = 3;
//         }
//     })
// }
// //主页轮播图，搜索结果
// const search_from_imgCard = (imgUrl) => {
//     postImage('api/image/search', new File([imgUrl], 'plant')).then((value) => {
//         console.log(value)
//     })
//     displayType.value = 2;
// }
</script>

<style scoped>
.upload-container {
    text-align: center;
    float: left;
    background: rgba(7, 54, 36, 0.9);
    border-radius: 6px;
    padding: 0 10px;
}

.upload-container label {
    padding: 12px;
    color: white;
    cursor: pointer;
    font-size: 3.8vh;
    float: left;
}
</style>
<style>
.arco-input-wrapper .arco-input.arco-input-size-large {
    padding-top: 9px !important;
    padding-bottom: 9px !important;
    font-size: 28px !important;
}

.arco-btn-size-large.arco-btn-only-icon {
    width: 60px !important;
    height: 60px !important;
}

.arco-btn-primary,
.arco-btn-primary[type='button'],
.arco-btn-primary[type='submit'] {
    background-color: green !important;
    margin-right: 1.5px;
}

.arco-carousel-card .arco-carousel-item-prev {
    opacity: 1 !important;
}

.arco-carousel-card .arco-carousel-item-next {
    opacity: 1 !important;
}
</style>
