import { useMenuStore } from "@/pinia-store";

export default async ({ pinia, router, ctx }) => {
  let menuStore = useMenuStore(pinia);
  const { headData, menuList, data } = __isBrowser__
    ? await (await window.fetch("/api/index")).json()
    : await ctx?.indexService?.page();
  menuStore.setData(menuList);
  return headData;
};
