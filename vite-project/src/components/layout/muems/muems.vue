<template>
  <v-list density="compact">
    <v-list-item height="56" rounded="xl" v-for="(item, i) in items" 
    :key="i"
    class="y-list-item"
     :value="item"
     :to="item.to"
     active-color="primary">
      <div class="y-count">
        <!-- :to="item.to" -->
        <v-icon  class="y-icon">{{item.icon}}</v-icon>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </div>

    </v-list-item>
  </v-list>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

const props = defineProps({
  items: {
    type: Object,
    required: true
  },
  activeClass: {
    type: String,
    default: 'primary'
  }
})
const drawer = ref(false)
const selectedItem = ref(0);

</script>

<style lang="scss" scoped>
.y-count {
  display: flex;
}
.y-icon{
  margin-right: 20px;
}
.v-list{
  padding: 10px !important;
}
.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line{
  margin-top: 6px;
}
.v-list-item--active {
  background: rgb(12, 185, 197);
  color: #fff !important;
}
.v-list-item-title{
  font-size: 18px;

}
</style>
