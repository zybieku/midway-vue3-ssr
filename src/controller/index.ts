import { Controller, Get, Inject } from "@midwayjs/decorator";

import { BaseController } from "../base/base.controller";
import { IndexService } from "../service/index.service";

@Controller("/")
export class Index extends BaseController {
  @Inject()
  indexService: IndexService;

  @Get("/")
  async index(): Promise<void> {
    this.ctx.indexService = this.indexService;
    return await this.renderView();
  }

  @Get("/about")
  async about(): Promise<void> {
    this.ctx.indexService = this.indexService;
    return await this.renderView();
  }
  @Get("/invest")
  async invest(): Promise<void> {
    this.ctx.indexService = this.indexService;
    return await this.renderView();
  }

  @Get("/product")
  async product(): Promise<void> {
    this.ctx.indexService = this.indexService;
    return await this.renderView();
  }
}
