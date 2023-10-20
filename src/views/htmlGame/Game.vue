<template>
  <div>
    <p>主页面</p>
    <router-view />
  </div>
</template>

<script>
import HomeView from '../HomeMain/HomeView.vue'
export default {
  components: { HomeView },
}
</script>

<style>

</style>