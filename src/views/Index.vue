<template>
<div>
  <h1>首页</h1>
  {{$store.state.age}}
 <button @click="add">增加</button>
 <button @click="sub">减少</button>
 <div>{{$store.getters.pp}}</div>

 
  </div>
</template>
<script>
export default {
  created(){
     this.axios.get("/home/multidata")
     .then(res=>{
       console.log(res)
     })
  },
  methods:{
    add(){
      this.$store.commit('add')
    },
     sub(){
      this.$store.commit('sub')
    }
  }
}
</script>
