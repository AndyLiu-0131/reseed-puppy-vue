<template>
  <div class="rp-search" :style="{ height: isToggle ? realHeight + 'px' : '56px' }">
    <div ref="formArea" class="form">
      <el-form :model="formModel" :inline="true">
        <el-form-item v-for="item in elements" :key="item.key" :label="item.label + ':'" :prop="item.key">
          <component v-model="formModel[item.key]" :is="`el-${item.type}`" :placeholder="item.label" size="small"
            :type="item.mode" :format="item.format" :value-format="item.format" :style="{ width: item.width + 'px' }"
            filterable clearable range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            <template v-if="item.type === 'select'">
              <el-option key="all" value="" label="--全部--"></el-option>
              <el-option v-for="opt in item.options" :key="opt.value" :value="opt.value" :label="opt.label"></el-option>
            </template>
          </component>
        </el-form-item>
      </el-form>
    </div>
    <div class="control">
      <div class="btn-box" :style="{ width: showHide ? 'auto' : '154px' }">
        <el-button size="small" icon="Search" type="primary" @click="search">搜索</el-button>
        <el-button size="small" icon="Refresh" @click="reset">重置</el-button>
        <!-- round -->
        <el-button size="small" v-if="showHide" :icon="isToggle ? 'CaretTop' : 'CaretBottom'" round
          @click="toggleShowHide">
          {{ isToggle ? '收起' : '展开' }}
        </el-button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'

const formArea = ref()
const showHide = ref(false)
const isToggle = ref(false)
const realHeight = ref(0)
const formModel = ref({})
const emit = defineEmits(['submit'])
const props = defineProps({
  elements: {
    type: Array,
    default: () => []
  }
})
watch(
  props.elements,
  (newVal) => {
    if (newVal) {
      newVal.forEach((item) => {
        if (item.value) {
          formModel.value[item.key] = item.value
        } else {
          formModel.value[item.key] = undefined
        }
      })
    }
  },
  {
    immediate: true,
    deep: true,
  },
)
const toggleShowHide = () => {
  isToggle.value = !isToggle.value
}
const search = () => {
  emit('submit', formModel.value)
}
const reset = () => {
  props.elements.forEach((item) => {
    if (item.value) {
      formModel.value[item.key] = item.value
    } else {
      formModel.value[item.key] = undefined
    }
  })
  emit('submit', formModel.value, 'reset')
}
const getVal = () => {
  return formModel.value
}
defineExpose({ getVal })
const calcHeight = () => {
  showHide.value = formArea.value.scrollHeight > 40
  realHeight.value = formArea.value.scrollHeight + 16
}
onMounted(() => {
  calcHeight()
  window.addEventListener('resize', calcHeight)
  search()
})
onUnmounted(() => {
  window.removeEventListener('resize', calcHeight)
})
</script>
<style lang="scss" scoped>
.rp-search {
  padding: 8px;
  display: flex;
  justify-content: space-between;
  transition: height 0.3s;
  width: 100%;

  .form {
    overflow: hidden;
  }

  .control {
    flex: 0;
    display: flex;

    .btn-box {
      height: 40px;
      display: flex;
      align-items: center;
    }
  }
}

:deep(.el-form-item) {
  margin: 0;
  margin-right: 8px;
  margin-top: 6px;
}

:deep(.el-date-editor) {
  width: 212px;
}

:deep(.el-select) {
  width: 130px;
}

:deep(.el-input) {
  width: 130px;
}
</style>
