<template>
  <section id="kv" class="kv" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
    <img src="/img/kv2-left.png" class="left desktop" />
    <img src="/img/kv2-right.png" class="right desktop" />
    <div class="wrapper" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700">
      <div>
        <h1>
          數據賦能軟體
          <br />聯結創造價值
        </h1>
        <h2>Star Your Business</h2>
        <h2>Collaborate with Us.</h2>
        <p>跨產業資源，幫助產品型開發團隊升級產品、擴大並接觸新的市場機會。</p>
        <p>
          無論你想增強產品競爭力，或想開拓新客群，<br
            class="pad"
          />我們提供豐富資源，提升你的產品商業效益。
        </p>
      </div>
      <a href="#" class="scrolling cover-vlink" @click.prevent="scrollTo">
        <img src="/img/kv-scroll-txt.png" class="txt" />
        <i />
        <img src="/img/kv-scroll.png" class="icon" />
      </a>
    </div>
    <video id="video" autoplay muted loop playsinline class="desktop">
      <source src="/img/kv.mp4" type="video/mp4" />
    </video>
    <video id="video" autoplay muted loop playsinline class="pad mobile">
      <source src="/img/kv-m.mp4" type="video/mp4" />
    </video>
  </section>
</template>

<script setup>
const { height } = useWindowSize()

function scrollTo() {
  window.scrollTo({ left: 0, top: height.value, behavior: 'smooth' })
}
</script>
