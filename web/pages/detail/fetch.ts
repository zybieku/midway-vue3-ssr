import { Params } from '~/typings/data'
import { useDetailStore } from '@/pinia-store';

export default async ({ pinia , router, ctx }: Params) => {
  let detailStore =useDetailStore()
  const data = __isBrowser__ ? await (await window.fetch(`/api/detail/${router.params.id}`)).json() : await ctx?.apiDeatilservice?.index(ctx.params.id)
  console.log(2);
  await detailStore.setData(data)
}
