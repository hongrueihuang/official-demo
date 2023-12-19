<template>
  <header :class="{ 'scroll fix': y >= height - 100 }">
    <div class="wrapper">
      <NuxtLink to="/">
        <img src="/img/logo.png" />
        <img src="/img/logo_.png" />
      </NuxtLink>
      <a
        v-if="position && route.name === 'index'"
        href="#"
        class="scrolling"
        @click.prevent="emits('update:position', position)"
        >聯絡我們</a
      >
      <br class="clearfix" />
    </div>
  </header>
</template>

<script setup>
const { y } = useWindowScroll()
const { height } = useWindowSize()
const route = useRoute()
defineProps({
  position: {
    type: Number,
    default: 0,
  },
})

const emits = defineEmits(['update:position'])
</script>
