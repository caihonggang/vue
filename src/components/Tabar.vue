<template>
<div>
 
  <mt-tabbar  v-model="selected"> 
  <mt-tab-item id="tab1" @click="js" >
    <img  slot="icon" :src="require(selected=='tab1'?'../assets/img/shouye.png':'../assets/img/shouye1.png')">
    首页
  </mt-tab-item>
  <mt-tab-item id="tab2" >
    <img  slot="icon" :src="require(selected=='tab2'?'../assets/img/fenlei1.png':'../assets/img/fenlei.png')">
    分类
  </mt-tab-item>
  <mt-tab-item id="tab3" >
    <img  slot="icon" :src="require(selected=='tab3'?'../assets/img/gouwuche1.png':'../assets/img/gouwuche.png')">
    购物车
  </mt-tab-item>
  <mt-tab-item id="tab4" >
    <img  slot="icon" :src="require(selected=='tab4'?'../assets/img/wode1.png':'../assets/img/wode.png')">
    我的
  </mt-tab-item>
</mt-tabbar>
  
  </div>
</template>

<script>
export default {
  data(){
    return{
      selected:''
    }
  },
  mounted(){
    this.selected='tab1'
  },
 methods:{
   js(){
     console.log(1111)
   }
  },
  watch:{
    selected(){
      if(this.selected=='tab1'){
        this.$router.push("/Index").catch(err => {console.log(err)})
      }else if(this.selected=="tab2"){
        this.$router.push('/Fl')
      }else if(this.selected=="tab3"){
        this.$router.push('/Gw')
      }else{
        this.$router.push('/Wd')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mint-tabbar > .mint-tab-item.is-selected {
    background-color: #eaeaea;
    color: green;
}

</style>
