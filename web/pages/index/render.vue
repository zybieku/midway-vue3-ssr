
<template>
  <div class="home">
    <MHeader></MHeader>
    <div class="banner">
      <h3 class="title">科学拥抱加密世界</h3>
      <div class="title">Heisenberg 助力构建数字资产的未来</div>
    </div>
    <div class="about">
      <h3>关于我们</h3>
    </div>
    <div class="invest">
      <h3>投资理念与风险控制</h3>
    </div>
    <div class="product">
      <h3>产品中心</h3>
    </div>
    <div class="contract">
      <h3>联系我们</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useIndexStore } from '@/pinia-store'
import MHeader from '@/components/mHeader/index.vue';

let indexStore = useIndexStore()
</script>

<style lang="less">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .banner {
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .about {}
}
</style>