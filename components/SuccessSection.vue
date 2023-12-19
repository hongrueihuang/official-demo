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
  <section id="part2" ref="section" class="part2 bg" data-title="成功案例">
    <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
      <h2>Success Together</h2>
      <h3>成功案例</h3>
      <swiper v-bind="swiperConfig" class="wrapper">
        <swiper-slide class="box">
          <div class="center">
            <img src="/img/ORDERLY.png" />
            <i>奧特圖</i>
            <hr />
            <b>升級產品功能｜擴大服務客群</b>
            <p>
              協助重新規劃與拓展雲端基礎建設，以降低維運需求與應對多變動的市場環境。滿足客戶進階需求，成功開啟與大型零售商的合作機會，目前更持續開創新產品線。
            </p>
          </div>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="center">
            <img src="/img/uwow.png" />
            <i>Uwow 有我體驗</i>
            <hr />
            <b>多元加值服務｜承接跨產業客戶</b>
            <p>
              整合多樣化產品資源，支援有我體驗創造客戶加值服務。有我體驗不僅執行客戶網站建置等資訊專案，更提供數據分析及行銷相關技術服務，觸及金融、不動產、政府機構等眾多產業合作機會。
            </p>
          </div>
        </swiper-slide>
        <swiper-slide class="box">
          <div class="center">
            <img src="/img/WishMobile.png" />
            <i>威許移動</i>
            <hr />
            <b>擴展服務項目｜發展新商業模式</b>
            <p>
              導入顧客數據分析技術和專業知識，擴大威許移動既有產品的服務範疇，深化品牌用戶經營，拓展新商業模式。
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
