<template>
    <header class="header">
        <!--主容器 -->
        <div class="container">
            <nav class="nav">
                <!-- 公司Logo -->
                <router-link to="/" class="logo">
                    <img v-if="logoUrl" :src="logoUrl" :alt="companyName" class="logo-img" />
                    <span v-else>{{ companyName }}</span>
                </router-link>

                <!-- 导航链接 -->
                <div id="nav-menu" :class="['nav-menu', { 'show-menu': isMenuOpen }]">
                    <ul class="nav-links">
                        <li v-for="item in navItems" :key="item.to">
                            <router-link :to="item.to" class="nav-link" @click="isMenuOpen = false">
                                <span>{{ item.text }}</span>
                                <span>{{ item.text }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="nav-buttons">
                    <!-- 联系方式 -->
                    <button class="email-link" @click="copyEmail">
                        <span>{{ companyEmail }}</span>
                        <span>{{ emailStatus }}</span>
                    </button>

                    <!-- 移动端菜单按钮 -->
                    <button class="nav-menu-toggle" @click="isMenuOpen = !isMenuOpen" aria-label="切换菜单">
                        <transition name="nav-menu-icon-rotate">
                            <span v-if="!isMenuOpen">
                                <MenuIcon />
                            </span>
                            <span v-else>
                                <CloseIcon />
                            </span>
                        </transition>
                    </button>
                </div>

            </nav>
        </div>
    </header>
</template>

<script setup>
import MenuIcon from './icons/IconMenu.vue'
import PhoneIcon from './icons/IconPhone.vue'
import CloseIcon from './icons/IconClose.vue'
import { ref, defineProps } from 'vue'

const props = defineProps({
    companyName: {
        type: String,
        default: '湛江伟力机电'
    },
    companyPhone: {
        type: String,
        default: '12345678',
    },
    companyEmail: {
        type: String,
        default: '12345@email.com'
    },
    logoUrl: {
        type: String,
        default: '../../public/favicon.ico'
    },
    navItems: {
        type: Array,
        default: () => [
            { to: '/', text: '首页' },
            { to: '/services', text: '服务与机型' },
            { to: '/cases', text: '成功案例' },
            { to: '/about', text: '关于我们' },
            { to: '/faq', text: '常见问题' },
        ]
    }
})

const isMenuOpen = ref(false)

/* ========== 复制邮箱地址 ========== */
const emailStatus = ref('Copy Email')
const copyEmail = () => {
    navigator.clipboard.writeText(props.companyEmail).then(() => {
        emailStatus.value = 'Copied ✅'

        setTimeout(() => {
            emailStatus.value = 'Copy Email'
        }, 2000)
    }).catch(err => {
        console.error('无法复制邮箱: ', err)
    })
}
</script>

<style scoped>
/* ==================== Header ==================== */
.header {
    position: fixed;
    top: 1.5rem;
    left: 0;
    right: 0;
    z-index: 100;
}

/* ==================== 基础设置 ==================== */
.nav {
    height: var(--header-height);
    background-color: var(--black-color);

    /* 上右下左 */
    padding: 0.5rem 1rem 0.5rem 0.5rem;

    border-radius: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: var(--nav-shadow);
}

/* ==================== 移动端基础设置 ==================== */
@media screen and (max-width: 1150px) {
    .nav-menu {
        position: fixed;
        top: 1.5rem;
        left: 0;
        right: 0;
        background-color: var(--black-color);
        margin-inline: 1rem;
        padding-block: 2rem;
        border-radius: 2rem;
        box-shadow: var(--nav-shadow);

        /* 初始设置为透明不可见 */
        opacity: 0;

        /* 设置指针事件为空，防止误触 */
        pointer-events: none;

        transition: transform .4s, opacity .3s;
    }

    .nav-menu-toggle {
        display: grid;
    }

    .nav-links {
        flex-direction: column;
    }
}

.show-menu {
    transform: translateY(5rem);
    opacity: 1;
    pointer-events: initial;
}

/* ==================== 桌面端基础设置 ==================== */
@media screen and (min-width: 1150px) {
    .container {
        margin-inline: auto;
    }

    .header {
        top: 2.5rem;
    }

    .nav {
        height: calc(var(--header-height) + 1.5rem);
        padding: .75rem 1rem;
    }

    .logo {
        width: 56px;
        height: 56px;
    }

    .logo-img {
        font-size: 2rem;
    }

    .nav-links {
        flex-direction: row;
        column-gap: 3rem;
    }

    .email-link {
        font-size: var(--normal-font-size);
    }

    .nav-menu-toggle {
        display: none;
    }
}

/* ==================== Logo 样式 ==================== */
.logo {
    width: 40px;
    height: 40px;
    background-color: var(--white-color);
    display: grid;
    place-items: center;
    border-radius: 50%;
}

.logo-img {
    font-size: 1.5rem;
    color: var(--first-color);
    transition: transform 1s;
}

.logo-img:hover {
    transition: rotateY(-360deg);
}

/* ==================== 按钮样式 ==================== */
.nav-buttons {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
}

.nav-menu-toggle {
    width: 32px;
    height: 32px;
    place-items: center;
    background: none;
    color: var(--white-color);
    font-size: 1.5rem;
    cursor: pointer;
}

/* ==================== 导航链接样式 ==================== */
.nav-links {
    text-align: center;
    display: flex;
    align-items: center;
    row-gap: 1.5rem;
}

.nav-link {
    color: var(--white-color);
    font-weight: 600;
    display: grid;
    place-items: center;
    position: relative;
    overflow: hidden;
}

.nav-link span {
    transition: transform 0.4s;
}

.nav-link span:nth-child(2) {
    position: absolute;
    transform: translateY(150%);
}

.nav-link:hover span:nth-child(1) {
    transform: translateY(-150%);
}

.nav-link:hover span:nth-child(2) {
    transform: translateY(0);
}

/* ==================== 联系方式 (桌面端) ==================== */
.email-link {
    background-color: var(--white-color);
    color: var(--black-color);

    /* 上下 左右 */
    padding: 0.75rem 1rem;

    border-radius: 4rem;
    font-weight: 500;
    font-size: var(--small-font-size);
    font-family: var(--body-font);
    display: grid;
    place-items: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.email-link span {
    transition: transform 0.2s;
}

.email-link span:nth-child(2) {
    position: absolute;
    transform: translateY(200%);
}

.email-link:hover span:nth-child(1) {
    transform: translateY(-200%);
}

.email-link:hover span:nth-child(2) {
    transform: translateY(0);
}

.phone-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    background-color: #f0f9ff;
    /* 浅蓝色背景，突出且柔和 */
    padding: 10px 18px;
    border-radius: 8px;
    color: #1a56db;
    font-weight: 600;
    transition: all 0.2s ease;
}

.phone-link:hover {
    background-color: #dbeafe;
    transform: translateY(-1px);
}

.phone-icon {
    margin-right: 8px;
    font-size: 1.1rem;
}

/* ========== 导航栏图标旋转 ========== */
.nav-menu-icon-rotate-enter-active,
.nav-menu-icon-rotate-leave-active {
    transition: opacity .3s, transform .4s
}

.nav-menu-icon-rotate-enter-from,
.nav-menu-icon-rotate-leave-to {
    opacity: 0;
    transform: rotate(-90deg);
}
</style>
