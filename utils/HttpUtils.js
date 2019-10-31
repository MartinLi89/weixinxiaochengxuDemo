const Util = require('util.js')
const CommonStaticKey = require('CommonStaticKey.js')
const header_get = {
  'content-type': 'application/json', // 默认值
  'versionCode': '2.9',
  'systemVersion': 'debug',
  'deviceStyle': 'android'
}

const header_post = {
  'content-type': 'application/x-www-form-urlencoded',
  'versionCode': '2.9',
  'systemVersion': 'debug',
  'deviceStyle': 'android',
}


/**
 * urls:连接
 * account:账号
 * pwd:密码
 * callback(res) 回调,若失败则返回空字符串
 */
const login = (urls, account, pwd, callback) => {
  wx.request({
    url: urls,

    method: 'get',
    dataType: 'json',
    data: {
      userName: account,
      passWord: Util.str3DesEncode(pwd, Util.DES3Key),
    },
    header: header_get,
    success: res => {

      var result = res.data;
      //校验返回码是否正确
      var resultCode = result.resultCode;

      if (resultCode != "200") {

        console.log(resultCode + '==+==>' + result.resultMsg)
        return callback("")
      }
      return callback(result);
    },
    fail: error => {
      console.log(error);
      callback("")

    }
  })
}


/**
 * 签入软电话平台
 * urls 网络请求
 * umId um账号
 * callback(res) 返回请求结果
 */
const signin = (urls, umIds, callback) => {
  var parameters = new Map()
  var shiroKey = wx.getStorageSync(CommonStaticKey.CacheValue.shiroKey)
  var shroToken = Util.Sha1Encode(parameters, shiroKey)


  wx.request({
    url: urls,
    method: 'get',
    dataType: 'json',
    data: {
      'umId': umIds,
      'shiroToken': shroToken,
    },
    header: header_get,

    success: res => {

      callback(res.data)
    },
    complete: () => {


    }
  })
}

const getImageSorce = (urls) => {
  console.log(urls)
  return new Promise(function(onsuccess, onfail) {
    wx.request({
      url: urls,
      method: 'get',
      dataType: 'json',
      success: (res) => {
        onsuccess(res.data)
      },
      fail: (err) => {
      
        onfail(err)
      }

    })
  })
}

/**
 * 外呼打电话
 * urls 
 * umId 账号
 * number  对方手机号 外地号码需要加 0
 * requestId 16个0 加6位随机数
 */
const dialOut = (urls, umId, number, requestId) => {
  //对电话单独处理 AES128 加密
  var aeskey = 'xxl0102030456789'
  var iv = '0102030405060708'
  var mNub = Util.Aes128(number, aeskey, iv)

  mNub = Util.replaceWord(mNub)


  var myProgrames = new Map()
  myProgrames.set('number', mNub)
  myProgrames.set('requestId', requestId)
  var shiroKey = wx.getStorageSync(CommonStaticKey.CacheValue.shiroKey)
  var shiroToken = Util.Sha1Encode(myProgrames, shiroKey)






  return new Promise(
    function(resolve, reject) {
      wx.request({

        url: urls,
        method: 'post',
        dataType: 'json',
        data: {
          'number': mNub,
          'requestId': requestId,
          'umId': umId,
          'shiroToken': shiroToken,
        },
        header: header_post,

        success: res => {
          resolve(res.data)

        },
        fail: error => {

          reject(error)

        },
        complete: () => {

        }

      })
    })
}



module.exports = {
  login,
  signin,
  dialOut,
  getImageSorce,
}