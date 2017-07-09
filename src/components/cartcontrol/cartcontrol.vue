<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart($event)">
                <span class="icon-remove_circle_outline inner"></span>
            </div>
        </transition>
        <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
        <div class="cart-add icon-add_circle" @click.stop.prevnet="addCart($event)"></div>
    </div>
</template>
<script type="text/javascript">
export default {
    props: {
        food: {
            type: Object
        }
    },
    created() {

    },
    methods: {
        addCart(event) {
            if (!event._constructed) {
                return;
            };
            if (!this.food.count) {
                this.$set(this.food, "count", 1);
            } else {
                this.food.count++;
            };
        },
        decreaseCart(event) {
            if (!event._constructed) {
                return;
            };
            if (this.food.count) {
                this.food.count--;
            };
        }
    }
};
</script>
<style rel="stylesheet" scoped>
.move-enter-active,
.move-leave-to {
    transition: all .4s linear;
}

.move-enter,
.move-leave {
    opacity: 0;
}

.move-enter,
.move-leave-to {
    transform: translateX(100%) rotate(180deg);
}

.cartcontrol {
    font-size: 0;
}

.cartcontrol .cart-decrease {
    display: inline-block;
    padding: 6px;
}

.cartcontrol .cart-decrease .inner {
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
}

.cartcontrol .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
}

.cartcontrol .cart-add {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
}
</style>
