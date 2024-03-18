<template>
  <div class="container">
    <div class="control">
      <el-button type="primary" plain icon="SetUp" @click="changeMode">{{ mode === 'table' ? '切换卡片模式' : '切换列表模式'
        }}</el-button>
      <el-button type="success" plain icon="Plus">添加</el-button>
      <el-button type="danger" plain icon="Delete">批量删除</el-button>
      <el-button type="warning" plain icon="BrushFilled">清空所有缓存</el-button>
    </div>
    <div class="main">
      <el-table v-if="mode === 'table'" :data="tableData" style="width: 100%" border>
        <el-table-column type="selection" />
        <el-table-column fixed prop="name" label="站点名称" />
        <el-table-column prop="address" label="站点地址" />
        <el-table-column prop="api" label="接口地址" />
        <el-table-column prop="passkey" label="passkey密钥" />
        <el-table-column prop="interval" label="请求间隔(s)" />
        <el-table-column prop="uploadLimit" label="上传限速" />
        <el-table-column prop="downloadLimit" label="下载限速" />
        <el-table-column fixed="right" label="操作面板" align="center" width="260">
          <template #default="scope">
            <div class="action">
              <el-button size="small" type="primary" icon="Edit">编辑</el-button>
              <el-button size="small" type="danger" icon="Delete">删除</el-button>
              <el-button size="small" type="warning" icon="BrushFilled">清空缓存</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div v-else class="card-container">
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
      </div>
    </div>
    <div class="pagination">
      <el-pagination v-model:current-page="pagination.current" v-model:page-size="pagination.pageSize" background
        :page-sizes="[10, 50, 100, 200]" :small="true" layout="total, sizes, prev, pager, next, jumper"
        :total="pagination.total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script setup>
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
const changeMode = () => {
  mode.value = mode.value === 'table' ? 'card' : 'table'
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