const CryptoJs = require('crypto_js/crypto-js.js')

/**
 * sha1 加密
 * msgMap 需要加密的 map
 * return 返回map中 values 按照 key的字符串顺序 对应的 values 的 sha1 值 最后base64转码
 */
const Sha1Encode = (msgMap, key) => {
  //排序
  var map = mapSort(msgMap)
  //组装字符串
  var tempStr = ""
  for (var value of map.values()) {
    tempStr = tempStr.concat(value)
  }
  // 对字符串sha1
  var sh1Value = CryptoJs.HmacSHA1(tempStr, key);
  // console.log(tempStr.length==0)
  var bas = CryptoJs.enc.Base64.stringify(sh1Value)
  // console.log(tempStr + "  " + key + '  ' + bas + ' ' + sh1Value.toString(CryptoJs.enc.Base64))
  return bas
  // return sh1Value.toString(CryptoJs.enc.Base64)
}


const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


/**
 * 替换特殊字符串 用于网络请求
 */
const replaceWord = (str) => {
  if (!str || typeof(str) != 'string') {
    return ""
  }
  return str.replace(new RegExp('[+]', 'g'), '%2B')
    .replace(new RegExp('[/]', 'g'), '%2F')
    .replace(new RegExp('[=]', 'g'), '%3D')
    .replace(new RegExp('[ ]', 'g'), '%20')

}

/**
 * aes128加密
 * msg 
 * key
 * iv
 */
const Aes128 = (msg, key, ivs) => {

  return CryptoJs.AES.encrypt(msg, CryptoJs.enc.Utf8.parse(key), {
    mode: CryptoJs.mode.CBC,
    padding: CryptoJs.pad.Pkcs7,
    iv: CryptoJs.enc.Utf8.parse(ivs),
  }).toString()
}

/*3des 解密*/
const str3DesDecode = (msg, key) => {
  if (!msg || !key || msg.length === 0 || key.length === 0) {
    return ""
  }
  var keyHex = CryptoJs.enc.Utf8.parse(key) //utf8转换
  var decrypt = CryptoJs.TripleDES.decrypt(msg, keyHex, {
    // iv: CryptoJs.enc.Utf8.parse(keyHex),
    // mode: CryptoJS.mode.CBC,
    mode: CryptoJs.mode.ECB,
    padding: CryptoJs.pad.Pkcs7
  });

  // //解析数据后转为UTF-8
  return CryptoJs.enc.Utf8.stringify(decrypt);
}
let DES3Key = "1HH798GZDKUO2167W5GM5YNG"
/* 3des加密 */
const str3DesEncode = (msg, key) => {
  if (!msg || !key || msg.length === 0 || key.length === 0) {

    return ""
  }
  var keyHex = CryptoJs.enc.Utf8.parse(key) //utf8转换
  var encoded = CryptoJs.TripleDES.encrypt(msg, keyHex, {
    mode: CryptoJs.mode.ECB,
    padding: CryptoJs.pad.Pkcs7
  });

  return encoded.toString()
}


/**
 * 用于map 按照 key进行 字符串顺序排序
 */
const mapSort = map => {
  var arrayObj = Array.from(map);
  //排序
  arrayObj.sort(function(a, b) {
    return a[0].localeCompare(b[0])
  })

  return new Map(arrayObj)
}

module.exports = {
  formatTime: formatTime,
  str3DesEncode: str3DesEncode,
  str3DesDecode: str3DesDecode,
  DES3Key,
  Sha1Encode,
  mapSort,
  Aes128,
  replaceWord,
}