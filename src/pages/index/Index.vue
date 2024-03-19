<template>
  <div class="container">
    <div class="card-area">
      <el-row :gutter="10">
        <el-col v-for="(item, index) in cardList" :key="index" :xs="24" :sm="12" :md="6" :xl="6">
          <div class="card">
            <span>{{ item.name }}</span>
            <Icon :icon="item.icon"></Icon>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'

const cardList = ref([
  {
    name: '待处理',
    icon: 'mdi:receipt-text-pending'
  },
  {
    name: '处理中',
    icon: 'mdi:arrow-right-drop-circle'
  },
  {
    name: '已完成',
    icon: 'mdi:check-circle'
  },
  {
    name: '已失败',
    icon: 'mdi:alert-circle'
  }
])

</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  background-color: var(--el-bg-color);
}

.card-area {
  padding: 8px;
}

.card {
  color: #fff;
  height: 180px;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
  position: relative;
  overflow: hidden;
}

.e-card {
  margin: 100px auto;
  background: transparent;
  box-shadow: 0px 8px 28px -9px rgba(0, 0, 0, 0.45);
  position: relative;
  width: 240px;
  height: 330px;
  border-radius: 16px;
  overflow: hidden;
}

.wave {
  position: absolute;
  width: 400px;
  height: 500px;
  opacity: 0.6;
  left: 0;
  top: 0;
  margin-left: -12%;
  margin-top: -60%;
  background: linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb);
}


.wave:nth-child(2),
.wave:nth-child(3) {
  top: 300px;
}

.wave {
  border-radius: 40%;
  animation: wave 3000ms infinite linear;
}

// .wave {
//   border-radius: 40%;
//   animation: wave 55s infinite linear;
// }

.wave:nth-child(2) {
  animation-duration: 4000ms;
}

// .wave:nth-child(2) {
//   animation-duration: 50s;
// }

.wave:nth-child(3) {
  animation-duration: 5000ms;
}

// .wave:nth-child(3) {
//   animation-duration: 45s;
// }

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>