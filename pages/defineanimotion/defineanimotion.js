// pages/defineanimotion/defineanimotion.js
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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //创建动画实例
    this.animation = wx.createAnimation({

    })
  },
  rotate: function() { //旋转
    this.animation.rotate(Math.random() * 720 - 360).step();
    this.doAnimation()
  },
  scale: function() { //缩放
    this.animation.scale(Math.random() * 2).step()
    this.doAnimation()
  },
  translate: function() { //平移
    this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
    this.doAnimation()

  },
  skew: function() { //偏斜
    this.animation.skew(Math.random() * 180 - 90, Math.random() * 180 - 90).step()
    this.doAnimation()
  },
  doAnimation: function() {
    this.setData({
      animation: this.animation.export()
    })

  },
  //旋转并缩放
  rotateAndScale: function() {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .step();
    this.doAnimation()
  },

  //旋转后缩放
  rotateThenScale: function() {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()

    this.doAnimation()
  },
  all: function() {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    this.doAnimation()
  },
  allInQueue: function() {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
      .skew(Math.random() * 90, Math.random() * 90).step()
    this.doAnimation()
  },
  reset: function() {
    this.animation.rotate(0, 0)
      .scale(1)
      .translate(0, 0)
      .skew(0, 0)
      .step({
        duration: 0
      })
    this.doAnimation()
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