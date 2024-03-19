<template>
  <div class="rp-table">
    <div class="rp-table-area" :style="{
      height: hidePagination ? '100%' : 'calc(100% - 32px)',
    }">
      <el-table ref="elTable" v-bind="$attrs" :data="data" border style="width: 100%; height: 100%" size="small"
        @selectionChange="selectionChange">
        <el-table-column v-if="props.selection" type="selection" width="40" />
        <el-table-column v-if="props.index" type="index" width="44" label="序号" align="center" />
        <template v-for="item in tableEl" :key="item.dataIndex">
          <el-table-column v-if="item.type === 'otherTag'" :align="item.align ? item.align : 'left'" :label="item.title"
            :width="item.width" :fixed="item.fixed">
            <template v-slot="props">
              <slot :row="props.row" :index="props.$index" :name="item.dataIndex" />
            </template>
          </el-table-column>
          <el-table-column v-else :prop="item.dataIndex" :label="item.title" :width="item.width" :fixed="item.fixed" />
        </template>
      </el-table>
    </div>
    <div v-if="!hidePagination" class="rp-table-pagination">
      <el-pagination v-model:current-page="pagination.current" v-model:page-size="pagination.pageSize" background
        :page-sizes="[10, 50, 100, 200]" :small="true" layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const emit = defineEmits(['paginationChange', 'selectionChange'])
const props = defineProps({
  selection: {
    type: [Boolean, String],
    default: false
  },
  index: {
    type: [Boolean, String],
    default: false
  },
  data: {
    type: Array,
    default: () => []
  },
  pagination: {
    type: Object,
    default: () => ({})
  },
  hidePagination: {
    type: Boolean,
    default: false
  },
  tableEl: {
    type: Array,
    default: () => []
  },
})

const handleSizeChange = (val) => {
  emit('paginationChange', { current: 1, pageSize: val })
}
const handleCurrentChange = (val) => {
  emit('paginationChange', {
    current: val,
    pageSize: props.pagination.pageSize,
  })
}
const selectionChange = (val) => {
  emit('selectionChange', val)
}

</script>
<style lang="scss" scoped>
.rp-table {
  padding: 8px;
  height: 100%;
}

.rp-table-control {
  height: 26px;
  margin-bottom: 8px;
}

.rp-table-area {
  height: calc(100% - 32px);
}

.rp-table-pagination {
  height: 24px;
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}
</style>
