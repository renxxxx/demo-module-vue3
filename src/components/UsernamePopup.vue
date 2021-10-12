<template>
    <div style="width: 300px; border: 1px solid" v-if="isShow">
        <div style="text-align: center; line-height: 40px">{{ info.name }}</div>
        <input type="text" v-model="input" style="width: 240px; margin: 0px 0 20px 30px; height: 30px" />
        <div style="overflow: hidden">
            <div style="float: left; text-align: center; width: 150px; line-height: 40px; border-top: 1px solid; border-right: 1px solid" @click="sureBtn()">确定</div>
            <div style="float: left; text-align: center; width: 149px; line-height: 40px; border-top: 1px solid" @click="isShow = false">取消</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        info: { type: Object, default: () => ({ name: '请输入用户名' }) },
        sureback: { type: Function, default: () => () => {} }
    },
    data() {
        return {
            input: '',
            isShow: true
        };
    },
    methods: {
        sureBtn() {
            this.sureback(this.input);
        }
    }
};
</script>

<style scoped></style>
