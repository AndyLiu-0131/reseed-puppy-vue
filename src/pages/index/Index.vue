<template>
  <div class="container">
    <div class="card-area">
      <div class="title">任务统计</div>
      <el-row :gutter="10">
        <el-col v-for="(item, index) in cardList" :key="index" :xs="24" :sm="12" :md="6" :xl="6">
          <div class="card" :class="item.cardNo">
            <div class="left">
              <div class="icon-wrap">
                <Icon :icon="item.icon"></Icon>
              </div>
            </div>
            <div class="right">
              <div class="name">{{ item.name }}</div>
              <div class="count">{{ item.count }}</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="pie-area">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="left-pie area">
            <div class="title">任务状态占比</div>
            <div ref="leftPieRef" class="chart"></div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
          <div class="right-pie area">
            <div class="title">站点辅种数量占比</div>
            <div ref="rightPieRef" class="chart"></div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="bar-area area">
      <div class="title">站点辅种任务统计</div>
      <div ref="barRef" class="chart"></div>
    </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'

import { isDark } from '@/composables'

const cardList = ref([
  {
    name: '待处理',
    icon: 'mdi:receipt-text-pending',
    cardNo: 'card-one',
    count: '3'
  },
  {
    name: '处理中',
    icon: 'mdi:arrow-right-drop-circle',
    cardNo: 'card-two',
    count: '1'
  },
  {
    name: '已完成',
    icon: 'mdi:check-circle',
    cardNo: 'card-three',
    count: '24'
  },
  {
    name: '已失败',
    icon: 'mdi:alert-circle',
    cardNo: 'card-four',
    count: '2'
  }
])

const leftPieRef = ref()
const rightPieRef = ref()
const barRef = ref()
let leftPie = null
let rightPie = null
let bar = null
const option = {
  // color: ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80', '#8d98b3', '#e5cf0d', '#97b552', '#95706d'],
  backgroundColor: '',
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    right: true,
    top: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '80%'],
      avoidLabelOverlap: false,
      center: ['40%', '50%'],
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      labelLine: {
        show: true
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
}

const barOption = {
  // color: ['#2ec7c9', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80', '#8d98b3', '#e5cf0d', '#97b552', '#95706d'],
  backgroundColor: '',
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['成功', '失败']
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: false },
      data: ['麒麟', 'agsv', '青蛙', '蟹黄堡', '高清时光', '兽站', '红豆饭', '铂金学院']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '成功',
      type: 'bar',
      barGap: 0,
      data: [100, 105, 35, 74, 150, 64, 51, 47]
    },
    {
      name: '失败',
      type: 'bar',
      data: [12, 7, 5, 23, 14, 9, 0, 8]
    }
  ]
};

const initLeftPie = (theme = 'light') => {
  leftPie && leftPie.dispose()
  leftPie = echarts.init(leftPieRef.value, theme)
  leftPie.setOption(option)
}

const initRightPie = (theme = 'light') => {
  rightPie && rightPie.dispose()
  rightPie = echarts.init(rightPieRef.value, theme)
  rightPie.setOption(option)
}

const initBar = (theme = 'light') => {
  bar && bar.dispose()
  bar = echarts.init(barRef.value, theme);
  bar.setOption(barOption);
}

const resize = () => {
  leftPie && leftPie.resize()
  rightPie && rightPie.resize()
  bar && bar.resize()
}

const isDarkMode = computed(() => isDark.value)
onMounted(() => {
  window.addEventListener('resize', resize)
  setTimeout(() => {
    if (isDarkMode.value) {
      initLeftPie('dark')
      initRightPie('dark')
      initBar('dark')
    } else {
      initLeftPie('light')
      initRightPie('light')
      initBar('light')
    }
  },)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
})


watch(() => isDarkMode.value, (val) => {
  if (val) {
    initLeftPie('dark')
    initRightPie('dark')
    initBar('dark')
  } else {
    initLeftPie('light')
    initRightPie('light')
    initBar('light')
  }
})

</script>

<style lang="scss" scoped>
.container {
  padding: 8px;
  height: 100%;
  overflow-y: auto;
  // background-color: var(--el-bg-color);
}

.card-area {
  background-color: var(--el-bg-color);
  padding: 20px;
  padding-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}

.area {
  background-color: var(--el-bg-color);
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.card {
  color: #fff;
  height: 100px;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0px 8px 10px -4px rgba(0, 0, 0, 0.45);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  cursor: pointer;
  transition: all .25s;

  .left {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon-wrap {
      padding: 10px;
      height: 100%;
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 40px;
      background-color: #fff;
      border-radius: 20px;
      box-shadow: inset 2px 2px 2px rgba(0, 0, 0, .2);
    }
  }

  .right {
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .name,
    .count {
      font-weight: bold;
    }

    .name {
      font-size: 14px;
    }

    .count {
      font-size: 36px;
    }
  }
}

.card:hover {
  transform: scale(1.05);
}

.card-one {
  background: linear-gradient(30deg, #af40ff, #5b42f3);
}

.card-one .icon-wrap {
  color: #5b42f3;
}

.card-two {
  background: linear-gradient(30deg, #208af5 0%, #2de3eb 100%), #0ab6f4;
}

.card-two .icon-wrap {
  color: #208af5;
}

.card-three {
  background: linear-gradient(30deg, #ff5959 0%, #ffa682 100%), #0ab6f4;
}

.card-three .icon-wrap {
  color: #ff5959;
}

.card-four {
  background: linear-gradient(30deg, #3e74e1 0%, #28bbff 100%), linear-gradient(0deg, #7496fe 0%, #41dddc 100%);
}

.card-four .icon-wrap {
  color: #7496fe;
}

:deep(.el-col) {
  margin-bottom: 10px;
}

.title {
  position: relative;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
  color: var(--el-text-color-primary);
  padding-left: 8px;
}

.title::before {
  content: '';
  position: absolute;
  left: 0;
  height: 100%;
  width: 4px;
  border-radius: 2px;
  background-color: var(--el-color-primary);
}

.pie-area .chart {
  height: 300px;
  margin-bottom: 10px;
}

.bar-area .chart {
  height: 300px;
}
</style>