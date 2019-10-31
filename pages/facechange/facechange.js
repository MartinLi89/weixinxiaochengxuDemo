// pages/facechange/facechange.js

var HttpUtils = require('../../utils/HttpUtils.js')
var url = 'https://gank.io/api/data/福利/20/'

function createRandomIndex(flag) {

  return Math.floor(Math.random() * flag);
}



Page({

  /**
   * 页面的初始数据
   */
  data: {


  },
  changeFace: function() {
    var inde = createRandomIndex(20)
    console.log(inde)
    this.setData({

      index: inde
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    var inde=createRandomIndex(2)+1;
    HttpUtils.getImageSorce(url + inde)
      .then(function(data) {
        console.log(data)
        that.setData({
          imgArr: data.results,
          index: 0
        })

      })
      .catch((error) => {
        console.log(error)
      })
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
    var that = this;
    wx.onAccelerometerChange(function(res) {
      if (res.x > 0.5 || res.y > 0.5 || res.z > 0.5) {
        wx.showToast({
          title: '摇一摇成功',
          icon: 'success',
          duration: 2000
        })
        that.changeFace()
      }
    })


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