<template>
    <div class="goods">
    	<div class="menu-wrapper"></div>
    	<div class="foods-wrapper"></div>
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
        creaded() {
            this.axios.get("/api/goods").then((res) => {
                if (res.data.errno == ERR_OK) {
                    this.goods = res.data.data;
                }
            })
        }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
    .goods
    	display:flex
	    position:absolute
	    top:174px
	    bottom:46px
	    width:100%
	    overflow:hidden
	    .menu-wrapper
	    	flex:0 0 80px
	    	width:80px
	    	background-color:#f3f5f7
	    .foods-wrapper
	    	flex:1
</style>