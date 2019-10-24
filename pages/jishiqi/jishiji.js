// pages/jishiqi/jishiji.js
var num = 60;
var timerId; //计时器ID
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 60,
    timerId: 111,
    hidden: true,


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    setTimeout( //只调用一次
      () => {
        console.log("timeOut")
        that.show()

        // that.setData({
        //   hidden: false
        // })
      }, 2000)

  },
  show: function() {
    var that = this;
    console.log('ok')
    that.setData({
      hidden: false
    })
  },
  start: function() {
    var that = this;
    timerId = setInterval( //每隔一段时间调用一次
      () => {
        that.timer()
      }, 1000)
  },
  stop: function() {

    clearInterval(timerId)
  },
  timer: function() {
    var that = this;
    if (num > 0) {
      that.setData({
        num: num=num - 1
      })
    } else {
      that.stop()
      that.setData({
        num: 0
      })
      
    }

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