<template>
  <div class="home">
    <!-- background特效 -->
    <div
      id="login"
      v-on:mousedown.left="createLoves($event)"
      v-on:mouseup="removeSmallHert"
    >
      <Background ref="background"></Background>
    </div>
    <!-- background特效 end-->
    <!-- 导航栏 -->
    <Header></Header>
    <!-- 导航栏end -->
    <div class="center">
      <h1>Eric の知行屋</h1>
      <p>让自己的内心藏着一条巨龙，既是一种苦刑，也是一种乐趣</p>
      <print class="print"></print>
    </div>
    <div class="home_main">
      <div class="home_main_small">
        <!-- 发布的文章 -->
        <ul class="home_main_small_left">
          <li v-for="(item, index) in article" :key="index">
            <img class="home_main_small_left_left" :src="item.img" alt="" />
            <div class="home_main_small_left_right">
              <h1>{{ item.title }}</h1>
              <div class="home_main_small_left_right_tip">
                <div>
                  <img src="../assets/home/日历.svg" alt="" />
                  <p>发表与</p>
                  <p>{{ item.dateline }}</p>
                </div>
                <span>|</span>
                <div>
                  <img src="../assets/home/更新.svg" alt="" />
                  <p>更新与</p>
                  <p>{{ item.Updated }}</p>
                </div>
                <span>|</span>
                <div>
                  <img src="../assets/home/笔记.svg" alt="" />
                  <p>笔记</p>
                  <img
                    style="margin: 0"
                    src="../assets/home/右箭头.svg"
                    alt=""
                  />
                  <p>{{ item.classify }}</p>
                </div>
              </div>
              <p class="home_main_small_left_content">
                {{ item.content }}
              </p>
            </div>
          </li>
        </ul>
        <!-- 发布的文章 end-->
        <ul class="home_main_small_right">
          <!-- 个人博客 -->
          <li
            class="home_main_small_right_introduce"
            v-for="(item, index) in person"
            :key="index"
          >
            <div class="introduce_main">
              <img class="introduce_main_photo" :src="item.img" alt="" />
              <h1>{{ item.name }}</h1>
              <h4>{{ item.Signature }}</h4>
              <div class="introduce_main_classify">
                <div v-for="it in item.article" :key="it.name">
                  <p>{{ it.name }}</p>
                  <div>{{ it.num }}</div>
                </div>
              </div>
              <div class="introduce_main_btn">
                <p>{{ item.btn }}</p>
              </div>
              <div class="introduce_main_bottom">
                <a
                  v-for="it in item.Contact"
                  :key="it.title"
                  :href="it.a"
                  target="_black"
                  :title="it.title"
                  download="wechat.jpg"
                >
                  <img :src="it.img" alt="" />
                </a>
              </div>
            </div>
          </li>
          <!-- <li class="home_main_small_right_introduce" style="display: none">
            <div class="introduce_main">
              <img
                class="introduce_main_photo"
                src="../assets/home/头像.jpg"
                alt=""
              />
              <h1>Eric</h1>
              <h4>不定时摸鱼的博主</h4>
              <div class="introduce_main_classify">
                <div>
                  <p>文章</p>
                  <div>4</div>
                </div>
                <div>
                  <p>分类</p>
                  <div>3</div>
                </div>
              </div>
              <div class="introduce_main_btn">
                <p>Follow Me</p>
              </div>
              <div class="introduce_main_bottom">
                <a
                  href="http://wpa.qq.com/msgrd?v=3&uin=2860708737&site=qq&menu=yes"
                  target="_black"
                  title="QQ"
                >
                  <img src="../assets/home/QQ.svg" alt="" />
                </a>
                <a
                  href="http://localhost/img/WX.d3ecb91f.jpg"
                  target="_blank"
                  title="Wechat"
                  download="wechat.jpg"
                >
                  <img src="../assets/home/微信2.svg" alt="" />
                </a>
                <a
                  href="https://github.com/one-div"
                  target="_blank"
                  title="Github"
                >
                  <img src="../assets/home/github.svg" alt="" />
                </a>
                <a
                  href="mailto:2860708737@qq.com"
                  target="_blank"
                  title="Email"
                >
                  <img src="../assets/home/24gf-envelopePlus.svg" alt="" />
                </a>
              </div>
            </div>
          </li> -->
          <!-- 个人博客 end-->
          <!-- 公告 -->
          <li class="home_main_small_right_notice">
            <div class="home_main_small_right_notice_header">
              <img src="../assets/home/公告.svg" alt="" />
              <span>公告</span>
            </div>
            <div class="home_main_small_right_notice_centect">
              Hi, welcome to my blog! 博客正在搭建ing
            </div>
          </li>
          <!-- 公告 end-->
          <!-- 最新文章 -->
          <li
            class="home_main_small_right_article"
            v-for="item in Recent_Posts"
            :key="item.title"
          >
            <div class="home_main_small_right_article_header">
              <img :src="item.img" alt="" />
              <p>{{ item.title }}</p>
            </div>
            <div
              class="home_main_small_right_article_main"
              v-for="(it, index) in item.contents"
              :key="index"
            >
              <img :src="it.img" alt="" />
              <div>
                <h4>{{ it.title }}</h4>
                <p>{{ it.time }}</p>
              </div>
            </div>
          </li>
          <!-- 最新文章 end -->
          <!-- 分类 -->
          <li class="home_main_small_right_classify">
            <div class="home_main_small_right_classify_header">
              <img src="../assets/home/分类2.svg" alt="" />
              <p>分类</p>
            </div>
            <div class="home_main_small_right_classify_main">
              <p>vue</p>
              <p>3</p>
            </div>
            <div class="home_main_small_right_classify_main">
              <p>js</p>
              <p>5</p>
            </div>
            <div class="home_main_small_right_classify_main">
              <p>css</p>
              <p>8</p>
            </div>
            <div class="home_main_small_right_classify_main">
              <p>HTML</p>
              <p>12</p>
            </div>
            <div class="home_main_small_right_classify_main">
              <p>生活</p>
              <p>24</p>
            </div>
          </li>
          <!-- 分类 end -->
        </ul>
      </div>
    </div>
    <div class="Home_Bottom">
      <div>
        <p>Eric の知行屋</p>
        <a target="_blank" href="https://beian.miit.gov.cn">
          <img
            src="../assets/home/icp.png"
            data-lazy-src="/img/icp.png"
            alt="备案号:豫ICP备2022004843号-1"
            style="vertical-align: text-top; margin-right: 5px"
            data-ll-status="loaded"
            class="entered loaded"
          />
          备案号:豫ICP备2022004843号-1
        </a>
      </div>
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import Background from "../components/Backgrond.vue";
import print from "../components/Print.vue";
import Header from "../components/Header.vue";
export default {
  components: {
    Background,
    print,
    Header,
  },
  data() {
    return {
      // 文章
      article: [
        {
          img: require("../assets/home/Vue.svg"),
          title: "Vue知识点(一)",
          dateline: "2022-01-25",
          Updated: "2022-01-25",
          classify: "Vue",
          content:
            "Vue是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手,还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。",
        },
        {
          img: require("../assets/home/js.svg"),
          title: "Js知识点(一)",
          dateline: "2022-01-25",
          Updated: "2022-01-25",
          classify: "Js",
          content:
            "JavaScript 是属于 HTML 和 Web 的编程语言.编程令计算机完成您需要它们做的工作。JavaScript 很容易学习。",
        },
        {
          img: require("../assets/home/CSS.svg"),
          title: "Css知识点(二)",
          dateline: "2022-01-25",
          Updated: "2022-01-25",
          classify: "Css",
          content:
            "CSS 是一种描述 HTML 文档样式的语言。CSS 描述应该如何显示 HTML 元素。通过使用 CSS 我们可以大大提升网页开发的工作效率！",
        },
        {
          img: require("../assets/home/CSS.svg"),
          title: "Css知识点(一)",
          dateline: "2022-01-25",
          Updated: "2022-01-25",
          classify: "Css",
          content:
            "CSS 是一种描述 HTML 文档样式的语言。CSS 描述应该如何显示 HTML 元素。通过使用 CSS 我们可以大大提升网页开发的工作效率！",
        },
      ],
      // 个人
      person: [
        {
          img: require("../assets/home/头像.jpg"),
          name: "Eric",
          Signature: "不定时摸鱼的博主",
          article: [
            {
              name: "文章",
              num: 4,
            },
            {
              name: "分类",
              num: 3,
            },
          ],
          btn: "Follow Me",
          Contact: [
            {
              title: "QQ",
              a: "http://wpa.qq.com/msgrd?v=3&uin=2860708737&site=qq&menu=yes",
              img: require("../assets/home/QQ.svg"),
            },
            {
              title: "Wechat",
              // <!-- https://cyan-blog.oss-cn-shenzhen.aliyuncs.com/global/wechat.jpeg -->
              a: "http://luckyzw.com/img/WX.d3ecb91f.jpg",
              img: require("../assets/home/微信2.svg"),
            },
            {
              title: "Github",
              a: "https://github.com/one-div",
              img: require("../assets/home/github.svg"),
            },
            {
              title: "Email",
              a: "mailto:2860708737@qq.com",
              img: require("../assets/home/24gf-envelopePlus.svg"),
            },
          ],
        },
      ],
      // 最近文章
      Recent_Posts: [
        {
          img: require("../assets/home/阅读.svg"),
          title: "最新文章",
          contents: [
            {
              img: require("../assets/home/风景.png"),
              title: "Vue知识点(一)",
              time: "2022-01-25",
            },
            {
              img: require("../assets/home/风景.png"),
              title: "Js知识点(一)",
              time: "2022-01-25",
            },
            {
              img: require("../assets/home/风景.png"),
              title: "Css知识点(二)",
              time: "2022-01-25",
            },
            {
              img: require("../assets/home/风景.png"),
              title: "Css知识点(一)",
              time: "2022-01-25",
            },
          ],
        },
      ],
    };
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
  background: url(../assets/油画.jpg) no-repeat center center;
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

    .home_main_small_left {
      min-width: 740px;
      width: 75%;
      box-sizing: border-box;
      li {
        width: 100%;
        height: 280px;
        margin: 20px 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        border-radius: 8px;
        box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
        .home_main_small_left_left {
          width: 35%;
          height: 260px;
          margin-left: 12px;
          border-radius: 8px;
        }
        .home_main_small_left_right {
          height: 160px;
          width: 55%;
          display: inline-block;
          overflow: hidden;
          padding: 0 40px;
          h1 {
            font-size: 24px;
          }
          .home_main_small_left_right_tip {
            display: flex;
            margin-top: 20px;
            color: #858585;
            span {
              margin: 0 6px;
            }
            div {
              margin-left: -8px;
              display: flex;
              p:nth-child(3) {
                margin-left: 5px;
              }
              img {
                width: 15px;
                margin: 0 0px 0 8px;
              }
            }
          }
          .home_main_small_left_content {
            margin-top: 10px;
          }
        }
      }
    }
    .home_main_small_right {
      width: 25%;
      height: 800px;
      box-sizing: border-box;
      padding-left: 15px;
      li {
        margin: 20px 0;
        width: 100%;
        overflow: hidden;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
      }
      .home_main_small_right_introduce {
        .introduce_main {
          width: 90%;
          margin: 0 auto;
          height: 350px;
          text-align: center;
          .introduce_main_photo {
            width: 176px;
            height: 110px;
            object-fit: cover;
            margin-top: 20px;
          }
          h1 {
            line-height: 50px;
            font-size: 28px;
          }
          .introduce_main_classify {
            width: 150px;
            display: flex;
            margin: 20px auto;
            justify-content: space-between;
            div {
              cursor: pointer;
            }
          }
          .introduce_main_btn {
            width: 80%;
            margin: 0 auto;
            height: 35px;
            background-color: #49b1f5;
            cursor: pointer;
            p {
              line-height: 35px;
              color: #f6f8fa;
            }
          }
          .introduce_main_bottom {
            width: 150px;
            margin: 0 auto;
            display: flex;
            height: 36px;
            align-items: center;
            justify-content: space-around;
            img {
              width: 24px;
              height: 24px;
              cursor: pointer;
            }
          }
        }
      }
      .home_main_small_right_notice {
        height: 100px;
        .home_main_small_right_notice_header {
          display: flex;
          height: 52px;
          align-items: center;
          margin-left: 20px;

          img {
            width: 20px;
            height: 18px;
          }
          span {
            margin-left: 8px;
            font-weight: 550;
          }
        }
        .home_main_small_right_notice_centect {
          margin-top: 14px;
          flex-wrap: wrap;
          width: 86%;
          margin: 0 auto;
          height: 30px;
        }
      }
      .home_main_small_right_article {
        height: 440px;
        .home_main_small_right_article_header {
          display: flex;
          margin-left: 20px;
          height: 52px;
          align-items: center;
          img {
            width: 24px;
            height: 24px;
          }
          p {
            margin-left: 5px;
          }
        }
        .home_main_small_right_article_main {
          display: flex;
          height: 58px;
          align-items: center;
          margin-left: 20px;
          width: 86%;
          margin: 10px auto;
          img {
            width: 58px;
            height: 58px;
            object-fit: cover;
          }
          div {
            height: 58px;
            padding-left: 10px;
            h4 {
              height: 29px;
              width: 100%;
              flex-wrap: wrap;
              line-height: 29px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            p {
              line-height: 29px;
              color: #858585;
              font-size: 85%;
            }
          }
        }
      }
      .home_main_small_right_classify {
        .home_main_small_right_classify_header {
          display: flex;
          margin-left: 20px;
          height: 52px;
          align-items: center;
          img {
            width: 24px;
            height: 24px;
          }
          p {
            margin-left: 5px;
          }
        }
        .home_main_small_right_classify_main {
          display: flex;
          width: 86%;
          margin: 0 auto;
          line-height: 32px;
          justify-content: space-between;
        }
      }
    }
  }
}
// 底部
.Home_Bottom{
  width: 100%;
  height: 80px;
  background: black;
  border: 1px solid #e5e6eb;
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    color: #858585;
  }
  p{
    text-align: center;
    color: #858585;
  }
}
</style>
