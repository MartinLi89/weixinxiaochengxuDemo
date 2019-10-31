// pages/wxform/wxforms.js
var C; //定义全局变量,用于存放人命币的值
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  calc: function(e) { //计算按钮事件函数
    C = parseInt(e.detail.value.cels); //将input组件的value值转化为整数类型,并赋值
    this.setData({
      M: (C / 6.8801).toFixed(4), //小数点后保留4位有效数字
      Y: (C / 8.7873).toFixed(4), //小数点后保留4位有效数字
      G: (C / 0.8805).toFixed(4), //小数点后保留4位有效数字
      O: (C / 7.8234).toFixed(4), //小数点后保留4位有效数字
      H: (C / 0.0061).toFixed(4), //小数点后保留4位有效数字
      R: (C / 0.0610).toFixed(4), //小数点后保留4位有效数字

    })
  },
  reset: function() {
    this.setData({
      M: "",
      Y: "",
      G: "",
      O: "",
      H: "",
      R: "",
    })
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