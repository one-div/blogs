<template>
    <ul class="home_main_small_right">
        <!-- 个人博客 -->
        <li class="home_main_small_right_introduce" v-for="(item, index) in person" :key="index">
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
                    <a v-for="it in item.Contact" :key="it.title" :href="it.a" target="_black" :title="it.title"
                        download="wechat.jpg">
                        <img :src="it.img" alt="" />
                    </a>
                </div>
            </div>
        </li>
        <!-- 个人博客 end-->
        <!-- 公告 -->
        <li class="home_main_small_right_notice">
            <div class="home_main_small_right_notice_header">
                <img src="../../assets/home/公告.svg" alt="" />
                <span>公告</span>
            </div>
            <div class="home_main_small_right_notice_centect">
                Hi, welcome to my blog! 博客正在搭建ing
            </div>
        </li>
        <!-- 公告 end-->
        <!-- 最新文章 -->
        <li class="home_main_small_right_article" v-for="item in Recent_Posts" :key="item.title">
            <div class="home_main_small_right_article_header">
                <img :src="item.img" alt="" />
                <p>{{ item.title }}</p>
            </div>
            <div class="home_main_small_right_article_main" v-for="(it, index) in item.contents" :key="index">
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
                <img src="../../assets/home/分类2.svg" alt="" />
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
            <div class="home_main_small_right_classify_main" @click="rout_game">
                <p>html小游戏</p>
                <p>12</p>
            </div>
            <div class="home_main_small_right_classify_main">
                <p>生活</p>
                <p>24</p>
            </div>
        </li>
        <!-- 分类 end -->
    </ul>
</template>
<script>
export default {
    data() {
        return {
            // 个人
            person: [
                {
                    img: require("../../assets/home/头像.jpg"),
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
                            img: require("../../assets/home/QQ.svg"),
                        },
                        {
                            title: "Wechat",
                            a: "http://luckyzw.com/img/WX.d3ecb91f.jpg",
                            img: require("../../assets/home/微信2.svg"),
                        },
                        {
                            title: "Github",
                            a: "https://github.com/one-div",
                            img: require("../../assets/home/github.svg"),
                        },
                        {
                            title: "Email",
                            a: "mailto:2860708737@qq.com",
                            img: require("../../assets/home/24gf-envelopePlus.svg"),
                        },
                    ],
                },
            ],
            // 最近文章
            Recent_Posts: [
                {
                    img: require("../../assets/home/阅读.svg"),
                    title: "最新文章",
                    contents: [
                        {
                            img: require("../../assets/home/风景.png"),
                            title: "Vue知识点(一)",
                            time: "2022-01-25",
                        },
                        {
                            img: require("../../assets/home/风景.png"),
                            title: "Js知识点(一)",
                            time: "2022-01-25",
                        },
                        {
                            img: require("../../assets/home/风景.png"),
                            title: "Css知识点(二)",
                            time: "2022-01-25",
                        },
                        {
                            img: require("../../assets/home/风景.png"),
                            title: "Css知识点(一)",
                            time: "2022-01-25",
                        },
                    ],
                },
            ],
        }
    },
    mounted(){

    },
    methods:{
        rout_game(){
            this.$router.push("/game")
        },
    }
}
</script>
<style lang="less" scoped>
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
            cursor: pointer;
            &:hover{
                color: #4a7df5;
            }
        }
    }
}
</style>