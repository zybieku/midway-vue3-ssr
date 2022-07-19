import { App } from "vue";
import { ElButton, ElConfigProvider, ID_INJECTION_KEY } from "element-plus";

export let useElemntUi = (app: App) => {
  app.use(ElButton).use(ElConfigProvider);

  app.provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 10000),
    current: 0,
  });
};
