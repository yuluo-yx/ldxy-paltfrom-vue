<template>
  <div class="tabbar" v-show="showTab">
    <div class="TabbarItem" v-for="(v,index) in TabbarData" :key="index" @click="TabLink(v)">
      <div class="icon"><img v-if="onactive == v.id" :src="v.activeicon">
      <img v-else :src="v.icon" alt=""></div>
      <p :class="{active: onactive == v.id}">{{v.name}}</p>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import home1 from "../../assets/tabbar/home1.png"
import book1 from "../../assets/tabbar/book1.png"
import home2 from "../../assets/tabbar/home2.png"
import book2 from "../../assets/tabbar/book2.png"
import face1 from "../../assets/tabbar/face1.png"
import face2 from "../../assets/tabbar/face2.png"
import vip1 from "../../assets/tabbar/vip1.png"
import vip2 from "../../assets/tabbar/vip2.png"

const TabbarData = [
  {id:1,title:"首页",name:"首页",path:"/home",component:"/Home/IndexPage.vue",icon:home1,activeicon:home2},
  {id:2,title:"书城",name:"书城",path:"/bookstore",component:"/Books/IndexPage.vue",icon:book1,activeicon:book2}, 
  {id:3,title:"VIP",name:"VIP",path:"/vipstu",component:"/Vipstu/IndexPage.vue",icon:vip1,activeicon:vip2},
  {id:4,title:"我的",name:"我的",path:"/mine",component:"/Mine/IndexPage.vue",icon:face1,activeicon:face2},
]

const router = useRouter()
const onactive = ref(1)
const TabLink = (v) => {
  onactive.value = v.id
  localStorage.setItem("tabbarId",v.id)
  router.push(v.path)
}
onactive.value = localStorage.getItem("tabbarId")

const showTab = ref(true)
watch(() =>router.currentRoute.value.path,(newValue,oldValue)=> {
  if(newValue=="/login"){
    showTab.value = false
  }else{
    showTab.value = true
  }
},{ immediate: true })
</script>
<style lang="less" scoped>
  .tabbar{
    display: flex;
    width: 100%;
    height: 55px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    color: rgb(163, 163, 163);
    border-top: 1px solid rgb(163, 163, 163);
    .TabbarItem{
      flex: 1;
      text-align: center;
      .active{
        color: rgb(68, 68, 240);
      }
      .icon{
        margin-top: 5px;
      }
      p{
        margin-top: -5px;
        font-size: 14px;
      }
      img{
        width: 30px;
        height: 30px;
      }
    }
  }
</style>