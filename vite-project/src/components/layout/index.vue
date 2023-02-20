<template>
    <v-layout>

        <Muems />

        <Header />

        <v-main>
            <router-view></router-view>
        </v-main>
    </v-layout>
</template>

<script lang='ts' setup>
import Header from './header/header-bar.vue'
import Muems from './muems/muems.vue'
import { ref } from 'vue'

</script>
 
<style lang = "less" scoped></style>