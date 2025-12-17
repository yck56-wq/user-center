<template>
  <div id="globalHeader">
    <a-row :wrap="false">
      <a-col flex="200px">
        <div class="title-bar">
          <img class="logo" src="../assets/logo.svg" alt="logo" />
          <div class="title">用户中心</div>
        </div>
      </a-col>
      <a-col flex="auto">
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="doMenuClick"
        />
      </a-col>
      <a-col flex="80px">
        <div class="user-login-staus">
          <div v-if="loginUserStore.loginUser.id">
              <!-- 头像下拉框容器 -->
              <div class="user-dropdown-container">
                <a-dropdown trigger="hover">
                  <!-- 下拉触发区域：头像 + 用户名 -->
                  <template #overlay>
                    <a-menu @click="handleLogout">
                      <a-menu-item key="logout">
                        <template #icon><LoginOutlined /></template>
                        退出登录
                      </a-menu-item>
                    </a-menu>
                  </template>

                  <div class="user-trigger">
                    <a-avatar :src="loginUserStore.loginUser.avatarUrl" size="small" />
                    <span class="username">{{ loginUserStore.loginUser.username }}</span>
                  </div>
                </a-dropdown>
              </div>
          </div>
          <div v-else>
            <a-button type="primary" href="/user/login">登录</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from 'vue'
import { HomeOutlined, CrownOutlined, LoginOutlined } from '@ant-design/icons-vue'
import { type MenuProps } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { useLoginUserStore } from '@/store/useLoginUserStore.ts'
import { userLogout } from '@/api/user.ts'

const loginUserStore = useLoginUserStore()

const router = useRouter()

const doMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleLogout = async (values: any) => {
  const res = await userLogout(values);
  if (res.data.code === 20000) {
    localStorage.removeItem('token');
    loginUserStore.loginUser.id = "";
    router.push('/user/login');
  }
}

const current = ref<string[]>(['mail'])

router.afterEach((to) => {
  current.value = [to.path]
})

const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/user/login',
    label: '用户登录',
    title: '用户登录',
  },
  {
    key: '/user/register',
    label: '用户注册',
    title: '用户注册',
  },
  {
    key: '/admin/userManage',
    icon: () => h(CrownOutlined),
    label: '用户管理',
    title: '用户管理',
  },
  {
    key: 'others',
    label: h('a', { href: 'https://github.com/yck56-wq', target: '_blank' }, 'Github主页'),
    title: 'Github主页',
  },
])
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}

.logo {
  height: 50px;
}

.user-dropdown-container {
  cursor: pointer; /* 鼠标悬浮显示手型 */
}

.user-trigger {
  display: flex;
  align-items: center;
  gap: 8px; /* 头像和用户名的间距 */
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.user-trigger:hover {
  background-color: #f5f5f5; /* 悬浮时的背景色 */
}

.username {
  font-size: 14px;
  color: #333;
}
</style>
