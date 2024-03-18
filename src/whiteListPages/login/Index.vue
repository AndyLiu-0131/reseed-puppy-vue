<template>
  <div class="login-container"></div>
</template>

<script setup>
import { getWallpaper } from '@/api/login'
const _getWallPaper = async () => {
  const { data } = await getWallpaper()
  console.log(data)
}
onMounted(() => {
  _getWallPaper()
})
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  width: 100%;
  background: url('@/assets/image/background.jpg');
  background-size: cover;
}
</style>
