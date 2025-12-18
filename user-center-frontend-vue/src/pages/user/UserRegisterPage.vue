/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <div id="userRegisterPage">
    <h2 class="title">用户注册</h2>
    <a-form
      style="max-width: 480px; margin: 0 auto"
      label-align="left"
      :model="formState"
      name="basic"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
      autocomplete="off"
      @finish="handleSubmit"
    >
      <a-form-item
        label="账号"
        name="userAccount"
        :rules="[{ required: true, message: '请输入账号!' }]"
      >
        <a-input v-model:value="formState.userAccount" placeholder="请输入账号" />
      </a-form-item>

      <a-form-item
        label="密码"
        name="userPassword"
        :rules="[
          { required: true, message: '请输入密码' },
          { min: 8, message: '密码不能小于8位' },
        ]"
      >
        <a-input-password v-model:value="formState.userPassword" placeholder="请输入密码" />
      </a-form-item>

      <a-form-item
        label="确认密码"
        name="checkPassword"
        :rules="[
          { required: true, message: '请再次输入密码' },
          { min: 8, message: '确认密码不能小于8位' },
        ]"
      >
        <a-input-password v-model:value="formState.checkPassword" placeholder="请输入确认密码" />
      </a-form-item>

      <a-form-item
        label="个人编号"
        name="personalCode"
        :rules="[
          { required: true, message: '请输入编号' },
          { max: 5, message: '个人编号不能大于5位' },
        ]"
      >
        <a-input-password v-model:value="formState.personalCode" placeholder="请输入个人编号" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
        <a-button type="primary" html-type="submit">注册</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { userRegister } from '@/api/user.ts'

interface FormState {
  userAccount: string;
  userPassword: string;
  checkPassword: string;
  personalCode: string;
}

const formState = reactive<FormState>({
  userAccount: '',
  userPassword: '',
  checkPassword: '',
  personalCode: '',
})

const router = useRouter()

/**
 * 提交表单
 * @param values
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleSubmit = async (values: any) => {
  //判断两次输入的密码是否一致
  if (formState.userPassword != formState.checkPassword) {
    message.error("两次输入的密码不一致");
    return;
  }
  const res = await userRegister(values)
  if (res.data.code === 20000 && res.data.data) {
    message.success('注册成功')
    await router.push({
      path: '/user/login',
      replace: true,
    })
  }else {
    message.error("注册失败, " + res.data.description);
  }
  console.log('Success:', values)
}
</script>

<style scoped>
#userRegisterPage .title {
  text-align: center;
  margin-bottom: 16px;
}
</style>
