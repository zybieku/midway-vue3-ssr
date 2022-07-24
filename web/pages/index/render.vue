
<template>
  <div class="home">
    <MHeader></MHeader>
    <div class="banner">
      <img class="cover" src="/img/bg_home_banner.png" alt="banner">
      <div class="info">
        <div class="title">
          <img class="title-img" src="/img/ic_banner_text.png" alt="科学">拥抱加密世界
        </div>
        <p>Heisenberg 助力构建数字资产的未来</p>
      </div>

    </div>
    <main class="content">
      <div class="about">
        <h3>关于我们</h3>
        <div class="info">
          <img src="/img/img_home_about.png" alt="" class="left-img">
          <div class="right">
            <p>海森矩阵旨在加密市场寻找强确定性的投资机会，兼顾主观量化、动态对冲、CTA和无风险套利策略，持续为机构和投资者提供稳定、安全、可靠的加密资产增值方案。</p>
            <div class="btn">
              <a href="/about">查看更多</a>
            </div>
          </div>
        </div>
      </div>
      <div class="invest">
        <div class="info">
          <h3>投资理念与风险控制</h3>
          <p class="desc">基于行为金融学理论，以客观的历史验证为驱动，利用严谨的量化投资技术，力求实现可持续投资和收益。</p>
        </div>
        <div class="right">
          <img src="/img/img_home_invest.png" alt="" class="right-img">
          <div class="btn">
            <a href="/invest">查看更多</a>
          </div>
        </div>
      </div>
      <div class="product">
        <h3>产品中心</h3>
        <div class="info">
          <a class="item" href="/product">
            <img src="/img/img_product_cta.png" alt="">
            <span>现货CTA</span>
          </a>
          <a class="item" href="/product">
            <img src="/img/img_product_tl.png" alt="">
            <span>套利策略</span>
          </a>
          <a class="item" href="/product">
            <img src="/img/img_product_ctab.png" alt="">
            <span>合约CTA</span>
          </a>
        </div>
      </div>
      <div class="contract">
        <h3>联系我们</h3>
        <div class="info">
          <img src="/img/img_home_contract.png" class="contract-img" alt="">
          <div class="detail">
            <span>邮箱: gongsiyouxiang@gmail.com</span>
            <span>Telegram: Hessenberg Matrix</span>
          </div>
        </div>
      </div>
    </main>
    <MFooter></MFooter>
  </div>
</template>

<script lang="ts" setup>
import { useIndexStore } from '@/pinia-store'
import MHeader from '@/components/mHeader/index.vue';
import MFooter from '@/components/mFooter/index.vue';

let indexStore = useIndexStore()
</script>

<style lang="less">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .banner {
    height: 660px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;

    .cover {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
    }

    .info {
      width: 1440px;
      position: relative;
      color: var(--hm-color-white);
      display: flex;
      flex-direction: column;
      align-items: center;

      .title {
        display: flex;
        font-size: 64px;
        align-items: center;
        letter-spacing: 2px;

        .title-img {
          flex: none;
          margin-top: 6px;
          margin-right: 3px;
          width: 130px;
          height: 62px;
        }
      }

      p {
        padding-top: 60px;
      }
    }
  }

  .content {
    width: 1440px;
    display: flex;
    flex-direction: column;
    padding: 0 264px;

    h3 {
      padding-left: 15px;
    }

    .about {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 68px 0 157px;

      .info {
        display: flex;
        width: 100%;
        flex: 1;
        padding-top: 44px;
      }

      .left-img {
        width: 320px;
        height: 320px;
        flex: none;
        margin-left: 7px;
      }

      .right {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-left: 60px;
        padding-top: 12px;
        flex: 1;
      }
    }

    .invest {
      width: 100%;
      height: 594px;
      display: flex;

      .info {
        display: flex;
        flex-direction: column;
        flex: 1;

        .desc {
          padding-top: 50px;
          padding-left: 15px;
        }
      }

      .right {
        flex: none;
        width: 390px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 160px;
        align-items: flex-end;

        .right-img {
          width: 300px;
          height: 300px;
          margin-right: -30px;
        }
      }
    }

    .product {
      width: 100%;
      display: flex;
      flex-direction: column;

      .info {
        width: 100%;
        display: flex;
        padding: 55px 0 152px;
        justify-content: space-between;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          color: var(--hm-text-color);

          &:hover {
            opacity: .75;
            transform: scale(1.1)
          }


          img {
            width: 254px;
            height: 254px;
            flex: none;
          }

          span {
            padding-top: 12px;
            letter-spacing: 2px;
            font-size: 32px;
          }
        }
      }
    }

    .contract {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding-bottom: 232px;

      .info {
        display: flex;
        width: 100%;
        padding-top: 55px;
        height: 347px;
        align-items: center;


        .contract-img {
          width: 292px;
          height: 292px;
          flex: none;
        }

        .detail {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          text-align: left;
          padding-left: 92px;
          background: #F4F4F4;
          font-size: 24px;

          span:last-of-type {
            padding-top: 54px;
          }
        }
      }
    }


    .btn {
      width: 190px;
      height: 64px;
      background: var(--hm-btn-bg-color);
      font-size: 20px;
      font-weight: 400;
      color: var(--hm-color-white);
      line-height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      align-self: flex-end;

      &:hover {
        opacity: .8;
      }
    }

  }


}
</style>