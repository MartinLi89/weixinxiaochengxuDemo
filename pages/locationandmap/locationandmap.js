// pages/locationandmap/locationandmap.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 39.93111,
    longitude: 116.199167,

    markers: [{
        id: 1,
        latitude: 39.93111,
        longitude: 116.199167,
        iconPath: '',
        label: {
          content: '我的位置', //标记点文字
          color: '#0000FF', //标记点文本颜色
          bgColor: '#FFFF00', //标记点文本背景颜色
          fontSize: 20
        }

      }, {

        latitude: 39.92528,
        longitude: 116.20111,
        iconPath: '',

      }

    ]

  },
  chooseLocation: function() {
    wx.chooseLocation({
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  openLocation: function() {
    wx.getLocation({
      type: 'gcj02',
      altitude: true,
      success: function(res) {
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          scale: 16, //5-18 默认为16

          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function(res) {},
      complete: function(res) {},
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