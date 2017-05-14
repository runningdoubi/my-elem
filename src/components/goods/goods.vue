<template>
   <div class="goods">
    <div class="menu-wrapper">
        <ul>
            <li v-for="item in goods" class="menu-item">
                <span class="text"><span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}</span>
            </li>
        </ul>
    </div>
    <div class="foods-wrapper">
    	<ul>
    		<li v-for="item in goods" class="food-list">
    			<h1 class="title">{{item.name}}</h1>
    			<ul>
    				<li v-for="food in item.foods" class="food-item">
    					<div class="icon">
    						<img :src="food.icon" alt="">
    					</div>
    					<div class="content">
    						<h2 class="name">{{food.name}}</h2>
    						<p class="desc">{{food.description}}</p>
    						<div class="extra">
    							<span>月售{{food.sellCount}}份</span>
    							<span>好评率{{food.rating}}%</span>
    						</div>
    						<div class="price">
    							<span>￥{{food.price}}</span>
    							<span v-show="food.oldPrice">{{food.oldPrice}}</span>
    						</div>
    					</div>
    				</li>
    			</ul>
    		</li>
    	</ul>
    </div>
</div>

</template>


<script>
const ERR_OK = 0;

export default {
    data() {
            return {
                goods: []
            }
        },
        props: {
            seller: {
                type: Object
            }
        },
        created() {
            this.axios.get("/api/goods").then((res) => {
                if (res.data.erron == ERR_OK) {
                    this.goods = res.data.data;
                }
            });
            this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
        }
}
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
    .goods
    	display:flex
	    position:absolute
	    top:175px
	    bottom:46px
	    width:100%
	    overflow:hidden
	    .menu-wrapper
	    	flex:0 0 80px
	    	width:80px
	    	background-color:#f3f5f7
	    	.menu-item
	    		display:table
	    		height:54px
	    		width:56px
	    		line-height:14px
	    		font-size:14px
	    		padding:0 12px
	    		border-bottom: 1px solid rgba(7, 17, 17, .1);
	    		.icon
	    			display: inline-block;
				    vertical-align: top;
				    width: 12px;
				    height: 12px;
				    margin-right: 2px;
				    background-size: 12px 12px;
				    background-repeat: no-repeat;
				    &.decrease
				    	background-image: url('./img/decrease_3@2x.png');
				    &.discount
				    	background-image: url('./img/discount_3@2x.png');
				    &.guarantee
				    	background-image: url('./img/guarantee_3@2x.png');
				    &.invoice
				    	background-image: url('./img/invoice_3@2x.png');
				    &.special
				    	background-image: url('./img/special_3@2x.png');
				.text
					display:table-cell
					width:56px
					vertical-align:middle
					font-size:12px
	    .foods-wrapper
	    	flex:1
</style>