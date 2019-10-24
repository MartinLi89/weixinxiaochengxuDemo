// pages/flutes/fluteintex.js

const CommonStaticKey = require('../../utils/CommonStaticKey.js')
const Util = require('../../utils/util.js')
const HttpUtils = require('../../utils/HttpUtils.js')
const ConfigUtil = require('../../utils/ConfigUtil.js')


const CryptoJs = require('../../utils/crypto_js/crypto-js.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

    url111: ConfigUtil.rootUrl +'login.do',
    urlSignin: ConfigUtil.rootUrl + 'communication/singIn.do',
    urlDelOut: ConfigUtil.rootUrl + 'communication/dialOut.do',
    accont: 'weilian993'.toUpperCase(),
    pwd: 'PAICC998',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  //登陆
  getResource: function() {
    HttpUtils.login(this.data.url111,
      this.data.accont,
      this.data.pwd,
      function(result) {
        if (result.length === 0) {
          return
        }

        //获取返回参数
        var shiroKey = result.data.shiroKey
        try {
          wx.setStorageSync(CommonStaticKey.CacheValue.shiroKey, shiroKey)
          console.log("登陆成功")
        } catch (e) {
          console.log(e)
        }


      })
  },
  //签入
  signing: function() {
    var accont = this.data.accont
    HttpUtils.signin(this.data.urlSignin,
      accont,
      function(result) {

        console.log(result)
        if (result.resultCode == '0') {

          console.log(result.resultMsg)
        }
      }
    )
  },
  //外呼
  callOut: function() {

    console.log("okj")
    HttpUtils.dialOut(this.data.urlDelOut,
        this.data.accont,
        // '17621150570',
        '15821265020',
        '0000' + '0000' + '0000' + '0000' + '123456')
      .then((result) => {
        console.log(result)
      })
      .catch(() => {

      })

  },
  //测试
  test: function() {
    var password = this.data.pwd

    var key = "1HH798GZDKUO2167W5GM5YNG"
    var keyHex = CryptoJs.enc.Utf8.parse(key) //utf8转换


    var encrypted = CryptoJs.TripleDES.encrypt(password, keyHex, {
      mode: CryptoJs.mode.ECB,
      padding: CryptoJs.pad.Pkcs7
    });

    // var encrypted = CryptoJs.enc.Base64.parse(CryptoJs.enc.Utf8.parse(encrypted) )

    console.log(encrypted = encrypted.toString());


    // var or_result = CryptoJs.enc.Base64.stringify(encrypted)

    var decrypt = CryptoJs.TripleDES.decrypt(encrypted, keyHex, {
      // iv: CryptoJs.enc.Utf8.parse(keyHex),
      // mode: CryptoJS.mode.CBC,
      mode: CryptoJs.mode.ECB,
      padding: CryptoJs.pad.Pkcs7
    });

    // //解析数据后转为UTF-8
    var decrypt = CryptoJs.enc.Utf8.stringify(decrypt)
    console.log(decrypt)

  },
  //测试
  base64: function() {
    var aeskey = 'xxl0102030456789'
    var iv = '0102030405060708'
    var aaa = "123456"
    aaa = Util.Aes128(aaa, aeskey, iv)

    aaa = Util.replaceWord(aaa)

    console.log(aaa)

    // aaa.replace("aa","adf")



    // var str = "123456"
    // var abc = Base64.encode(str)
    // var ccc = Base64.decode('123456213erfvdc')
    // console.log(abc)

    // var strin = "123456"
    // var msg = CryptoJs.enc.Utf8.parse(strin) //utf8转换
    // console.log(typeof(msg))
    // var result = CryptoJs.enc.Base64.stringify(msg) //base64 encode

    // var or_result = CryptoJs.enc.Base64.parse(result) //base64 decode

    // var or_msg = CryptoJs.enc.Utf8.stringify(or_result) //反utf8转换



    // console.log(result)
    // console.log(or_result.toString())
    // console.log(or_msg)
  },
  desTest1: function() {
    var msg = 'http://www.jb51.net'
    // var keys ='1HH789GZDKUO2167w5GM5YNG'
    var keys = 'qXSdHWfbSZaaLeHBRhLgxBiG'

    var des3en = DES3.encrypt_ECB(keys, msg.toString())

    var oritional_msg = DES3.decrypt_ECB(keys, des3en)
    console.log(des3en + '<111>' + oritional_msg)
  },



  //测试
  desTest: function() {
    // var aaa = 'abc'
    // console.log(aaa.toUpperCase())
    // var keyHex = CryptoJs.enc.Utf8.parse('12345678')
    // console.log(CryptoJs)

    // var encrypted = CryptoJs.DES.encrypt('12345678', keyHex, {
    //   mode: CryptoJs.mode.ECB,
    //   padding: CryptoJs.pad.Pkcs7
    // })
    // console.log(encrypted.toString())
    var password = "PAICC998"
    var key = Util.DES3Key
    var str = Util.str3DesEncode(password, key)

    console.log(str)
    var msg = CryptoJs.enc.Utf8.parse(str) //utf8转换
    var result = CryptoJs.enc.Base64.stringify(msg) //base64 encode
    result = Base64.encode(str);
    console.log(result)

    var decode = Util.str3DesDecode(str, key);
    console.log(decode);

  }
})