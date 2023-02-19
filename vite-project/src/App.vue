<template>
  <div>1232221</div>
  <v-layout>
    
    <Muems />

    <Hdeader />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
import Hdeader from "./views/layout/header-bar.vue";
import Muems from "./views/layout/muems.vue";
import { ref } from "vue";
</script>

<style lang="less" scoped></style>
