import { Provide } from "@midwayjs/decorator";
import { BaseService } from "../base/base.service";

@Provide()
export class IndexService extends BaseService {
  async page() {
    let headData = { title: "首页", keywords: "首页" };
    let menuList = [
      { id: 1, title: "首页", url: "/", parentId: 0, icon: "" },
      { id: 2, title: "关于我们", url: "/about", parentId: 0, icon: "" },
      { id: 3, title: "投资理念", url: "/invest", parentId: 0, icon: "" },
      { id: 4, title: "产品中心", url: "/product", parentId: 0, icon: "" },
      { id: 5, title: "联系我们", url: "/contract", parentId: 0, icon: "" },
      { id: 6, title: "CHN", url: "/lang", parentId: 0, icon: "" },
      { id: 7, title: "公司简介", url: "/about#1", parentId: 2, icon: "" },
      { id: 8, title: "公司文化", url: "/about#2", parentId: 2, icon: "" },
      { id: 9, title: "团队", url: "/about#3", parentId: 2, icon: "" },
      { id: 10, title: "投资理念", url: "/invest#1", parentId: 3, icon: "" },
      { id: 11, title: "风险控制", url: "/invest#2", parentId: 3, icon: "" },
    ];
    let data = { content: "this is data" };
    return { headData, menuList, data };
  }
}
