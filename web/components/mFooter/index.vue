
<template>
    <footer class="m-footer">
        <span>Copyright@ 2022 Hessenberg Matrix. All rights reserved.</span>
        <div class="footer-share">
            <a href="https://facebook.com/" target="_blank">
                <img src="/img/ic_facebook.png" alt="facebook">
            </a>
            <a href="https://twitter.com/" target="_blank">
                <img src="/img/ic_twitter.png" alt="twitter">
            </a>
            <a href="https://t.me/Limforthtech" target="_blank">
                <img src="/img/ic_telegram.png" alt="twitter">
            </a>
        </div>
    </footer>
</template>
<script lang="ts" setup>

</script>

<style lang="less">
.m-footer {
    --m-item-height: 301px;
    --m-text-color: var(--hm-color-white);
}

.m-footer {
    width: 100%;
    height: var(--m-item-height);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--hm-color-primary);
    color: var(--m-text-color);

    .footer-share {
        display: flex;
        align-items: center;
        margin-top: 73px;

        a {
            margin-left: 72px;
            transition: all 0.2s ease-in-out;

            &:hover {
                transform: translateY(-10px);
            }

            &:first-child {
                margin-left: 0px;
            }

            img {
                width: 50px;
            }
        }
    }
}
</style>
