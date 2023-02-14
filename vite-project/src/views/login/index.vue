<template>
    <div class="y-body">
      <div class="y-box">
        <div class="y-title bg-gradient-to-r from-slate-500 to-slate-800">大佬杨后台</div>
        <div class="y-count">
         <Login/>

        </div>
      </div>
    </div>
</template>

<script lang='ts' setup>
import Login from './loginInput/login.vue'
import { ref } from 'vue'
        
</script>
 
<style lang = "css" scoped>
.y-body{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.y-box{
    width: 40%;
    height: 500px;
    background-color: #f7f5f1;
    border-radius: 80px;

}
.y-title{
    position: relative;
    top: 40px;
    font-size: 40px;
    background: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
    color: transparent;
    -webkit-background-clip: text;
    text-align: center;
}
.y-count{
    position: relative;
    top: 100px;
}
    
</style>