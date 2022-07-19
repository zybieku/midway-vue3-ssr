
<template>
    <header class="m-header">
        <div class="m-menu-item logo" role="menuitem" tabindex="0">LOGO</div>
        <ul role="menubar" style="--el-menu-level:0;" class="m-header-menu">
            <li class="m-menu-item is-active" role="menuitem" tabindex="0">
                <a href="/home/page/index/id/1.html?lang=cn" target="_self">首页</a>
            </li>
            <li class="m-menu-item" role="menuitem" tabindex="0">
                <a href="/home/page/index/id/1.html?lang=cn" target="_self">关于我们</a>
            </li>
            <li class="m-menu-item" role="menuitem" tabindex="0">
                投资理念
            </li>
            <li class="m-menu-item" role="menuitem" tabindex="0">
                产品中心
            </li>
            <li class="m-menu-item" role="menuitem" tabindex="0">
                联系我们
            </li>
            <li class="m-menu-item" role="menuitem" tabindex="0">
                中英文
            </li>
        </ul>
    </header>
</template>
<script lang="ts" setup>
</script>
<style lang="less">
.m-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 1px var(--el-border-color);
    border-right: solid 1px var(--el-border-color);
    padding: 0 7%;

    .logo {
        width: 200px;
    }

    &-menu {
        display: flex;
        flex-wrap: nowrap;
        border-right: none;
        list-style: none;
        position: relative;
        margin: 0;
        padding-left: 0;
        background-color: var(--el-color-white);
        box-sizing: border-box;


        .m-menu-item {
            width: 180px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            line-height: 66px;
            color: var(--el-text-color-primary);
            font-size: var(--el-font-size-large);
            padding: 0 20px;
            list-style: none;
            cursor: pointer;
            position: relative;
            white-space: nowrap;
            margin: 0;
            font-weight: bold;

            .is-active {
                // a {
                //     border-bottom: 2px solid var(--el-menu-active-color);
                //     color: var(--el-menu-active-color) !important;
                // }

            }

            a {
                border-bottom: 2px solid transparent;
                transition: background-color 0.2s, color 0.2s;
            }

            a:hover {
                border-bottom: 2px solid var(--el-color-primary);
                color: var(--el-color-primary) !important;
            }
        }

    }
}
</style>
