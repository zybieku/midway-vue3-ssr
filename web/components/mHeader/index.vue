
<template>
    <header class="m-header">
        <a class="m-menu-item logo" href="/">
            <img class="logo-img" src="/img/logo.png" alt="logo">
        </a>
        <ul role="menubar" style="--el-menu-level:0;" class="m-header-menu">
            <li role="menuitem" v-for="(menu, index) in menuList" :key="index"
                :class="['m-menu-item', menu.url === actived ? 'active' : '']" @mouseenter="handleMouseEnter(index)">
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
import { useRoute } from 'vue-router';

let hoverIndex = ref(-1)
let actived = computed(() => {
    return useRoute().path
})

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
    --m-text-color: var(--hm-color-white);
}

.m-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 99;
    padding: 0 7%;
    background-color: var(--hm-bg-color);
    box-shadow: 0px 2px 24px 0px rgba(0, 0, 0, 0.0800);

    .logo {
        width: 211px;

        .logo-img {
            width: 100%;
        }
    }

    &-menu {
        display: flex;
        flex-wrap: nowrap;
        border-right: none;
        list-style: none;
        position: relative;
        margin: 0;
        padding-left: 0;
        box-sizing: border-box;


        .m-menu-item {
            width: 160px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            line-height: var(--m-item-height);
            color: var(--hm-color-white);
            font-size: 16px;
            padding: 0 20px;
            list-style: none;
            cursor: pointer;
            position: relative;
            white-space: nowrap;
            margin: 0;

            &.active {
                a {
                    color: var(--hm-border-color);
                    border-bottom: 2px solid var(--hm-border-color);
                }
            }

            a {
                border-bottom: 2px solid transparent;
                transition: background-color 0.2s, color 0.2s;
            }

            a:hover {
                color: var(--hm-border-color);
                border-bottom: 2px solid var(--hm-border-color);
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
            background: var(--hm-bg-color);

            li {
                height: 40px;
            }
        }

    }
}
</style>
