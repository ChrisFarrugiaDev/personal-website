<template>
    <div class="profile">
        <h1 class="profile__name">
            Chris Farrugia
        </h1>
        <h2 class="profile__role">Full Stack Developer &amp; Linux Enthusiast</h2>
        <p class="profile__intro">
            I build accessible, pixel-perfect digital experiences for the web.
        </p>
        <!-- <nav class="profile__nav" aria-label="In-page jump links">
            <ul class="profile__nav-list">
                <li class="profile__nav-item">
                    <a class="profile__nav-link profile__nav-link--active" href="#about">
                        About
                    </a>
                </li>
                <li class="profile__nav-item">
                    <a class="profile__nav-link" href="#experience">
                        Experience
                    </a>
                </li>
                <li class="profile__nav-item">
                    <a class="profile__nav-link" href="#projects">
                        Projects
                    </a>
                </li>
            </ul>
        </nav> -->
    </div>

</template>
<!-- --------------------------------------------------------------- -->
<script setup lang="ts">

</script>
<!-- --------------------------------------------------------------- -->
<style scoped lang="scss">
.profile {
    border: 1px dashed lime;
    padding-top: 5.6rem;
    
    &__name {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }

    &__link {}

    &__role {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
    }

    &__intro {
        color: #94a2b9;
    }

    &__nav {}

    &__nav-list {}

    &__nav-item {}

    &__nav-link {}

    &__nav-link--active {}
}
</style>