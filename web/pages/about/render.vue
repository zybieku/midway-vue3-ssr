
<template>
  <div class="home">
    <SHeader></SHeader>
  </div>
</template>

<script lang="ts" setup>
import { useIndexStore } from '@/pinia-store'
import SHeader from '@/components/header/index.vue';

</script>

<style lang="less">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>