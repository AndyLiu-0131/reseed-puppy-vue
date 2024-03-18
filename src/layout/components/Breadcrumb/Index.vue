<template>
  <div class="breadcrumb-container">
    <el-breadcrumb separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="item in breadcrumbList" :key="item">{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
const route = useRoute()
const breadcrumbList = route.meta.breadcrumb
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  height: 40px;
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: var(--el-bg-color);
  border-top: 1px solid var(--el-border-color);
  border-left: 1px solid var(--el-border-color);
}
</style>