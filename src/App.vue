<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <username-popup :info="{ name: '测试标题1' }" :sureback="(input) => { return input; }"></username-popup> -->

    <div id="app2"></div>
  </div>
</template>

<script>
// 方式1
// import UsernamePopup from '@/components/UsernamePopup'

export default {
  name: 'App',
  props: {
    popups: Object
  },
  components: {
    // UsernamePopup
  },
  methods: {
    
  },
  mounted() {
    // 方式2
    this.$popup.show({ id: '#app2', info: { name: '111223' }, sureback: (input) => { console.log(334, input) } });
  }
}
</script>

<style></style>
