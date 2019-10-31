// pages/imagepicture/imagepicture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url:'https://gank.io/api/data/福利/10/1',
    src:'http://ww1.sinaimg.cn/large/0065oQSqly1g2pquqlp0nj30n00yiq8u.jpg',
    imgArray:[
      {
        mode: 'scaleToFill',
        text: 'scaleToFill:缩放模式,不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素'
      },{
        mode:'aspectFit',
        text:'aspectFit:缩放模式,保持纵横比缩放图片,使图片完整的显示出来'
      }, {
        mode: 'scaleToFill',
        text: 'scaleToFill:缩放模式,不保持纵横比缩放图片,使图片拉伸适应'
      }, {
        mode: 'aspectFill',
        text: 'aspectFill:缩放模式,保持纵横比缩放图片,只保证图片的短边能完全显示出来'
      }, {
        mode: 'top',
        text: 'top:裁剪模式，不缩放图片,只显示图片的顶部区域'
      }, {
        mode: 'bottom',
        text: 'bottom:裁剪模式，不缩放图片,只显示图片的底部区域'
      }, {
        mode: 'center',
        text: 'center:裁剪模式，保持纵横比缩放图片,使图片完整的显示出来'
      }, {
        mode: 'left',
        text: 'left:裁剪模式，不缩放图片，只显示图片的左边区域'
      }, {
        mode: 'right',
        text: 'right:裁剪模式，不缩放图片，只显示图片的右边区域'
      }, {
        mode: 'top left',
        text: 'top left:裁剪模式，不缩放图片，只显示图片的左上边区域'
      }, {
        mode: 'top right',
        text: 'top right:裁剪模式，不缩放图片，只显示图片的右上边区域'
      }, {
        mode: 'bottom left',
        text: 'bottom left:裁剪模式，不缩放图片，只显示图片的左下边区域'
      }, {
        mode: 'bottom right',
        text: 'bottom right:裁剪模式，不缩放图片，只显示图片的右下边区域'
      },


    ]


  },
  requestData: function () {
    var that = this
    console.log(that.data.url)
    wx.request({
      url: that.data.url,
      success: function (res) {

        console.log(res.data)
        var data = res.data
        console.log(data.results[0].url)

        that.setData({
          myData: data
        })



      },
      fail: function (error) {
        console.log(error)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 滚动事件 
  onPageScroll(e) {
    //滚动距离+屏幕高度换算vw倍数
    let listIndex = (e.scrollTop + this.data.screenHeight) / (this.data.screenWidth * 0.63)
  // console.log(listIndex)
    this.setData({
      listIndex: listIndex
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //获取屏幕尺寸
    const screenWidth = wx.getSystemInfoSync().windowWidth
    const screenHeight = wx.getSystemInfoSync().windowHeight
    this.setData({
      //获取页面初始状态图片数量，0.63为图片容器的高度值(63vw)，将代码中0.63改为你的容器对应高度
      // listIndex: screenHeight / (screenWidth * 0.63),
      screenWidth: screenWidth,
      screenHeight: screenHeight
    })
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