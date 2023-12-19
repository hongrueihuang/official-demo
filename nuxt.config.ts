// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Starco｜數據賦能軟體，聯結創造價值',
      meta: [
        {
          name: 'description',
          content:
            'Starco 擁有跨產業資源，幫助小型開發團隊升級產品、擴大並接觸新的市場機會。無論你想增強產品競爭力或想開拓新客群，我們提供豐富資源，最大化提升你的產品商業效益。',
        },
        {
          name: 'keywords',
          content: '',
        },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          property: 'og:locale',
          content: 'zh_TW',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:title',
          content: 'Starco｜數據賦能軟體，聯結創造價值',
        },
        {
          property: 'og:description',
          content:
            'Starco 擁有跨產業資源，幫助小型開發團隊升級產品、擴大並接觸新的市場機會。無論你想增強產品競爭力或想開拓新客群，我們提供豐富資源，最大化提升你的產品商業效益。',
        },
        {
          property: 'og:site_name',
          content: 'Starco',
        },
        {
          property: 'og:image',
          content: 'https://starcofeel.com/img/og-image.jpg',
        },
        {
          property: 'og:url',
          content: 'https://starcofeel.com/',
        },
      ],
      link: [
        { rel: 'stylesheet', type: 'text/css', href: '/css/reset.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/aos.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/slick.min.css' },
        { rel: 'stylesheet', type: 'text/css', href: '/css/style.css' },
        { rel: 'shortcut icon', href: '/img/favicon.png' },
      ],
      script: [
        { src: '/js/jquery.min.js' },
        { src: '/js/aos.js' },
        { src: '/js/slick.min.js' },
        { src: '/js/jquery.validate.min.js' },
      ],
    },
  },
  devtools: { enabled: true },
  components: {
    global: true,
    dirs: ['~/components'],
  },
  modules: ['@vueuse/nuxt', 'nuxt-swiper', '@vee-validate/nuxt'],
  swiper: {
    modules: ['pagination'],
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
})
