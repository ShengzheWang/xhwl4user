/* 存放正则表达式检验 */

export function isvalidPhone (str) { // 检测是不是11位大陆手机号
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  return reg.test(str)
}

export function isvalidEmail (str) { // 检测是不是邮箱地址
  const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  return reg.test(str)
}

export function isvlaidIDnumber (str) { // 检测是不是身份证号
  const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return reg.test(str)
}

export function isvalidAddress (str) { // 检测是不是住址
  const reg = /^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]+/
  return reg.test(str)
}
export function isvalidPassport (str) { // 检测是不是护照
  const reg = /^[a-zA-Z0-9]{5,17}$/
  return reg.test(str)
}

export function isvalidPass (str) { // 检测是不是港澳通行证
  const reg = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/
  return reg.test(str)
}

export function isnumber (str) { // 检测是不是全为数字
  const reg = /^[0-9]*$/
  return reg.test(str)
}

export function isChinese (str) { // 检测是不是中文
  const reg = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
  return reg.test(str)
}

export function isName (str) {
  const reg = /^[a-zA-Z\u4E00-\u9FA5\uF900-\uFA2D\u0020]*$/
  return reg.test(str)
}
