<template>
    <IxForm class="demo-form" :control="formGroup">
        <IxFormItem labelFor="username" controlCol="16" label="用户" message="请输入用户名">
            <IxInput control="username" v-model:value="formValue.username" ></IxInput>
        </IxFormItem>
        <IxFormItem labelFor="password" controlCol="16" label="密码" message="请输入密码">
            <IxInput control="password" v-model:value="formValue.password" >
            </IxInput>
        </IxFormItem>
        <IxFormItem>
            <IxButton mode="primary" block type="submit" @click="login()">登录</IxButton>
        </IxFormItem>
    </IxForm>

</template>

<script lang='ts' setup>
import { AbstractControl, Validators, useFormGroup } from '@idux/cdk/forms'

import { reactive, ref, toRefs, watch } from 'vue'
interface FormValue {
    username?: string
    password?: string
}
const formValue = reactive<FormValue>({})
//表单校验
const { required } = Validators
const formGroup = useFormGroup({
    username: ['', required],
    password: ['', required]
})
const login = () => {
   
    
    if (formGroup.valid.value) {
        console.log(123);
        
        console.log('register', formGroup.getValue())
    } else {
        console.log(456);
        
        formGroup.markAsDirty()
    }


}



</script>
 
<style lang = "less" scoped>

</style>