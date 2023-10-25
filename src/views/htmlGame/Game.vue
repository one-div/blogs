<template>
  <div>
    <p>主页面</p>
    <div>
      <router-link to="/game/PlaneWars">飞机</router-link>
      <router-link to="/game/TowerDefence">塔防</router-link>
    </div>
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