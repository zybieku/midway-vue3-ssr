import { defineStore } from "pinia";

export interface IMenu {
  id: number;
  title: string;
  url: string;
  parentId: number;
  icon?: string;
  children?: Array<IMenu>;
}

export const useMenuStore = defineStore("menuStore", {
  state: () => {
    return { menuList: [] as Array<IMenu> };
  },
  actions: {
    setData(menus: Array<IMenu>) {
      this.menuList = menus;
    },
  },
});
