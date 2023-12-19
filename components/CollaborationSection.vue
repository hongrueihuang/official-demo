<script setup>
const section = ref(null)
const { height } = useWindowSize()
const top = computed(() => height.value && (section.value?.offsetTop ?? 0))
defineExpose({ section, top })
</script>
<template>
  <section id="part4" ref="section" class="part4 bg" data-title="合作流程">
    <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
      <h2>How We Collaborate?</h2>
      <h3>合作流程</h3>
      <div class="center">
        <div>
          <i>Step</i>
          <b>1</b>
          <p>我們的產品地圖介紹<br />與市場需求說明</p>
        </div>
        <div>
          <i>Step</i>
          <b>2</b>
          <p>你的產品介紹<br />與客群市場說明</p>
        </div>
        <div>
          <i>Step</i>
          <b>3</b>
          <p>雙方技術整合<br />與產品加值升級</p>
        </div>
        <div>
          <i>Step</i>
          <b>4</b>
          <p>進入新市場<br />拓產新客群</p>
        </div>
      </div>
    </div>
  </section>
</template>
