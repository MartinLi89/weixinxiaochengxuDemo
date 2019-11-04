// pages/indexaa/indexaa.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    demoList: [
      
      {
        name: "自由绘制",
        path: "../freedomdraw/freedomdraw"

      },{
        name: "绘制正弦曲线",
        path: "../drawsinline/drawsinline"

      },{
        name: "基本绘图",
        path: "../drawpicture/drawpicture"

      },{
        name: "摇一摇切换图片",
        path: "../facechange/facechange"

      }, {
        name: "猫图",
        path: "../catmiao/miaomiaomiao"
      }, {
        name: "wx:if用法",
        path: "../colorif/colorif"
      }, {
        name: "数据绑定",
        path: "../databind/databinds"
      }, {
        name: "打电话",
        path: "../flutes/fluteintex"
      }, {
        name: "fonts_text",
        path: "../fonts_text/fonts"
      }, {
        name: "图片 模式",
        path: "../imagepicture/imagepicture"
      }, {
        name: "字体设置",
        path: "../index/index"
      }, {
        name: "计时器",
        path: "../jishiqi/jishiji"
      }, {
        name: "经典布局示例",
        path: "../layouts/layout1"
      }, {
        name: "log",
        path: "../logs/logs"
      }, {
        name: "变量模块化示例",
        path: "../modulechange/modulechange"
      }, {
        name: "变化的三色旗",
        path: "../sanceqi/sanseqi"
      }, {
        name: "三级联动",
        path: "../sanjiliandong/sanjiliandong"
      }, {
        name: "轮播图",
        path: "../swiper/swipers"
      }, {
        name: "温度换算",
        path: "../wendu/wenduhuansuan"
      }, {
        name: "wx:form应用:货币兑换 ",
        path: "../wxform/wxforms"
      }, {
        name: "wx:for应用:货币兑换 ",
        path: "../wxfortest/wxfortest"
      }



    ]

  },

  /**
   * 点击条状到相关页面
   */
  onClick: function(event) {
    var item = event.currentTarget.dataset.item;
    console.log(item)

    wx.navigateTo({
      url: item.path,
      success: function() {

      },
      fail: function(e) {

      },
      complete() {

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('indexss.js--onLoad--页面加载')

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    console.log('indexss.js--onReady--页面初次渲染')

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log('indexss.js--onShow--页面显示')

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    console.log('indexss.js--onHide--页面隐藏')

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    console.log('indexss.js--onUnload--页面卸载')

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