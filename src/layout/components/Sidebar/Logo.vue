<template>
  <div class="img">
    <img src="https://doc.thinkadmin.top/static/img/logo.png" alt="">
  </div>
  <div v-if="!props.isCollapse" class="text">
    <div class="title">{{ title }}</div>
    <div class="version">{{ version }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  isCollapse: Boolean
})

const title = import.meta.env.VITE_APP_TITLE
const version = import.meta.env.VITE_APP_VERSION

</script>

<style lang="scss" scoped>
.img {
  height: 48px;
  width: 48px;

  img {
    height: 100%;
    width: 100%;
  }
}

.text {
  display: flex;
  font-weight: bold;
  margin-left: 8px;

  .title {
    font-size: 16px;
    flex-shrink: 0;
    color: var(--el-color-primary);
  }

  .version {
    margin-left: 4px;
    font-size: 9px;
    color: var(--el-color-primary);
  }
}
</style>