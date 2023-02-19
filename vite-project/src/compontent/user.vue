<template>
    <v-container
    fluid
    style="height: 300px"
  >
    <v-row justify="center">
     
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              color="brown"
              size="42"
            >
              <span class="white--text text-h5">123</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="brown"
              >
                <span class="white--text text-h5">123</span>
              </v-avatar>
              <h3>123</h3>
              <p class="text-caption mt-1">
                123
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Disconnect
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
   
    </v-row>
  </v-container>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
        
</script>
 
<style lang = "less" scoped>
    
</style>