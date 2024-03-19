<template>
  <div class="container">
    <div class="control">
      <!-- <el-button type="primary" plain icon="SetUp" @click="changeMode">{{ mode === 'table' ? '切换卡片模式' : '切换列表模式'
        }}</el-button> -->
      <el-button type="success" plain icon="Plus">添加</el-button>
      <el-button type="danger" plain icon="Delete">批量删除</el-button>
      <el-button type="warning" plain icon="BrushFilled">清空所有缓存</el-button>
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
                  <el-button size="small" type="primary" icon="Edit">编辑</el-button>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-button size="small" type="danger" icon="Delete">删除</el-button>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-button size="small" type="warning" icon="BrushFilled">清空缓存</el-button>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <template v-else>
            <el-button size="small" type="primary" icon="Edit">编辑</el-button>
            <el-button size="small" type="danger" icon="Delete">删除</el-button>
            <el-button size="small" type="warning" icon="BrushFilled">清空缓存</el-button>
          </template>
        </template>
      </rp-table>

      <!-- <div v-else class="card-container">
        <div v-for="(item, index) in tableData" :key="index" class="card">
          <div class="header">
            <div class="site-title">
              {{ item.name }}
            </div>
          </div>
          <div class="info">

          </div>
          <div class="bottom">
            <el-button text>
              <el-icon size="20px">
                <Edit />
              </el-icon>
            </el-button>
            <el-button text>
              <el-icon size="20px">
                <Delete />
              </el-icon>
            </el-button>
            <el-button text>
              <el-icon size="20px">
                <BrushFilled />
              </el-icon>
            </el-button>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import useAppStore from '@/store/modules/app'
const device = computed(() => useAppStore().device);
const mode = ref('table')
const tableData = ref([
  {
    name: '麒麟',
    address: 'https://www.hdkyl.in',
    api: 'https://www.hdkyl.in/api/pieces',
    passkey: 'akskd12311ass12sld12',
    interval: '60',
    uploadLimit: '20',
    downloadLimit: '20'
  }
])

const tableEl = ref([
  {
    title: '站点名称',
    dataIndex: 'name',
    fixed: 'left'
  },
  {
    title: '站点地址',
    dataIndex: 'address'
  },
  {
    title: '接口地址',
    dataIndex: 'api'
  },
  {
    title: 'passkey密钥',
    dataIndex: 'passkey'
  },
  {
    title: '请求间隔(s)',
    dataIndex: 'interval'
  },
  {
    title: '上传限速',
    dataIndex: 'uploadLimit'
  },
  {
    title: '下载限速',
    dataIndex: 'downloadLimit'
  },
  {
    title: '操作',
    dataIndex: 'action',
    type: 'otherTag',
    width: device.value === 'mobile' ? 60 : 280,
    align: 'center',
    fixed: 'right'
  },
])

const pagination = ref({
  current: 1,
  pageSize: 10,
  total: 0
})

const changeMode = () => {
  mode.value = mode.value === 'table' ? 'card' : 'table'
}

const paginationChange = (val) => {

}
const selectionChange = val => {
  console.log(val)
}

watch(() => device.value, (val) => {
  const action = tableEl.value.find(i => i.dataIndex === 'action')
  action.width = val === 'mobile' ? 60 : 280 
})
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  background-color: var(--el-bg-color);
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.control {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 8px;
}

.main {
  flex: 1;
}

.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
}

.card-container {
  padding-top: 10px;
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 300px;
  height: 220px;
  background: var(--el-text-color-disabled);
  border-radius: 6px;
  color: var(--el-text-color-primary);
  margin-right: 20px;
  margin-bottom: 20px;
}
</style>