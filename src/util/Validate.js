/*存放正则表达式检验*/


export function isvalidPhone(str) {
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  return reg.test(str)
}

export function isvalidEmail(str){
  const reg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  return reg.test(str);
}

export function isvlaidIDnumber(str){
  const reg=/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return reg.test(str);
}

export function isvalidAddress(str){
  const reg=/^(?=.*?[\u4E00-\u9FA5])[\dA-Za-z\u4E00-\u9FA5]+/
  return reg.test(str);
}
export function isvalidPassport(str){
  const reg=/^[a-zA-Z0-9]{5,17}$/
  return reg.test(str);
}

export function isvalidPass(str){
  const reg=/^[HMhm]{1}([0-9]{10}|[0-9]{8})$/
  return reg.test(str);
}

export function isnumber(str){
  const reg=/^[0-9]*$/
  return reg.test(str);
}


export function isName(str){
  const reg=/^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
  return reg.test(str);
}
