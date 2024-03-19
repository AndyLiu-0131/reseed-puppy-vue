<template>
  <div class="container">
    <div class="info">
      <rp-search :elements="elements" @submit="submit"></rp-search>
    </div>
    <div class="main">
      <rp-table :data="tableData" :tableEl="tableEl" :pagination="pagination" :selection="true"
        @paginationChange="paginationChange" @selectionChange="selectionChange">
        <template #sites="scope">
          <span>{{ scope.row.sites.map(i => i.name).join('、') }}</span>
        </template>
        <template #state="scope">
          <el-switch v-model="scope.row.state" inline-prompt active-icon="Check" inactive-icon="Close" />
        </template>
        <template #action="scope">
          <el-dropdown v-if="device === 'mobile'" trigger="click">
            <el-button type="primary" text icon="Setting" />
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <el-button size="small" type="success" icon="VideoPlay">立即执行一次</el-button>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-button size="small" type="primary" icon="Edit">编辑</el-button>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-button size="small" type="danger" icon="Delete">删除</el-button>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-button size="small" type="warning" icon="Memo">日志</el-button>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <template v-else>
            <el-button size="small" type="success" icon="VideoPlay">立即执行一次</el-button>
            <el-button size="small" type="primary" icon="Edit">编辑</el-button>
            <el-button size="small" type="danger" icon="Delete">删除</el-button>
            <el-button size="small" type="warning" icon="Memo">日志</el-button>
          </template>
        </template>
      </rp-table>
    </div>
  </div>
</template>

<script setup>
import useAppStore from '@/store/modules/app'
const device = computed(() => useAppStore().device);
const mode = ref('table')
const tableData = ref([
  {
    taskName: '辅种',
    taskType: '循环任务',
    order: 'cron',
    queue: '计划执行：2024年03月19日 19:44:21（每28800秒）',
    time: '11:43:16(耗时64.9984秒) 已执行34次',
    result: '最新错误信息->站点访问超过4秒'
  }
])
const tableEl = ref([
  {
    title: '任务名称',
    dataIndex: 'taskName',
    fixed: 'left'
  },
  {
    title: '任务类型',
    dataIndex: 'taskType'
  },
  {
    title: '执行指令',
    dataIndex: 'order'
  },
  {
    title: '计划执行',
    dataIndex: 'queue'
  },
  {
    title: '执行时间',
    dataIndex: 'time'
  },
  {
    title: '执行结果',
    dataIndex: 'result'
  },
  {
    title: '操作',
    dataIndex: 'action',
    type: 'otherTag',
    width: device.value === 'mobile' ? 60 : 400,
    align: 'center',
    fixed: 'right'
  },
])

const pagination = ref({
  current: 1,
  pageSize: 10,
  total: 0
})

const elements = ref([
  {
    type: 'input',
    label: '编号名称',
    key: 'name',
    value: ''
  },
  {
    type: 'input',
    label: '任务指令',
    key: 'order',
    value: ''
  },
  {
    type: 'select',
    label: '任务状态',
    key: 'state',
    value: '',
    options: [
      {
        label: '等待处理',
        value: '0'
      },
      {
        label: '正在处理',
        value: '1'
      },
      {
        label: '处理完成',
        value: '2'
      },
      {
        label: '处理失败',
        value: '3'
      },
    ]
  },
  {
    type: 'datePicker',
    mode: 'daterange',
    label: '计划时间',
    key: 'time',
    value: ''
  }
])

const paginationChange = (val) => {

}
const selectionChange = val => {
  console.log(val)
}

watch(() => device.value, (val) => {
  const action = tableEl.value.find(i => i.dataIndex === 'action')
  action.width = val === 'mobile' ? 60 : 400
})

const submit = (val) => {
  console.log(val)
}

</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  background-color: var(--el-bg-color);
  padding: 10px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
}

.info {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
  border-bottom: 1px dashed var(--el-border-color);
}

.main {
  flex: 1;
}

.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}
</style>