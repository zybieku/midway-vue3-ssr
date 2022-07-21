import { ILogger, MidwayHttpError, ResOrMessage } from "@midwayjs/core";
import { Inject } from "@midwayjs/decorator";
import { Context } from "@midwayjs/koa";
import { render } from "ssr-core-vue3";

export abstract class BaseController {
  @Inject()
  protected ctx: Context;

  @Inject()
  protected logger: ILogger;

  /**
   * 请求成功返回
   * @param data 响应对象
   * @param message 响应msg
   * @param code  响应自定义状态码
   */
  protected success(data = null, code = 0, message = "success") {
    this.ctx.body = {
      code: code,
      message,
      data,
    };
    this.ctx.status = 200;
  }

  /**
   * 抛出错误处理
   * @param {ResOrMessage} errMsg 错误信息
   * @param {number} status 错误status
   */
  protected error(errMsg: ResOrMessage, status: number) {
    throw new MidwayHttpError(errMsg, status);
  }

  /**
   * 服务端渲染页面
   * 错位就采用客户端渲染
   */
  protected async renderView() {
    let { ctx } = this;
    let stream;
    try {
      stream = await render(ctx, {
        stream: true,
      });
    } catch (error) {
      console.log("ssr error", error);
      stream = await render(ctx, {
        stream: true,
        mode: "csr",
      });
    }
    return stream;
  }
}
