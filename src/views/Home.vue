<template>
    <div class="home">
        <!-- 导航栏 -->
        <NavBar />

        <main>
            <section class="hero">
                <div class="container hero-content">
                    <h1 class="hero-title">湛江伟力机电有限公司</h1>
                    <p class="hero-subtitle">专业提供高效、可靠的机电解决方案</p>
                    <router-link to="/services" class="button-primary">查看服务项目</router-link>
                </div>
            </section>

        </main>

        <footer class="footer">
            <div class="container">
                <p>&copy; 2025 湛江伟力机电有限公司. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
.home {
    /* 上边距，防止内容被导航栏遮挡 */
    padding-top: calc(var(--header-height) + 2rem);

    display: flex;
    flex-direction: column;
}

.hero {
    height: 100vh;
    padding: 8rem 0;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    background-image: url('@/assets/images/picture1.jpeg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: var(--black-color);
    color: var(--white-color);
    text-align: center;
}

.hero-title {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.button-primary {
    background-color: var(--first-color);
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 2rem;
    font-weight: 600;
    transition: transform 0.3s;
    display: inline-block;
}

.button-primary:hover {
    transform: translateY(-3px);
    filter: brightness(1.2);
}

.footer {
    padding: 2rem 0;
    background-color: #1a1a1a;
    color: #888;
    text-align: center;
}

@media screen and (max-width: 1150px) {
    .hero-title {
        font-size: 2rem;
    }
}
</style>
