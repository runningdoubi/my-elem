<template>
    <div class="shopcart">
        <div class="content">
            <div class="content-left">
                <div class="logo-wrapper">
                    <div class="logo" :class="{'highlight':totalCount>0}">
                        <i class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></i>
                    </div>
                    <div class="num" v-show="totalCount>0">{{totalCount}}</div>
                </div>
                <div class="price" :class="{'highlight':totalPrice>0}">¥{{totalPrice}}</div>
                <div class="desc">另需配送费¥{{deliveryPrice}}元</div>
            </div>
            <div class="content-right">
                <div class="pay">
                    ¥{{minPrice}}元起送
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    props: {
        selectFoods: {
            type: Array,
            default () {
                return [];
            }
        },
        deliveryPrice: {
            type: Number,
            default: 0
        },
        minPrice: {
            type: Number,
            default: 0
        }
    },
    computed: {
        totalPrice() {
            let total = 0;
            this.selectFoods.forEach((food) => {
                total += food.price * food.count
            });
            return total;
        },
        totalCount() {
            let count = 0;
            this.selectFoods.forEach((food) => {
                count += food.count;
            });
            return count;
        }
    }
}
</script>
<style rel="stylesheet" scoped>
.shopcart {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 50;
    width: 100%;
    height: 48px;
}

.shopcart .content {
    display: flex;
    background-color: #141d27;
    font-size: 0;
}

.shopcart .content .content-left {
    flex: 1;
}

.shopcart .content .content-left .logo-wrapper {
    display: inline-block;
    vertical-align: top;
    position: relative;
    top: -10px;
    margin: 0 12px;
    padding: 6px;
    width: 56px;
    height: 56px;
    box-sizing: border-box;
    border-radius: 50%;
    background-color: #141d27;
}

.shopcart .content .content-left .logo-wrapper .logo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #2b343c;
    text-align: center;
}
.shopcart .content .content-left .logo-wrapper .logo.highlight{
	background-color: rgb(0,160,220);
}

.shopcart .content .content-left .logo-wrapper .logo .icon-shopping_cart {
    line-height: 44px;
    font-size: 24px;
    color: #80858a;
}
.shopcart .content .content-left .logo-wrapper .logo .icon-shopping_cart.highlight{
	color:#fff;
}

.shopcart .content .content-left .logo-wrapper .num {
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 16px;
    line-height: 16px;
    text-align: center;
    border-radius: 16px;
    font-size: 9px;
    font-weight: 700;
    color: #fff;
    background-color: rgb(240, 20, 20);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .4);
}

.shopcart .content .content-left .price {
    display: inline-block;
    vertical-align: top;
    margin-top: 12px;
    line-height: 24px;
    box-sizing: border-box;
    padding-right: 12px;
    border-right: 1px solid rgba(255, 255, 255, .1);
    font-size: 16px;
    font-weight: 700;
    color: rgba(255, 255, 255, .4);
}
.shopcart .content .content-left .price.highlight{
	color:#fff;
}

.shopcart .content .content-left .desc {
    display: inline-block;
    vertical-align: top;
    margin: 12px 0 0 12px;
    line-height: 24px;
    font-size: 10px;
    color: rgba(255, 255, 255, .4);
}

.shopcart .content .content-right {
    flex: 0 0 105px;
    width: 105px;
}

.shopcart .content .content-right .pay {
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 12px;
    color: rgba(255, 255, 255, .4);
    font-weight: 700;
    background-color: #2b333b;
}
</style>
