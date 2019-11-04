// pages/freedomdraw/freedomdraw.js
Page({
  isClear: false,
  /**
   * 页面的初始数据
   */
  data: {
    pen: 5,
    color: '#ff0000'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.ctx = wx.createCanvasContext('myCanvas', this)
  },
  touchStart: function(e) {
    console.log('ok')
    this.x1 = e.changedTouches[0].x;
    this.y1 = e.changedTouches[0].y;
    console.log(this.x1)
    var ctxx = this.ctx;
    if (this.isClear) {
      ctxx.setStrokeStyle('#FFFFFF');
      ctxx.setLineCap('round');
      ctxx.setLineJoin('round');
      ctxx.setLineWidth(20);
      ctxx.beginPath();


    } else {
      ctxx.setStrokeStyle(this.data.color);
      ctxx.setLineWidth(this.data.pen);
      ctxx.setLineCap('round');
      ctxx.beginPath();
    }
  },
  touchMove: function(e) {
    var changeTouch = e.changedTouches[0];

    var x2 = changeTouch.x;
    var y2 = changeTouch.y;
    var cts = this.ctx;
    if (this.isClear) {
      cts.moveTo(this.x1, this.y1);
      cts.lineTo(x2, y2);


    } else {
      cts.moveTo(this.x1, this.y1)
      cts.lineTo(x2, y2)

    }
    cts.stroke();
    this.x1 = x2;
    this.y1 = y2;
    cts.draw(true);
  },
  touchEnd: function() {

  },
  penSelect: function(e) {
    this.setData({
      pen: parseInt(e.currentTarget.dataset.param)

    })
    this.isClear = false
  },
  colorSelect: function(e) {
    this.setData({
      color: e.currentTarget.dataset.param //根据data-param设置pen值
    })
    this.isClear = false;

  },
  clear: function() {
    this.isClear = true;
  },
clearAll:function(){
  this.setData({
    pen:5,
    color:'#000000'
  })

  this.ctx.draw();
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