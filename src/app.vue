<template>
    <div class="app">
        <Button>Default</Button>
        <p v-if="show" @click="clsoe" class="text">
            {{ installed ? "在客户端应该安装成功，点击我关闭!" : "未安装" }}
        </p>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
    name: "app",
    data() {
        return {
            installed: false,
            show: true
        };
    },
    mounted() {
        this.installed = true;
    },
    methods: {
        clsoe() {
            this.show = false;
        }
    }
});
</script>
<style lang="less" scoped>
.app {
    padding: 100px;
    text-align: center;
}
.text {
    color: #999;
    font-size: 14px;
    cursor: pointer;
}
</style>
