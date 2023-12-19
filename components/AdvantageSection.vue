<script setup>
const section = ref(null)
const { height } = useWindowSize()
const top = computed(() => height.value && (section.value?.offsetTop ?? 0))
const swiperConfig = {
  modules: [SwiperPagination],
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    1020: {
      slidesPerView: 3,
    },
  },
  pagination: {
    clickable: true,
  },
}

defineExpose({ section, top })
</script>

<template>
  <section id="part1" ref="section" class="part1" data-title="核心優勢">
    <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
      <h2>What We Offer?</h2>
      <h3>核心優勢</h3>
      <swiper class="wrapper" v-bind="swiperConfig">
        <swiper-slide class="box">
          <img src="/img/cube_1.png" />
          <b>產品開發技術</b>
          <p>
            累積專業開發技術與豐富的產品整合經驗，協助擴增產品功能與服務，驅動升級、提升市場競爭力。
          </p>
        </swiper-slide>
        <swiper-slide class="box">
          <img src="/img/cube_2.png" />
          <b>多元銷售網絡</b>
          <p>
            集結金融、電商、媒體、不動產等眾多領域的服務經驗優勢，幫助你觸及更多潛在客戶，開創跨產業合作機會。
          </p>
        </swiper-slide>
        <swiper-slide class="box">
          <img src="/img/cube_3.png" />
          <b>股感集團資源</b>
          <p>
            擁有集團豐富資源，協助你執行品牌再造與公關行銷，提升市場能見度，並挹注開發與整合技術，提升品牌商業價值。
          </p>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
