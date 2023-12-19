<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>

  <div id="loading" :class="{ show: isLoading }">
    <div id="load-ring">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<script setup>
const isLoading = ref(false)
const nuxtApp = useNuxtApp()
nuxtApp.hook('page:start', () => {
  isLoading.value = true
})

nuxtApp.hook('page:finish', () => {
  isLoading.value = false
})
onMounted(() => {
  AOS.init({
    once: true,
    offset: 0,
  })
  // $(document).ready(function () {
  //   $('.part5 input:not(#check), .part5 textarea').focusout(function () {
  //     if ($(this).val().length === 0) {
  //       $(this).removeClass('focus')
  //     } else {
  //       $(this).addClass('focus')
  //     }
  //   })
  // })
})
</script>

<style>
body,
html {
  margin: 0;
}
</style>
