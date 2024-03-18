<template>
  <div class="headbar-container">
    <div class="hamburger">
      <el-button text @click="toggleSideBar">
        <el-icon v-if="!isCollapse" size="20px">
          <Fold />
        </el-icon>
        <el-icon v-else size="20px">
          <Expand />
        </el-icon>
      </el-button>
    </div>
    <div class="fresh">
      <el-button text @click="fresh">
        <el-icon size="20px">
          <Refresh />
        </el-icon>
      </el-button>
    </div>
    <div class="screen">
      <el-button text @click="handleScreen">
        <el-icon v-if="!isFullscreen" size="20px">
          <FullScreen />
        </el-icon>
        <el-icon v-else size="20px">
          <CircleClose />
        </el-icon>
      </el-button>
    </div>
    <div class="flex" style="flex:1"></div>
    <div class="toggle-mode">
      <el-switch v-model="value2" inline-prompt active-icon="Sunny" inactive-icon="Moon" @change="toggleDark()" />
    </div>
    <div class="user-control">
      <el-dropdown>
        <div class="username">
          <div class="text">
            超级管理员
          </div>
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon>
                <Link />
              </el-icon> 配置Key
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon>
                <Lock />
              </el-icon> 密码修改
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon>
                <BrushFilled />
              </el-icon> 清理缓存
            </el-dropdown-item>
            <el-dropdown-item>
              <el-icon>
                <SwitchButton />
              </el-icon> 退出登陆
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import useAppStore from '@/store/modules/app'
import { isDark, toggleDark, isFullscreen, enter, exit } from '@/composables'

const appStore = useAppStore()
const isCollapse = computed(() => !appStore.sidebar.opened);
const toggleSideBar = () => {
  appStore.toggleSideBar()
}
const value2 = ref(false)
const fresh = () => {
  location.reload()
}
const handleScreen = () => {
  if (isFullscreen.value) {
    exit()
  } else {
    enter()
  }
}
</script>

<style lang="scss" scoped>
.headbar-container {
  height: 100%;
  display: flex;
  // box-shadow: 1px -1px 2px rgba(0, 0, 0, .2);

  .el-button.is-text {
    padding: 8px;
  }
}

.hamburger,
.fresh,
.screen {
  height: 100%;
  display: flex;
  align-items: center;
}

.toggle-mode {
  display: flex;
  align-items: center;
  padding: 8px;
}

.user-control {
  display: flex;
  align-items: center;
  padding: 8px;

  .username {
    cursor: pointer;
    height: 32px;
    display: flex;
    align-items: center;
    background-color: var(--el-color-primary);
    color: var(--el-color-white);
    border-radius: 16px;
    padding: 8px 16px;
  }
}
</style>