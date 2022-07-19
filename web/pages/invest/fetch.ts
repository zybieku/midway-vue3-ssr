import { Params } from "~/typings/data";
import { useIndexStore } from "@/pinia-store";

export default async ({ pinia, router, ctx }: Params) => {
  const indexStore = useIndexStore(pinia);
  const data = __isBrowser__
    ? await (await window.fetch("/api/index")).json()
    : await ctx?.apiService?.index();
  return {
    title: "测试",
    keywords: "server side render",
  };
};
