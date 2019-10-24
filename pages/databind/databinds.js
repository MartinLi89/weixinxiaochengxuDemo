// pages/databind/databinds.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  modify:function(){//事件函数
    this.setData({//修改绑定数据的值
      a:100,//修改绑定的普通数据的值
      b:200,
      c:300,
      Student:{//修改绑定的对象数据的值
        stuID:'20190213',
        name:'李四',
        birthday:'2001-9-1'
      },
      array:[//修改绑定的数组数据的值
        '2018',
        '2029',
        '2030'
      ]

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.modify()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})