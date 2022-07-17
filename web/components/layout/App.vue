<template>
  <router-view :reactiveFetchData="reactiveFetchData" />
</template>

<script lang="ts" setup>
import {  App } from 'vue'
import {Button} from 'vant';
 let props =defineProps<{
  ssrApp: App,
  reactiveFetchData: any,
  asyncData: any
}>()

props.ssrApp.use(Button)
</script>

<style lang="less">
@import '@/common.less';
</style>
