<template>
  <div class="container">
    <div class="control">
      <el-button type="success" plain icon="Plus">添加</el-button>
      <el-button type="danger" plain icon="Delete">批量删除</el-button>
      <el-button type="danger" icon="Failed">删除所有</el-button>
    </div>
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
                <el-button size="small" type="success" icon="Link">测试</el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button size="small" type="primary" icon="Edit">编辑</el-button>
              </el-dropdown-item>
              <el-dropdown-item>
                <el-button size="small" type="danger" icon="Delete">删除</el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <template v-else>
          <el-button size="small" type="success" icon="Link">测试</el-button>
          <el-button size="small" type="primary" icon="Edit">编辑</el-button>
          <el-button size="small" type="danger" icon="Delete">删除</el-button>
        </template>
      </template>
    </rp-table>
  </div>
</template>

<script setup>
import useAppStore from '@/store/modules/app'
const device = computed(() => useAppStore().device);
const tableData = ref([
  {
    name: 'transmission',
    type: 'TR',
    address: '192.168.1.1',
    port: '9091',
    username: 'test',
    password: 'test',
    jump: true,
    autoStart: true,
    sites: [{ name: '憨憨', value: 'hhantop' }, { name: '麒麟', value: 'hdkyl' }],
    state: true,
  },
  {
    name: 'transmission',
    type: 'TR',
    address: '192.168.1.1',
    port: '9091',
    username: 'test',
    password: 'test',
    jump: true,
    autoStart: true,
    sites: [{ name: '憨憨', value: 'hhantop' }, { name: '麒麟', value: 'hdkyl' }],
    state: true,
  },
  {
    name: 'transmission',
    type: 'TR',
    address: '192.168.1.1',
    port: '9091',
    username: 'test',
    password: 'test',
    jump: true,
    autoStart: true,
    sites: [{ name: '憨憨', value: 'hhantop' }, { name: '麒麟', value: 'hdkyl' }],
    state: true,
  },
  {
    name: 'transmission',
    type: 'TR',
    address: '192.168.1.1',
    port: '9091',
    username: 'test',
    password: 'test',
    jump: true,
    autoStart: true,
    sites: [{ name: '憨憨', value: 'hhantop' }, { name: '麒麟', value: 'hdkyl' }],
    state: true,
  },
  {
    name: 'transmission',
    type: 'TR',
    address: '192.168.1.1',
    port: '9091',
    username: 'test',
    password: 'test',
    jump: true,
    autoStart: true,
    sites: [{ name: '憨憨', value: 'hhantop' }, { name: '麒麟', value: 'hdkyl' }],
    state: true,
  },
  {
    name: 'transmission',
    type: 'TR',
    address: '192.168.1.1',
    port: '9091',
    username: 'test',
    password: 'test',
    jump: true,
    autoStart: true,
    sites: [{ name: '憨憨', value: 'hhantop' }, { name: '麒麟', value: 'hdkyl' }],
    state: true,
  },
])
const pagination = ref({
  current: 1,
  pageSize: 10,
  total: 0
})

const tableEl = ref([
  {
    title: '名称',
    dataIndex: 'name',
    fixed: 'left'
  },
  {
    title: '类型',
    dataIndex: 'type'
  },
  {
    title: '地址',
    dataIndex: 'address'
  },
  {
    title: '端口',
    dataIndex: 'port'
  },
  {
    title: '登陆用户名',
    dataIndex: 'username'
  },
  {
    title: '登陆密码',
    dataIndex: 'password'
  },
  {
    title: '跳过哈希校验',
    dataIndex: 'jump'
  },
  {
    title: '自动开始',
    dataIndex: 'autoStart'
  },
  {
    title: '辅种站点',
    dataIndex: 'sites',
    type: 'otherTag'
  },
  {
    title: '状态',
    dataIndex: 'state',
    type: 'otherTag',
    align: 'center'
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
</style>