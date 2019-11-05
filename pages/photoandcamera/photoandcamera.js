// pages/photoandcamera/photoandcamera.js
Page({

  chooseimage: function() {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图,默认二者都有
      sourceType: ['album', 'camera'], //指定来源是相册还是相机,默认二者都有
      success: function(res) {
        that.setData({
          imgPath: res.tempFilePaths
        })

      },
    })
  },
  chooseVideo: function() {
    var that = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      compressed: 'true',
      maxDuration: 60,
      camera: ['back', 'front'],
      success: function(res) {
        wx.showToast({
          title: res.tempFilePath,
          icon: 'success',
          duration: 2000
        })
        that.setData({
          videoPath: res.tempFilePath
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })


  },


  /**
   * 页面的初始数据
   */
  data: {

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