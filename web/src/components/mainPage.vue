<template>
    <div style="margin: 10px auto;text-align: center">
        <a-input-search style="margin-left: 24vw;" :style="{ width: '750px' }" size="large" placeholder="搜索图片"
            search-button />
        <div class="upload-container">
            <img src="../assets/camera.png" style="float: left;height: 65px;">
            <label for="pic">上传图片</label>
            <input type="file" name="pic" id="pic" v-on:input="showImg" accept="image/gif, image/jpeg"
                style="display: none">
        </div>
    </div>
    <!--  <div style="margin: 14vh 10vw;width: 40vw;height: 45vh;">-->
    <!--    <div style="width: 40vw;height: 45vh;background-color: rgba(0,0,0,0.8);">-->
    <!--      <img src="../assets/search.png" id="plantImg" style="height: 100%;width: 100%;object-fit: contain">-->
    <!--    </div>-->
    <!--    <div class="upload-container">-->
    <!--      <label for="pic">上传图片</label>-->
    <!--      <input type="file" name="pic" id="pic" v-on:input="showImg" accept="image/gif, image/jpeg" style="display: none">-->
    <!--    </div>-->
    <!--  </div>-->
</template>

<script>
export default {
    name: 'MainPage',
    methods: {
        showImg() {
            // //获取上传文件的信息
            // var upfile = document.getElementById('pic').files[0];
            // //生成文件url
            // var sr = window.URL.createObjectURL(upfile);
            // var goodsimg = document.getElementById('plantImg');
            // goodsimg.src = sr;
        },
    }
}
</script>

<script setup>
</script>

<style scoped>
.upload-container {
    text-align: center;
    float: right;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 6px;
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
</style>
