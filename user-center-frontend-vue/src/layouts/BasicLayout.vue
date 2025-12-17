<template>

  <div id="basicLayout">
    <a-layout>
      <a-layout-header class="header">
        <GloabalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view/>
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://github.com/yck56-wq">
          Github by yck56-wq
        </a>
      </a-layout-footer>
    </a-layout>
  </div>

</template>

<script setup lang="ts">
import GloabalHeader from '@/layouts/GloabalHeader.vue'

//测试代码
// import { getCurrentUser } from '@/api/user.ts'
//
// getCurrentUser().then((res) => {
//   console.log(res);
// });

</script>

<style scoped>
#basicLayout .footer{
  background-color: #efefef;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}

#basicLayout .content{
  padding: 20px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #fefefe, #ffffff);
}

#basicLayout .header{
  background: white;
  margin-bottom: 16px;
  color: unset;
  padding-inline: 20px;
}
</style>
