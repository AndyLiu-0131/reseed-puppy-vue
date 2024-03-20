<template>
  <div class="container">
    <div class="form-area">
      <div class="title">{{ title }}</div>
      <div class="form">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" status-icon size="large">
          <el-form-item label="" prop="username">
            <el-input v-model="ruleForm.username" placeholder="请输入用户名" prefix-icon="User" />
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input v-model="ruleForm.password" placeholder="请输入密码" prefix-icon="Lock" />
          </el-form-item>
          <el-alert type="info" :show-icon="false" :closable="false">
            <div class="tips">
              <el-icon>
                <InfoFilled />
              </el-icon>
              默认账号密码于database文件夹下secret.txt中查看
            </div>
          </el-alert>
        </el-form>
      </div>
      <div class="btn">
        <el-button size="large" round @click="handleLogin">登 陆</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = import.meta.env.VITE_APP_TITLE
const ruleForm = ref({
  username: '',
  password: ''
})
const rules = ref({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const handleLogin = () => {

}
onMounted(() => {

})
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  width: 100vw;
  background: url('@/assets/image/login/login_bg.png');
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-area {
    height: 440px;
    max-width: 500px;
    min-width: 376px;
    border-radius: 4px;
    flex-shrink: 0;
    padding: 60px;
    backdrop-filter: blur(40px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .title {
    text-align: center;
    font-size: 32px;
    font-family: monospace;
    font-weight: bold;
    color: #fff;
    margin-bottom: 40px;
  }

  .form {
    margin-bottom: 40px;

    .tips {
      font-size: 10px;
    }

    :deep(.el-input__wrapper) {
      border-radius: 4px;
    }

    :deep(.el-alert) {
      border-radius: 4px;
    }
  }

  .btn {
    :deep(.el-button) {
      width: 100%;
      background: linear-gradient(-90deg, #4393ff 0%, #1971f9 100%), linear-gradient(0deg, #ff6e8f 0%, #fea59c 100%);
      color: #fff;
      border: none;
    }
  }
}
</style>
