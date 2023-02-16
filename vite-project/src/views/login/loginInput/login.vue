<template>
    <form>
        <v-text-field v-model="state.username" :error-messages="v$.username.$errors.map(e => e.$message)" :counter="10" label="姓名"
            required @input="v$.username.$touch" @blur="v$.username.$touch"></v-text-field>

        <v-text-field v-model="state.password" :error-messages="v$.password.$errors.map(e => e.$message)" label="密码" required
            ></v-text-field>


        <v-btn class="me-4" @click="v$.$validate">
            123
        </v-btn>
        <v-btn @click="login()">
            clear
        </v-btn>
</form>
</template>

<script lang='ts' setup>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import { reactive, ref, toRefs, watch } from 'vue'
interface FormValue {
    username?: string;
    password?: string;
}
const initialState: FormValue = {};

const state = reactive<FormValue>({
    ...initialState,
});

const rules = {
    username: { required, },
    password: { required },
};
const v$ = useVuelidate<FormValue>(rules, state);
// const v$ = useVuelidate(rules, state)
//表单校验


const login = () => {


}



</script>
 
<style lang = "less" scoped></style>