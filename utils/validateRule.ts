export function isRequired(value: string): string | boolean {
  if (!value) {
    return '欄位必填'
  }
  return true
}

export function isValidEmail(value: string): string | boolean {
  const regex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
  if (!regex.test(value)) {
    return '請輸入正確 E-Mail'
  }
  return true
}
