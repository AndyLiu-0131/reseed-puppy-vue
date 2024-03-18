<template>
  <div class="container">
    <div class="info">

    </div>
    <div class="main">
      <el-table :data="tableData" style="width: 100%" border>
        <el-table-column type="selection" />
        <el-table-column fixed prop="name" label="名称" />
        <el-table-column prop="type" label="类型" />
        <el-table-column prop="address" label="地址" />
        <el-table-column prop="port" label="端口" />
        <el-table-column prop="username" label="登陆用户名" />
        <el-table-column prop="password" label="登陆密码" />
        <el-table-column prop="jump" label="跳过哈希校验" />
        <el-table-column prop="autoStart" label="自动开始" />
        <el-table-column prop="sites" label="辅种站点">
          <template #default="scope">
            <span>{{ scope.row.sites.map(i => i.name).join('、') }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="state" label="状态">
          <template #default="scope">
            <el-switch v-model="scope.row.state" class="mt-2" style="margin-left: 24px" inline-prompt
              active-icon="Check" inactive-icon="Close" />
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作面板" align="center" width="200">
          <template #default="scope">
            <div class="action">
              <el-button size="small" type="success" icon="Link">测试</el-button>
              <el-button size="small" type="primary" icon="Edit">编辑</el-button>
              <el-button size="small" type="danger" icon="Delete">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination v-model:current-page="pagination.current" v-model:page-size="pagination.pageSize" background
        :page-sizes="[10, 50, 100, 200]" :small="true" layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script setup>
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

const handleSizeChange = (val) => {
  console.log(val);
}
const handleCurrentChange = (val) => {
  console.log(val);
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  background-color: var(--el-bg-color);
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.info {
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