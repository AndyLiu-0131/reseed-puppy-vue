<template>
  <div class="side-bar-item">
    <router-link v-if="isNode(item)" :to="item.path">
      <el-menu-item :index="item.path">
        <Item :name="item.name" :icon="item.meta.icon"></Item>
      </el-menu-item>
    </router-link>
    <el-sub-menu v-else :index="item.path" popper-class="side-menu-pop">
      <template #title>
        <Item :name="item.name" :icon="item.meta.icon"></Item>
      </template>
      <SideBarItem v-for="child in item.children" :key="child.path" :item="child" :base-path="resolve(child.path)">
      </SideBarItem>
    </el-sub-menu>
  </div>
</template>

<script setup>
import Item from './Item.vue'
import * as util from '@/utils'
defineOptions({
  name: 'SideBarItem',
})
const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  basePath: {
    type: String,
    default: '',
  },
})
const resolve = (route) => {
  return util.resolve(props.basePath, route)
}
// 判断当前项是否为最底层节点
const isNode = (item) => {
  if (!item.children || !item.children.length) return true
  return false
}
</script>

<style lang="scss" scoped></style>