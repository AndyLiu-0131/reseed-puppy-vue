<!--
 * @Author: LiuTianding 1152175785@qq.com
 * @Date: 2023-10-27 10:50:20
 * @LastEditors: LiuTianding 1152175785@qq.com
 * @LastEditTime: 2023-12-28 15:31:35
 * @FilePath: /project/src/layout/sideBar/components/Item.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
-->
<template>
  <el-tooltip :disabled="disabled" :content="name" placement="top" effect="light" :show-after="600">
    <div class="item">
      <div v-if="icon" class="icon">
        <Icon :icon="icon" />
      </div>
      <div class="text">
        <div ref="text" @mouseenter="handleMouse($event)">{{ name }}</div>
      </div>
    </div>
  </el-tooltip>
</template>

<script setup>
import { ref } from 'vue'
import { getAssetsFile } from '@/utils'
defineOptions({
  name: 'Item',
})
defineProps({
  icon: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
})
const disabled = ref(true)
const handleMouse = (e) => {
  disabled.value = isBeyond(e)
}
const isBeyond = (e) => {
  const ev = window.event || e
  const textRange = (el) => {
    const textContent = el
    const targetW = textContent.getBoundingClientRect().width
    const range = document.createRange()
    range.setStart(textContent, 0)
    range.setEnd(textContent, textContent.childNodes.length)
    const rangeWidth = range.getBoundingClientRect().width
    return rangeWidth > targetW
  }
  return !textRange(ev.target)
}
const getIconType = (icon) => {
  if (/^icon-/.test(icon)) {
    return 'iconfont'
  } else if (/\.(png|jpg|jpeg|gif)$/.test(icon)) {
    return 'image'
  } else {
    return 'withoutIcon'
  }
}
const getIcon = (icon) => {
  return getAssetsFile('/image/menuIcon/' + icon)
}
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;

  // overflow: hidden;
  .icon {
    height: 100%;
    // margin: 0 4px;
    width: 24px !important;
    font-size: 16px;
    flex: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    height: 100%;
    display: flex;
    align-items: center;
    line-height: 1;
    width: calc(100% - 32px);
    margin-left: 4px;

    div {
      display: inline-block;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}

i.iconfont {
  font-size: 18px;
}

i.image {
  display: block;
  height: 20px;
  width: 20px;

  img {
    height: 100%;
    width: 100%;
  }
}
</style>
