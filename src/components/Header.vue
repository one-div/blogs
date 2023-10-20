<template>
  <!-- 网页导航栏 -->
  <div class="header">
    <nav>
      <div>
        <span>Eric の知行屋</span>
      </div>
      <ul>
        <li v-for="(item, index) in nav" :key="index" @click="btn(index)">
          <img :src="item.img" alt="" />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </nav>
  </div>
  <!-- 网页导航栏 end-->
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      // 导航
      nav: [
        {
          img: require("@/assets/home/搜索.svg"),
          name: "搜索",
        },
        {
          img: require("@/assets/home/首页.svg"),
          name: "首页",
        },
        {
          img: require("@/assets/home/标签.svg"),
          name: "标签",
        },
        {
          img: require("@/assets/home/分类.svg"),
          name: "分类",
        },
        {
          img: require("@/assets/home/本地生活.svg"),
          name: "生活",
        },
        {
          img: require("@/assets/home/关于.svg"),
          name: "关于",
        },
      ],
    };
  },
  created() { },
  methods: {
    btn(index) {
      console.log(index);
    },
  },
};
</script>
<style scoped lang="less">
.header {
  width: 100%;
  height: 100%;

  nav {
    width: 96%;
    margin: 0 auto;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;

    div {
      max-width: 100px;
      font-weight: bold;
    }

    ul {
      display: flex;
      z-index: 2;

      li {
        width: 80px;
        display: flex;
        height: 60px;
        align-items: center;
        justify-content: center;
        cursor: pointer !important;

        img {
          width: 25px;
          height: 25px;
        }

        p {
          margin-left: 5px;
        }
      }

      li:hover {
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.3);
        cursor: pointer;
      }
    }
  }
}
</style>
