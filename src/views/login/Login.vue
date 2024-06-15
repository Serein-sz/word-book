<script setup lang="ts">
import { login } from '@/api/auth';
import type { UserDto } from '@/types/user';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';


interface FormState {
  username: string;
  password: string;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
});

const router = useRouter()

const onFinish = async (userDto: UserDto) => {
  await login(userDto)
  router.push('/home/split-word')
};

const onFinishFailed = (errorInfo: any) => {
  console.log(errorInfo);
  console.log('Failed:', errorInfo);
};


</script>
<template>
  <div class="w-screen h-screen flex justify-start items-center flex-col">
    <div class="text-9xl m-10 px-10 p-3 flex justify-center">
      <div class="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 font-bold">
        Word Book
        <span
          class="absolute top-0 left-0 w-full h-full text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
          Word Book
        </span>
      </div>
    </div>
    <a-form class="border mt-16 border-gray-100/50 p-10 rounded-lg " :model="formState" name="login" autocomplete=" off"
      @finish="onFinish" @finishFailed="onFinishFailed">
      <a-form-item name="username" :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="formState.username" placeholder="username" />
      </a-form-item>
      <a-form-item name="password" :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" placeholder="password"/>
      </a-form-item>
      <a-form-item class="flex justify-center">
        <a-button html-type="submit" class="w-full" >Login</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<style scoped></style>
