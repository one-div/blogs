<template>
    <ul class="home_main_small_left">
        <li v-for="(item, index) in article" :key="index">
            <img class="home_main_small_left_left" :src="item.img" alt="" />
            <div class="home_main_small_left_right">
                <h1>{{ item.title }}</h1>
                <div class="home_main_small_left_right_tip">
                    <div>
                        <img src="../../assets/home/日历.svg" alt="" />
                        <p>发表与</p>
                        <p>{{ item.dateline }}</p>
                    </div>
                    <span>|</span>
                    <div>
                        <img src="../../assets/home/更新.svg" alt="" />
                        <p>更新与</p>
                        <p>{{ item.Updated }}</p>
                    </div>
                    <span>|</span>
                    <div>
                        <img src="../../assets/home/笔记.svg" alt="" />
                        <p>笔记</p>
                        <img style="margin: 0" src="../../assets/home/右箭头.svg" alt="" />
                        <p>{{ item.classify }}</p>
                    </div>
                </div>
                <p class="home_main_small_left_content">
                    {{ item.content }}
                </p>
            </div>
        </li>
    </ul>
</template>
<script>
import {article} from "./Js/Home.js"
export default {
    data() {
        return {
            // 文章
            article: [],
        }
    },
    created(){
        this.article=article
    },
}
</script>
<style lang="less" scoped>
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
</style>