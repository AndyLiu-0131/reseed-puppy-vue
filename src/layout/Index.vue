<template>
  <el-container class="app-wrap">
    <div v-if="device === 'mobile' && sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <el-aside :width="isCollapse ? '56px' : '200px'" class="layout-sidebar"
      :class="{ 'mobile': device === 'mobile', 'open': sidebar.opened }">
      <sidebar v-if="!sidebar.hide" class="sidebar-container" />
    </el-aside>
    <el-container>
      <el-header class="layout-headbar">
        <Headbar />
      </el-header>
      <el-main class="layout-main">
        <Breadcrumb />
        <div class="content">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { useWindowSize, useTitle } from '@vueuse/core'
import useAppStore from '@/store/modules/app'
import Sidebar from './components/Sidebar/Index.vue'
import Headbar from './components/Headbar/Index.vue'
import Breadcrumb from './components/Breadcrumb/Index.vue'
const appStore = useAppStore()
const isCollapse = computed(() => !appStore.sidebar.opened);
const device = computed(() => useAppStore().device);
const sidebar = computed(() => useAppStore().sidebar);

const title = import.meta.env.VITE_APP_TITLE
useTitle(title)

const { width, height } = useWindowSize();
const WIDTH = 992; // refer to Bootstrap's responsive design
watchEffect(() => {
  if (sidebar.value.opened && device.value === 'mobile') {
    return
  }
  if (device.value === 'mobile' && sidebar.value.opened) {
    useAppStore().closeSideBar({ withoutAnimation: false })
  }
  if (width.value - 1 < WIDTH) {
    useAppStore().toggleDevice('mobile')
    useAppStore().closeSideBar({ withoutAnimation: true })
  } else {
    useAppStore().toggleDevice('desktop')
  }
})

const handleClickOutside = () => {
  useAppStore().closeSideBar({ withoutAnimation: false })
}
</script>

<style lang="scss" scoped>
.app-wrap {
  height: 100vh;
  width: 100vw;
}

.layout-sidebar {
  transition: all .25s;
}

.layout-sidebar.mobile {
  position: fixed;
  z-index: 1001;
  transform: translate(-200px);
  transition: all .25s;
  height: 100%;
}

.layout-sidebar.mobile.open {
  transform: translate(0);
}

.layout-main {
  background-color: var(--el-bg-color-page);

  .content {
    height: calc(100% - 40px);
    box-shadow: inset 0 0 4px rgba(0, 0, 0, .2);
    padding: 10px;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}
</style>