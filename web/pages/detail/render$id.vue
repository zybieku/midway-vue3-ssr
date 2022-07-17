
<template>
  <div>this detail
  </div>
</template>

<script lang="ts" setup>
import { useDetailStore } from '@/pinia-store';

const detailStore = useDetailStore()
const detailData = detailStore.data

</script>

<style>

</style>
