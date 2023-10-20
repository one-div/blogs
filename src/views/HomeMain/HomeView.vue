<template>
  <div class="home">
    <!--头部导航栏 -->
    <Header></Header>
    <!-- 导航栏end -->
    <!-- background特效 start -->
    <div id="login" @:mousedown.left="createLoves($event)" @:mouseup="removeSmallHert">
      <Background ref="background"></Background>
    </div>
    <!-- background特效 end-->
    <div class="center">
      <h1>Eric の知行屋</h1>
      <p>让自己的内心藏着一条巨龙，既是一种苦刑，也是一种乐趣</p>
      <print class="print"></print>
    </div>
    <div class="home_main">
      <div class="home_main_small">
        <!-- 发布的文章 -->
        <Article></Article>
        <!-- 发布的文章 end-->
        <HomeRIght></HomeRIght>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>
<script>
import Background from "@/components/Backgrond.vue";
import print from "@/components/Print.vue";
import Header from "@/components/Header.vue";
import Bottom from "@/components/Bottom.vue";
import Article from "./Article.vue";
import HomeRIght from "./HomeRIght.vue";
export default {
  components: {
    Background,
    print,
    Header,
    Bottom,
    Article,
    HomeRIght
  },
  data() {
    return {
      
    };
  },
  created(){
    
  },
  mounted(){
    console.log(this.$util.getTime());
    console.log(this.$util.file());
  },
  methods: {
    createLoves() {
      this.$refs.background.createLoves(event);
    },
    removeSmallHert() {
      this.$refs.background.removeSmallHert();
    },
  },
};
</script>
<style scoped lang="less">
.home {
  width: 100%;
  height: 100vh;
  background: url(../../assets/油画.jpg) no-repeat center center;
  background-size: 100% 100%;
  position: relative;
}

#login {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.header {
  width: 100%;
  height: 100%;

  nav {
    width: 90%;
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

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  width: 500px;
  text-align: center;
  user-select: none;

  h1 {
    font-size: 36px;
  }

  p {
    line-height: 24px;
    margin-top: 5px;
  }

  .print {
    overflow: hidden;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
  }
}

.home_main {
  width: 100%;
  background: #fff;

  .home_main_small {
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
}
</style>
