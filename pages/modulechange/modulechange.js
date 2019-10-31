// pages/modulechange/modulechange.js
const app = getApp() //获取全局应用实例
var util = require('../util_test/util_test.js') //获取util_test模块应用实例
var indexMsg = '我是来自index.js的变量'; //定义本模块的变量
function indexFunc() { //定义本模块的函数
  return '我是来自index.js的函数'
}
Page({


  /**
   * 页面的初始数据
   */
  data: {
    msg1: app.globalMsg, //全局变量
    msg2: app.globalFunc(), //全局函数
    msg3: indexMsg, //本模块变量
    msg4: indexFunc(), //本模块函数
    msg5: util.utilMsg, //使用utiltest中变量
    msg6: util.utilFunc() //使用utiltest中函数

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

  }
})