<template>
  <div class="sidebar-container">
    <!-- 折叠后56px -->
    <div class="logo-area">
      <Logo :isCollapse="isCollapse" />
    </div>
    <div class="menu-area">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu :unique-opened="true" :default-active="activeRoute" :collapse="isCollapse"
          :collapse-transition="false">
          <SidebarItem v-for="route in menuList" :key="route.path" :item="route" :base-path="route.path"></SidebarItem>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script setup>
import useAppStore from '@/store/modules/app'
import Logo from './Logo.vue'
import SidebarItem from './SidebarItem.vue'
import list from '@/utils/menuList.js'
const menuList = ref(list)
const appStore = useAppStore()
const isCollapse = computed(() => !appStore.sidebar.opened);
const route = useRoute()
const router = useRouter()
const activeRoute = ref(route.path)
watch(
  () => router.currentRoute.value.path,
  (val) => {
    activeRoute.value = val
  },
)
</script>

<style lang="scss" scoped>
.sidebar-container {
  height: 100%;
  width: 100%;
  background-color: var(--el-bg-color);

  .logo-area {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu-area {
    height: calc(100% - 60px);
    width: calc(100% - 3px);
    // box-shadow: -1px 1px 2px rgba(0, 0, 0, .2);
  }
}
</style>