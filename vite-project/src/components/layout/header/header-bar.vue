<template>
  <div>
    <v-app-bar
      color="#f6f6f6"
      height="58"
      title="鼠鼠最可爱了"
      :elevation="0"
      rounded
    >
      <v-btn icon="mdi-bomb"></v-btn>
      <v-btn color="red" icon="mdi-tooltip-text-outline"></v-btn>
      <v-btn icon="mdi-github"></v-btn>
      <v-btn icon="mdi-cog-outline"></v-btn>
      <v-btn @click.stop="clickUser" icon x-large>
        <v-avatar color="brown" size="42">
          <v-img alt="Avatar" src="https://cdn.vuetifyjs.com/images/john.jpg" />
        </v-avatar>
      </v-btn>
    </v-app-bar>

    <v-card
      v-if="userStatus"
      title="大佬杨信息卡"
      class="y-card"
      rounded="100"
      width="300"
      hover
      @click.stop
    >
      <div class="y-img">
        <div>
          <v-avatar color="brown" size="82">
            <v-img
              alt="Avatar"
              src="https://cdn.vuetifyjs.com/images/john.jpg"
            />
          </v-avatar>
        </div>
        <div class="y-card-count">
          <v-card-text class="y-card-text"> 大佬杨 </v-card-text>
          <v-card-text> china </v-card-text>
          <v-card-text> 1737024488@qq.com </v-card-text>
        </div>
      </div>
      <v-divider class="my-3"></v-divider>
      <div class="card-button">
        <v-btn color="rgb(12,185,197)" width="200" rounded> 退出登录 </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts" setup>
import { ref,onMounted } from "vue";
const userStatus = ref(false); //卡片状态
//控制任务信息卡显示
const clickUser = () => {
  userStatus.value = !userStatus.value;
};
//关闭
const clickClose = () => {
  userStatus.value = false;
};
//点击其余地方关闭方法
onMounted(() =>{
  window.addEventListener('click',clickClose)
}) 


</script>

<style lang="scss" scoped>
.y-card {
  position: absolute;
  right: 1px;
  top: 60px;
}
.card-button {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  button {
    color: #fff !important;
  }
}
.y-img {
  display: flex;
  margin-left: 24px;
  .y-card-count {
    margin-left: 10px;
    .y-card-text {
      font-weight: 800 !important;
    }
  }
}
.v-card-text {
  padding: 6px 0 0 0 !important;
}
</style>
