<script setup>
import { isRequired, isValidEmail } from '../utils/validateRule'
const section = ref(null)
const { width } = useWindowSize()
const top = computed(() => width.value && (section.value?.offsetTop ?? 0))

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: {
    name: isRequired,
    jobtitle: isRequired,
    company: isRequired,
    tel: isRequired,
    mail: [isRequired, isValidEmail],
    producturl: isRequired,
    checked: isChecked,
  },
  initialValues: {
    gender: '先生',
    checked: false,
    other: '',
  },
})
function isChecked(value) {
  if (!value) return '欄位必填'
  return true
}

const [name, nameAttrs] = defineField('name')
const [jobtitle, jobtitleAttrs] = defineField('jobtitle')
const [company, companyAttrs] = defineField('company')
const [tel, telAttrs] = defineField('tel')
const [mail, mailAttrs] = defineField('mail')
const [producturl, producturlAttrs] = defineField('producturl')
const [other, otherAttrs] = defineField('other')
const [gender, genderAttrs] = defineField('gender')
const [checked, checkedAttrs] = defineField('checked')

const onSubmit = handleSubmit((values) => {
  const data = {
    type: 'information',
    ...values,
  }
  delete data.checked

  $('#loading').addClass('show')

  $.ajax({
    type: 'POST',
    url: 'https://script.google.com/macros/s/AKfycbwiR6ugvHqKi_8j6kak35SSNMgl4BQMH_DZWLnePjookM9xerBavj6D4u6s2DKjjIk/exec',
    data,
    success: function (res) {
      if (res === 'success') {
        alert('資料已送出成功！ 專人將於 1 - 3 個工作天內與您聯絡。')
        $('.part5 form').trigger('reset')
      } else {
        alert('送出失敗，請重新嘗試！')
      }

      $('#loading').removeClass('show')
    },
    error: function () {
      alert('送出失敗，請重新嘗試！')
      $('#loading').removeClass('show')
    },
  })
})

// onMounted(() => {
//   $(function () {
//     $.validator.addMethod(
//       'strictEmail',
//       function (value) {
//         emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
//         if (value.search(emailRule) !== -1) {
//           return true
//         } else {
//           return false
//         }
//       },
//       '請輸入正確 E-Mail 格式',
//     )

//     $('.part5 form').validate({
//       onkeyup: function (element) {
//         // 去除左側空白
//         const value = this.elementValue(element).replace(/^\s+/g, '')
//         $(element).val(value)
//       },
//       rules: {
//         name: {
//           required: true,
//         },
//         jobtitle: {
//           required: true,
//         },
//         company: {
//           required: true,
//         },
//         tel: {
//           required: true,
//         },
//         mail: {
//           required: true,
//           strictEmail: true,
//         },
//         producturl: {
//           required: true,
//         },
//         check: {
//           required: true,
//         },
//       },
//       messages: {
//         name: {
//           required: '欄位必填',
//         },
//         jobtitle: {
//           required: '欄位必填',
//         },
//         company: {
//           required: '欄位必填',
//         },
//         tel: {
//           required: '欄位必填',
//         },
//         mail: {
//           required: '欄位必填',
//           email: '請輸入正確 E-Mail',
//           strictEmail: '請輸入正確 E-Mail',
//         },
//         producturl: {
//           required: '欄位必填',
//         },
//         check: {
//           required: '欄位必填',
//         },
//       },
//       submitHandler: function (form) {
//         const data = {
//           type: 'information',
//           name: $(form).find('[name=name]').val(),
//           gender: $(form).find('[name=gender]:checked').val(),
//           jobtitle: $(form).find('[name=jobtitle]').val(),
//           company: $(form).find('[name=company]').val(),
//           tel: $(form).find('[name=tel]').val(),
//           mail: $(form).find('[name=mail]').val(),
//           producturl: $(form).find('[name=producturl]').val(),
//           content: $(form).find('#other').val(),
//         }

//         $('#loading').addClass('show')

//         $.ajax({
//           type: 'POST',
//           url: 'https://script.google.com/macros/s/AKfycbwiR6ugvHqKi_8j6kak35SSNMgl4BQMH_DZWLnePjookM9xerBavj6D4u6s2DKjjIk/exec',
//           data,
//           success: function (res) {
//             if (res === 'success') {
//               alert('資料已送出成功！ 專人將於 1 - 3 個工作天內與您聯絡。')
//               $('.part5 form').trigger('reset')
//             } else {
//               alert('送出失敗，請重新嘗試！')
//             }

//             $('#loading').removeClass('show')
//           },
//           error: function () {
//             alert('送出失敗，請重新嘗試！')
//             $('#loading').removeClass('show')
//           },
//         })
//       },
//     })

//     $('.part5 form button').click(function () {
//       $('.part5 form').valid()
//     })
//   })
// })
defineExpose({ section, top })
</script>
<template>
  <section id="part5" ref="section" class="part5" data-title="聯絡我們">
    <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
      <div class="txt">
        <h2>Ready to Take the Next Step?</h2>
        <h3>與 Starco 一起展開行動</h3>
        <span>擁有專業產品開發技術，協助升級你的產品與服務</span>
        <span>提供銷售網絡與產業資源，協助拓展市場與客群</span>
        <span>集結豐富集團資源，協助提升你的品牌商業價值</span>
      </div>
    </div>
    <form
      id="part5"
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-delay="1000"
      @submit="onSubmit"
    >
      <h3>聯絡我們</h3>
      <fieldset>
        <input
          id="name"
          v-model="name"
          v-bind="nameAttrs"
          type="text"
          name="name"
          :class="{ focus: name }"
        />
        <label for="name"
          >聯絡人姓名 <sup>＊</sup><span class="errMsg">{{ errors.name }}</span></label
        >
        <div>
          <label>
            <input
              v-model="gender"
              v-bind="genderAttrs"
              type="radio"
              value="先生"
              name="gender"
              :checked="gender === '先生'"
            />
            <i /> 先生
          </label>
          <label>
            <input
              v-model="gender"
              v-bind="genderAttrs"
              type="radio"
              value="女士"
              name="gender"
              :checked="gender === '女士'"
            />
            <i /> 女士
          </label>
        </div>
      </fieldset>
      <fieldset>
        <input
          id="jobtitle"
          v-model="jobtitle"
          v-bind="jobtitleAttrs"
          type="text"
          name="jobtitle"
          :class="{ focus: jobtitle }"
        />
        <label for="jobtitle"
          >職稱 <sup>＊</sup><span class="errMsg">{{ errors.jobtitle }}</span></label
        >
      </fieldset>
      <fieldset>
        <input
          id="company"
          v-model="company"
          v-bind="companyAttrs"
          type="text"
          name="company"
          :class="{ focus: company }"
        />
        <label for="company"
          >公司名稱 <sup>＊</sup><span class="errMsg">{{ errors.company }}</span></label
        >
      </fieldset>
      <fieldset>
        <input
          id="tel"
          v-model="tel"
          v-bind="telAttrs"
          type="tel"
          minlength="9"
          maxlength="10"
          name="tel"
          :class="{ focus: tel }"
        />
        <label for="tel"
          >聯絡電話 <sup>＊</sup><span class="errMsg">{{ errors.tel }}</span></label
        >
      </fieldset>
      <fieldset>
        <input
          id="mail"
          v-model="mail"
          v-bind="mailAttrs"
          type="email"
          name="mail"
          :class="{ focus: mail }"
        />
        <label for="mail"
          >電子郵件 <sup>＊</sup><span class="errMsg">{{ errors.mail }}</span></label
        >
      </fieldset>
      <fieldset>
        <input
          id="producturl"
          v-model="producturl"
          v-bind="producturlAttrs"
          type="text"
          name="producturl"
          :class="{ focus: producturl }"
        />
        <label for="producturl"
          >主要產品網址 <sup>＊</sup><span class="errMsg">{{ errors.producturl }}</span></label
        >
      </fieldset>
      <fieldset>
        <textarea
          id="other"
          v-model="other"
          v-bind="otherAttrs"
          type="text"
          name="other"
          :class="{ focus: other }"
        />
        <label for="other">簡述您的合作想法</label>
      </fieldset>
      <div class="check">
        <label>
          <input id="check" v-model="checked" v-bind="checkedAttrs" type="checkbox" name="check" />
          <span
            >我已閱讀並同意 STARCO 的「<a href="privacy-policy.html" target="_blank">隱私權政策</a
            >」</span
          >
          <span class="errMsg">
            {{ errors.checked }}
          </span>
        </label>
      </div>
      <button type="submit">送出</button>
    </form>
  </section>
</template>

<style scoped>
.errMsg {
  color: #ed7978;
}
</style>
