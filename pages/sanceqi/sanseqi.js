// pages/sanceqi/sanseqi.js
var letters = '0123456789ABCDEF';
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.createColor()
    this.timer()
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
  timer:function(){
    var that=this;
    setInterval(()=>{
      that.createColor()
    },2000)
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  changeColor:function(){

    this.createColor()
  },
  createColor: function() {
    var color = [];

    for (var i = 0; i < 3; i++) {
      var c = '#';
      for (var j = 0; j < 8; j++) {
        c += letters[Math.floor(Math.random() * 16)]
      }
      color.push(c)
    }

    this.setData({
      color1: color[0],
      color2: color[1],
      color3: color[2],
    })

  }
})