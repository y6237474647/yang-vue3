<template>
    <v-layout>
        <v-card class="mx-auto" width="256" tile>
            <v-navigation-drawer permanent width="280">
                <v-list class="y-list-img">
                    <v-card class="y-card" rounded="100" height="140" density="compact" hover @click.stop>
                        <div class="y-img">
                            <div>
                                <v-avatar color="brown" size="52">
                                    <v-img alt="Avatar" src="https://cdn.vuetifyjs.com/images/john.jpg" />
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
                <Muems :items="obj" />

            </v-navigation-drawer>
        </v-card>

        <Header />

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-layout>
</template>

<script lang='ts' setup>
import Header from './header/header-bar.vue'
import Muems from './muems/muems.vue'
import { ref, reactive } from 'vue'
const obj = reactive([

    {
        text: '首页',
        icon: 'mdi-github',
        activeClass:'v-list-item__content',
        to: '/form',
    
    },
    {
        text: '鼠鼠我啊',
  
        to: '/table',
        icon: 'mdi-account-circle',

    },
    {
        text: '最喜欢放假啦',

        to: '/card',
        icon: 'mdi-account-circle',

    },


])

</script>
 
<style lang = "scss" scoped>
.y-list-img {
    background-image: url(https://materialpro-vue3-admin.vercel.app/assets/user-info.256416e3.jpg) !important;
}


.y-card {
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

.v-list-item--active {
    background: rgb(12, 185, 197);
}
</style>