<template>
    <div ref="bg" class="gradient-bg"></div>
</template>

<!-- --------------------------------------------------------------- -->

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';

const bg = ref<HTMLElement | null>(null);

function handleMouseMove(e: MouseEvent) {
    if (!bg.value) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const xp = (e.clientX / vw) * 100;
    const yp = (e.clientY / vh) * 100;


    bg.value.style.background = `
    radial-gradient(
      500px at ${xp}% ${yp}%,
      rgba(59,130,246,0.12),
      transparent 80%
    )
  `;
}

function handleMouseLeave() {
    if (!bg.value) return;
    bg.value.style.background = '';
}


onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
});

onBeforeUnmount(() => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseleave', handleMouseLeave);
});

</script>

<!-- --------------------------------------------------------------- -->

<style scoped lang="scss">
.gradient-bg {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 0;
    transition: background 0.2s;
    /* Optional polish: smooth it out with blur for a Brittany feel */
    /* backdrop-filter: blur(10px); */
}
</style>