
<template>
  <div>
    this is index
  <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script lang="ts" setup>
import { useIndexStore } from '@/pinia-store'
const indexStore = useIndexStore()
const indexData = indexStore.data


</script>
