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
    background-image: url('https://www.kdhlw.com/d/file/202206/25mwufxmey0qrmwufxmey0qr.jpg');
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f3f6fc;
}
.y-box{
    width: 800px;
    height: 500px;
    background-color: white;
    border-radius: 80px;
    box-shadow: 0 4px 8px 3px rgb(0 0 0 / 15%), 0 1px 3px rgb(0 0 0 / 30%);

}
.y-title{
    position: relative;
    top: 40px;
    font-size: 48px;
    background: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
    color: transparent;
    -webkit-background-clip: text;
    text-align: center;
}
.y-count{
    position: relative;
    top: 100px;
    display: flex;
    justify-content: center;
}
    
</style>