<template>
  <div>
    <v-sheet width="490" class="mx-auto">
      <v-form ref="form">
        <v-row>
          <v-col cols="2">
            <v-list-subheader>用户名:</v-list-subheader>
          </v-col>

          <v-col cols="10">
            <v-text-field
              variant="outlined"
              v-model="state.username"
              :counter="10"
              :rules="rules.nameRules"
              label="用户名"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-list-subheader>密码:</v-list-subheader>
          </v-col>

          <v-col cols="10">
            <v-text-field
              type="password"
              variant="outlined"
              v-model="state.password"
              :rules="rules.passwordRules"
              label="密码"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-sheet>

    <div class="d-flex flex-column y-button">
      <v-btn type="submit" rounded="lg" block color="info" @click="validate()"
        >登录</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from "vue";
const form = ref(null);
const refForm = ref(form);
interface FormValue {
  username?: string;
  password?: string;
}
//账号数据
const state = reactive<FormValue>({});
//校验规则
const rules = {
  nameRules: [
    (v) => !!v || "姓名是必填项",
    (v) => (v && v.length <= 10) || "请您输入十个字符内",
  ],
  passwordRules: [(v) => !!v || "密码是必填项"],
};
//表单校验
const validate = () => {
  refForm.value.validate().then((res) => {
    if (res.valid) {
      console.log(state.username);
    }
  });
};
</script>

<style lang="css" scoped>
.y-button {
  width: 270px;
  height: 46px;
  margin: 0 auto;
}
</style>