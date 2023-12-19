<template>
  <footer>
    <div class="wrapper">
      <div class="top">
        <div class="left">
          <img src="/img/logo.png" />
          <!-- <form class="form">
            <label for="footeremail"> 訂閱電子報，掌握產業新知，獲得我們的最新資訊！ </label>
            <fieldset>
              <input
                id="footer-email"
                type="email"
                placeholder="請輸入你的 Email"
                name="footeremail"
              />
              <button type="submit">訂閱</button>
            </fieldset>
            <p>感謝你的訂閱！</p>
          </form> -->
          <VeeForm v-slot="{ isSubmitting }" class="form" @submit="onSubscribe">
            <label for="footermail"> 訂閱電子報，掌握產業新知，獲得我們的最新資訊！ </label>
            <fieldset>
              <VeeField
                id="footermail"
                type="email"
                placeholder="請輸入你的 Email"
                name="footeremail"
                :rules="[isRequired, isValidEmail]"
              />
              <button type="submit" :disabled="isSubmitting">訂閱</button>
            </fieldset>
            <VeeErrorMessage name="footeremail" style="color: #ffbe00" />
          </VeeForm>
        </div>
        <div class="link">
          <b>感感集團</b>
          <a href="https://stockfeel.com.tw/" target="_blank">股感媒體</a>
          <a href="https://biz.stockfeel.com.tw/" target="_blank">股感資訊</a>
          <a href="https://uwow.com.tw/" target="_blank">有我體驗</a>
        </div>
        <div class="link">
          <b>關於我們</b>
          <a href="https://www.104.com.tw/company/1a2x6biyc1" target="_blank">人才招募</a>
          <a href="mailto:hi@starcofeel.com">聯絡我們</a>
          <a href="privacy-policy.html">隱私權政策</a>
          <a href="https://www.facebook.com/starco.feel" target="_blank"
            ><img src="/img/facebook.png" /> Facebook</a
          >
        </div>
        <br class="clearfix" />
      </div>
      <div class="bottom">
        <span
          >聯想感行銷科技股份有限公司 / <br class="mobile" />105 台北市松山區民生東路三段 135 號 3
          樓</span
        >
        <i>© Starco. All rights reserved</i>
        <br class="clearfix" />
      </div>
    </div>
  </footer>
</template>

<script setup>
import { isRequired, isValidEmail } from '@/utils/validateRule'
function onSubscribe(values) {
  const data = { type: 'subscribe', email: values.footeremail }

  $('#loading').addClass('show')

  $.ajax({
    type: 'POST',
    url: 'https://script.google.com/macros/s/AKfycbwiR6ugvHqKi_8j6kak35SSNMgl4BQMH_DZWLnePjookM9xerBavj6D4u6s2DKjjIk/exec',
    data,
    success: function (res) {
      if (res === 'success') {
        alert('感謝你的訂閱！')
        $('#loading').removeClass('show')
        $('footer fieldset').hide()
        $('footer p').fadeIn()
      } else {
        alert('送出失敗，請重新嘗試！')
        $('#loading').removeClass('show')
      }
    },
    error: function () {
      alert('送出失敗，請重新嘗試！')
      $('#loading').removeClass('show')
    },
  })
}

// function isRequired(value) {
//   if (!value) {
//     return '欄位必填'
//   }
//   return true
// }

// function isValidEmail(value) {
//   const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
//   if (!regex.test(value)) {
//     return '請輸入正確 E-Mail'
//   }
//   return true
// }
// onMounted(() => {
//   $(function () {
//     $('footer form').validate({
//       onkeyup: function (element) {
//         // 去除左側空白
//         const value = this.elementValue(element).replace(/^\s+/g, '')
//         $(element).val(value)
//       },
//       rules: {
//         footeremail: {
//           required: true,
//           strictEmail: true,
//         },
//       },
//       messages: {
//         footeremail: {
//           required: '欄位必填',
//           email: '請輸入正確 E-Mail',
//           strictEmail: '請輸入正確 E-Mail',
//         },
//       },
//       submitHandler: function (form) {
//         const data = {
//           type: 'subscribe',
//           email: $(form).find('#footer-email').val(),
//         }

//         $('#loading').addClass('show')

//         $.ajax({
//           type: 'POST',
//           url: 'https://script.google.com/macros/s/AKfycbwiR6ugvHqKi_8j6kak35SSNMgl4BQMH_DZWLnePjookM9xerBavj6D4u6s2DKjjIk/exec',
//           data,
//           success: function (res) {
//             if (res === 'success') {
//               alert('感謝你的訂閱！')
//               $('#loading').removeClass('show')
//               $('footer fieldset').hide()
//               $('footer p').fadeIn()
//             } else {
//               alert('送出失敗，請重新嘗試！')
//               $('#loading').removeClass('show')
//             }
//           },
//           error: function () {
//             alert('送出失敗，請重新嘗試！')
//             $('#loading').removeClass('show')
//           },
//         })
//       },
//     })

//     // $('footer input').on('blur keyup', function (e) {
//     //   if ($('footer form').valid()) {
//     //     $('footer form button').prop('disabled', false)
//     //     $('footer form button').removeClass('disabled')
//     //   } else {
//     //     $('footer form button').prop('disabled', true)
//     //     $('footer form button').addClass('disabled')
//     //   }
//     //   e.preventDefault()
//     // })
//   })
// })
</script>
