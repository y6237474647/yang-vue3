<template>
  <v-card class="mx-auto" width="256" tile>
    <v-navigation-drawer permanent>
      <v-list class="y-list-img">
        <v-card class="y-card" rounded="100" height="140" density="compact" hover @click.stop>
          <div class="y-img">
            <div>
              <v-avatar color="brown" size="52">
                <v-img
                  alt="Avatar"
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                />
              </v-avatar>
            </div>
            <div class="y-card-count">
              <v-card-text class="y-card-text"> 大佬杨demo </v-card-text>
              <v-card-text> china </v-card-text>
            </div>
          </div>
        </v-card>
      </v-list>
      <v-divider></v-divider>
      <v-list density="compact" nav>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          active-color="red"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
const selectedItem = ref(0);
const items = reactive([
  { text: "My Files", icon: "mdi-folder" },
  { text: "Shared with me", icon: "mdi-account-multiple" },
  { text: "Starred", icon: "mdi-star" },
  { text: "Recent", icon: "mdi-history" },
  { text: "Offline", icon: "mdi-check-circle" },
  { text: "Uploads", icon: "mdi-upload" },
  { text: "Backups", icon: "mdi-cloud-upload" },
]);
</script>

<style lang="scss" scoped>
.y-list-img{
  background-image: url(	https://materialpro-vue3-admin.vercel.app/assets/user-info.256416e3.jpg) !important;
}
.y-card{
  background-color: transparent !important;
  line-height: 140px;
}
.y-img {
  display: flex;
  margin-left: 24px;
  align-items: center;
  
  .y-card-count {
    margin-left: 10px;
    .y-card-text {
      font-weight: 800 !important;
    }
  }
}
.v-card-text {
  color: #fff;
  padding: 6px 0 0 0 !important;
}
</style>
