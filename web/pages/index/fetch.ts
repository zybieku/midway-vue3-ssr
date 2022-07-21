import { useIndexStore, useMenuStore } from "@/pinia-store";
import { useFetch } from "@/vhooks";

export default async ({ pinia, router, ctx }) => {
  let menuStore = useMenuStore(pinia);
  const indexStore = useIndexStore(pinia);
  const { headData, menuList, data } = __isBrowser__
    ? await useFetch(ctx.url)
    : await ctx?.indexService.page();

  menuStore.setData(menuList);
  indexStore.setData(data);
  return headData;
};
