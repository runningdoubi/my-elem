<template>
    <div id="app">
        <v-header :seller="seller"></v-header>
        <div class="tab">
            <div class="tab-item">
                <router-link to="/goods">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/ratings">评论</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/seller">商家</router-link>
            </div>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Header from './components/header/header.vue'

const ERR_OK = 0;
export default {
    data() {
        return {
            seller: {}
        };
    },
    created() {
       this.axios.get('/api/seller').then((response) => {
                if(response.data.erron == ERR_OK){
                  this.seller = response.data.data;
                }
        });
       this.$router.push('/goods');
    },
    mounted(){
      
    },
    components: {
        'v-header': Header
    }

}
</script>
<style type="text/css">
body,html{
  line-height: 1;
  font-weight: 200;
  font-family: 'PingFang SC','STHeitiSC-Light','Helvetica-Light',arial,sans-serif;
}
#app .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7, 17, 17, .1);
}

#app .tab .tab-item {
    flex: 1;
    text-align: center;
}

#app .tab .tab-item>a {
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93);
}

#app .tab .tab-item>a.active {
    color: rgb(240, 20, 20);
}
</style>
