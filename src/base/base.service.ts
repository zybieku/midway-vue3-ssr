import { ILogger } from '@midwayjs/core';
import { Inject } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';

export abstract class BaseService {
  @Inject()
  protected ctx: Context;

  @Inject()
  logger: ILogger;
}
