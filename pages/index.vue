<template>
  <BaseHeader :position="sectionRef[4]?.top ?? 0" @update:position="scrollTo" />
  <StartYourBusiness ref="startYourBusiness" />
  <span class="fix-btn" :style="{ opacity: y >= height - 100 ? '1' : '0' }">
    <a
      v-for="(link, index) in sectionRef"
      :key="index"
      href="#"
      :class="{ active: isSpyActive(link.top, index) }"
      @click.prevent="scrollTo(link.top)"
      ><span>{{ link.section?.dataset.title }}</span></a
    >
  </span>
  <component
    :is="section.component"
    v-for="(section, index) in sectionInfo"
    :key="index"
    :ref="
      (el) => {
        updateSectionRef(el)
      }
    "
  />
</template>

<script setup>
import AdvantageSection from '../components/AdvantageSection.vue'
import SuccessSection from '../components/SuccessSection.vue'
import PartnerSection from '../components/PartnerSection.vue'
import CollaborationSection from '../components/CollaborationSection.vue'
import ContactSection from '../components/ContactSection.vue'

const sectionRef = ref([])

const sectionInfo = ref([
  {
    component: markRaw(AdvantageSection),
  },
  {
    component: markRaw(SuccessSection),
  },
  {
    component: markRaw(PartnerSection),
  },
  {
    component: markRaw(CollaborationSection),
  },
  {
    component: markRaw(ContactSection),
  },
])

const { width, height } = useWindowSize()
const { y } = useWindowScroll()

async function scrollTo(top) {
  await nextTick()
  const offset = width.value > 1370 ? 134 : 0
  window.scrollTo({ left: 0, top: top + offset, behavior: 'smooth' })
}

function isSpyActive(top, index) {
  const nextTop = sectionRef.value[index + 1]?.top
  if (nextTop) {
    return y.value >= top && y.value < nextTop
  }
  return y.value >= top
}

function updateSectionRef(element) {
  if (element.section) {
    const index = sectionRef.value.findIndex((i) => i.section.id === element.section.id)
    return index === -1 && sectionRef.value.push(element)
  }
}
</script>

<style>
body,
html {
  margin: 0;
}
</style>
