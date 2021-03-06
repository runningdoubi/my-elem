<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64" :src="seller.avatar" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="support-count" @click="showDetail">
                <span class="count">{{seller.supports.length}}个</span>
                <span>></span>
            </div>
        </div>
        <div class="bulletin-wrapper" @click="showDetail">
            <span class="bulletin-title"></span>
            <span class="bulletin-text">{{seller.bulletin}}</span>
            <span class="bulletin-more">></span>
        </div>
        <div class="background">
            <img :src="seller.avatar" width="100%" height="100%" alt="">
        </div>
        <transition name="fade">
            <div v-show="detailShow" class="detail">
                <div class="detail-wrapper clearfix">
                    <div class="detail-main">
                        <h1 class="name">{{seller.name}}</h1>
                        <div class="star-wrapper">
                            <star :size="48" :score="seller.score"></star>
                        </div>
                        <div class="title">
                            <div class="line"></div>
                            <div class="text">优惠信息</div>
                            <div class="line"></div>
                        </div>
                        <ul v-if="seller.supports" class="supports">
                            <li class="support-item" v-for="(item,index) in seller.supports">
                                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                                <span class="text">{{seller.supports[index].description}}</span>
                            </li>
                        </ul>
                        <div class="title">
                            <div class="line"></div>
                            <div class="text">商家公告</div>
                            <div class="line"></div>
                        </div>
                        <div class="bulletin">
                            <p class="content">{{seller.bulletin}}</p>
                        </div>
                    </div>
                </div>
                <div class="detail-close" @click="closeDetail">×</div>
            </div>
        </transition>
    </div>
</template>
<script>
import star from '../star/star';

export default {
    data() {
            return {
                detailShow: false
            }
        },
        props: {
            seller: {
                type: Object
            }
        },
        components: {
            star
        },
        created() {
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        },
        methods: {
            showDetail() {
                this.detailShow = true;
            },
            closeDetail() {
                this.detailShow = false;
            }
        }
}
</script>
<style rel="stylesheet">
.header {
    position: relative;
    color: #fff;
    background: rgba(7, 17, 27, .5);
    overflow: hidden;
}

.header .content-wrapper {
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;
}

.header .content-wrapper .avatar {
    display: inline-block;
    vertical-align: top;
}

.header .content-wrapper .avatar img {
    border-radius: 2px;
}

.header .content-wrapper .content {
    display: inline-block;
    margin-left: 16px;
}

.header .content-wrapper .content .title {
    margin: 2px 0 8px 0;
}

.header .content-wrapper .content .title .brand {
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 18px;
    background-image: url('./img/brand@2x.png');
    background-size: 30px 18px;
    background-repeat: no-repeat;
}

.header .content-wrapper .content .title .name {
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
}

.header .content-wrapper .content .description {
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
}

.header .content-wrapper .content .support .icon {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
}

.header .content-wrapper .content .support .icon.decrease {
    background-image: url('./img/decrease_1@2x.png');
}

.header .content-wrapper .content .support .icon.discount {
    background-image: url('./img/discount_1@2x.png');
}

.header .content-wrapper .content .support .icon.guarantee {
    background-image: url('./img/guarantee_1@2x.png');
}

.header .content-wrapper .content .support .icon.invoice {
    background-image: url('./img/invoice_1@2x.png');
}

.header .content-wrapper .content .support .icon.special {
    background-image: url('./img/special_1@2x.png');
}

.header .content-wrapper .content .support .text {
    line-height: 12px;
    font-size: 10px;
}

.header .content-wrapper .support-count {
    position: absolute;
    right: 12px;
    bottom: 14px;
    padding: 0px 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    background-color: rgba(0, 0, 0, .2);
    text-align: center;
}

.header .content-wrapper .support-count .count {
    font-size: 10px;
}

.header .content-wrapper .support-count span {
    margin-left: 2px;
    font-size: 10px;
}

.header .bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background-color: rgba(7, 17, 27, .2);
}

.header .bulletin-wrapper .bulletin-title {
    display: inline-block;
    vertical-align: top;
    margin-top: 7px;
    width: 22px;
    height: 12px;
    background-image: url('./img/bulletin@2x.png');
    background-size: 22px 12px;
    background-repeat: no-repeat;
}

.header .bulletin-wrapper .bulletin-text {
    margin: 0 4px;
    vertical-align: top;
    font-size: 10px;
}

.header .bulletin-wrapper .bulletin-more {
    position: absolute;
    right: 12px;
    top: 2px;
    font-size: 10px;
}

.header .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    filter: blur(10px);
}

.header .detail {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(7, 17, 27, .8);
    /*backdrop-filter:blur(10px);*/
    /*会有跳动，效果不好*/
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.header .detail .detail-wrapper {
    min-height: 100%;
    width: 100%;
}

.header .detail .detail-wrapper .detail-main {
    margin-top: 64px;
    padding-bottom: 64px;
}

.header .detail .detail-close {
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0 auto;
    clear: both;
    font-size: 32px;
}

.header .detail .detail-wrapper .detail-main .name {
    line-height: 16px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
}

.header .detail .detail-wrapper .detail-main .star-wrapper {
    margin-top: 18px;
    padding: 2px 0;
    text-align: center;
}

.header .detail .detail-wrapper .detail-main .title {
    display: flex;
    width: 80%;
    margin: 28px auto 24px auto;
}

.header .detail .detail-wrapper .detail-main .title .line {
    flex: 1;
    position: relative;
    top: -6px;
    border-bottom: 1px solid rgba(255, 255, 255, .2);
}

.header .detail .detail-wrapper .detail-main .title .text {
    padding: 0 12px;
    font-weight: 700;
    font-size: 14px;
}

.header .detail .detail-wrapper .detail-main .supports {
    width: 80%;
    margin: 0 auto;
}

.header .detail .detail-wrapper .detail-main .supports .support-item {
    padding: 0 12px;
    margin-bottom: 12px;
    font-size: 0;
}

.header .detail .detail-wrapper .detail-main .supports .support-item:last-child {
    margin-bottom: 0;
}

.header .detail .detail-wrapper .detail-main .supports .support-item .icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: top;
    margin-right: 6px;
    background-size: 16px 16px;
    background-repeat: no-repeat;
}

.header .detail .detail-wrapper .detail-main .supports .support-item .icon.decrease {
    background-image: url('./img/decrease_2@2x.png');
}

.header .detail .detail-wrapper .detail-main .supports .support-item .icon.discount {
    background-image: url('./img/discount_2@2x.png');
}

.header .detail .detail-wrapper .detail-main .supports .support-item .icon.guarantee {
    background-image: url('./img/guarantee_2@2x.png');
}

.header .detail .detail-wrapper .detail-main .supports .support-item .icon.invoice {
    background-image: url('./img/invoice_2@2x.png');
}

.header .detail .detail-wrapper .detail-main .supports .support-item .icon.special {
    background-image: url('./img/special_2@2x.png');
}

.header .detail .detail-wrapper .detail-main .supports .support-item .text {
    line-height: 16px;
    font-size: 12px;
}

.header .detail .detail-wrapper .detail-main .bulletin {
    width: 80%;
    margin: 0 auto;
}

.header .detail .detail-wrapper .detail-main .bulletin .content {
    padding: 0 12px;
    line-height: 24px;
    font-size: 12px;
}
</style>
