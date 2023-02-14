<template>
     <IxInput  v-model:value="username" prefix="user"></IxInput>
    <!-- <IxForm class="demo-form" >
        <IxFormItem message="Please input your username!">
            <IxInput   v-model:value="formValue.valid" prefix="user"></IxInput>
        </IxFormItem>
        <IxFormItem message="Please input your password, its length is 6-18!">
            <IxInput  v-model:value="formValue.validating" prefix="lock">
            </IxInput>
        </IxFormItem>
        <IxFormItem>
            <IxButton mode="primary" block type="submit" @click="login">登录</IxButton>
        </IxFormItem>
    </IxForm> -->
    <IxButton mode="primary" block type="submit" @click="login">登录</IxButton>
</template>

<script lang='ts' setup>
import { AbstractControl, Validators, useFormGroup } from '@idux/cdk/forms'

import { reactive, ref, toRefs,watch } from 'vue'
interface FormValue {
  valid?: string
  validating?: string
  invalid?: string
  dynamic?: string
}
let username = ref('')
const formValue = reactive<FormValue>({})
watch(formValue, value => console.log('formValue', value), { deep: true })

const login = () => {
    console.log(username.value);

}



</script>
 
<style lang = "less" scoped>

</style>