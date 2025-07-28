<template>


    <GradientBackground></GradientBackground>
    <div class="container">
        <div class="left">
            <UserProfile></UserProfile>
        </div>
        <div class="right">

        </div>
    </div>


</template>
<!-- --------------------------------------------------------------- -->
<script setup lang="ts">
import GradientBackground from './components/GradientBackground.vue';
import UserProfile from './components/UserProfile.vue';


</script>
<!-- --------------------------------------------------------------- -->
<style scoped lang="scss">
.container {
    height: 100vh;
    display: flex;
    max-width: 78rem;
    margin: 0 auto;
    color: #e3e9f0;
}

.left {
    flex: 0 0 48%;
    z-index: 2;
    border: crimson 1px dashed;
}

.right {
    flex: 0 0 52%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    border: crimson 1px dashed;
}
</style>