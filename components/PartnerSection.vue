<script setup>
const section = ref(null)
const { height } = useWindowSize()
const top = computed(() => height.value && (section.value?.offsetTop ?? 0))
defineExpose({ section, top })
</script>
<template>
  <section id="part3" ref="section" class="part3 bg" data-title="成長夥伴">
    <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
      <h2>Become Our Partners</h2>
      <h3>成長夥伴</h3>
      <div class="main">
        <img src="/img/part3-img.jpg" class="img" />
        <div class="box">
          <span>初始營運的產品服務，想推廣市場，擴大業務版圖</span>
          <span>有穩定的服務量能，想降低開發成本，提升營運效益</span>
          <span>已規模化的產品，想透過資源連結與策略合作，強化市場範疇</span>
          <h4>企業端軟體服務，想加速成長，拓展跨產業機會，<br class="desktop" />歡迎聯絡我們！</h4>
          <NuxtLink to="/#part5" class="scrolling"> 聯絡我們 </NuxtLink>
        </div>
        <br class="clearfix" />
      </div>
    </div>
  </section>
</template>
