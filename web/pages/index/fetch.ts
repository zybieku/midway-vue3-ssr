
import { Params } from '~/typings/data'
import { useIndexStore } from '@/pinia-store'

export default async ({ pinia , router , ctx }: Params) => {
  const indexStore = useIndexStore(pinia)
  const data = __isBrowser__ ? await (await window.fetch('/api/index')).json() : await ctx?.apiService?.index()
  indexStore.setData(data)
  return {title:'测试',keywords:'server side render, 服务端渲染, React, Egg, Midway, Nestjs, Vue, VueSSR, SSR, ReactSSR'}
}
