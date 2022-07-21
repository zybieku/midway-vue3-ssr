
<template>
    <header class="m-header">
        <div class="m-menu-item logo" role="menuitem" tabindex="0">LOGO</div>
        <ul role="menubar" style="--el-menu-level:0;" class="m-header-menu">
            <li :class="['m-menu-item', activeIndex === index ? 'active' : '']" role="menuitem"
                v-for="(menu, index) in menuList" :key="index" @mouseenter="handleMouseEnter(index)">
                <a :href="menu.url" target="_self">{{ menu.title }}</a>
                <template v-if="menu.children.length">
                    <ul class="popper" v-show="hoverIndex === index">
                        <li v-for="(childMenu, cIndex) in menu.children" :key="index + '_' + cIndex"
                            @mouseenter="handleMouseEnter(index)">
                            <a :href="childMenu.url" target="_self">{{ childMenu.title }}</a>
                        </li>
                    </ul>
                </template>


            </li>
        </ul>
    </header>
</template>
<script lang="ts" setup>
import { useMenuStore } from '@/pinia-store';
import { computed, ref } from 'vue';

let hoverIndex = ref(-1)
let activeIndex = ref(0)

let menuList = computed(() => {
    let menus = useMenuStore().menuList
    return menus.filter((menu) => {
        let children = menus.filter((childMenu) => {
            return menu.id === childMenu.parentId
        })
        menu.children = children
        return menu.parentId === 0
    })
})

let handleMouseEnter = (index: number) => {
    hoverIndex.value = index
}

</script>

<style lang="less">
.m-header {
    --m-item-height: 66px;
}

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
            line-height: var(--m-item-height);
            color: var(--el-text-color-primary);
            font-size: var(--el-font-size-large);
            padding: 0 20px;
            list-style: none;
            cursor: pointer;
            position: relative;
            white-space: nowrap;
            margin: 0;
            font-weight: bold;

            &.active {
                a {
                    border-bottom: 2px solid var(--el-color-primary);
                    color: var(--el-color-primary) !important;
                }
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

        .popper {
            position: absolute;
            width: 100%;
            top: calc(var(--m-item-height) + 2px);
            left: 0;
            display: flex;
            flex-direction: column;
            align-items: center;

            li {
                height: 40px;
            }
        }

    }
}
</style>
