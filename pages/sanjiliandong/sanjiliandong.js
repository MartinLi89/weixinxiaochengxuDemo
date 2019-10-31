// pages/sanjiliandong/sanjiliandong.js
function Persion(name, sex, birthPlace, birthDay, height, weight) {
  this.name = name;
  this.sex = sex;
  this.birthPlace = birthPlace;
  this.birthDay = birthDay;
  this.height = height;
  this.weight = weight;

}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,
    gender: ["男", "女"],

  },
  nameInput: function(e) {

    this.name = e.detail.value
  },
  pickerSex: function(e) {
    this.sex = this.data.gender[e.detail.value]
    this.setData({
      sex: this.sex
    })

  },
  pickerRegion: function(e) {
    this.birthPlace = e.detail.value;
    this.setData({
      birthPlace: this.birthPlace
    })
  },
  pickerDate: function(e) {
    this.birthDay = e.detail.value;
    this.setData({
      birthDay: this.birthDay
    })
  },
  heightInput: function(e) {
    this.height = e.detail.value
  },
  weightInput: function(e) {
    this.weight = e.detail.value
  },
  showMessage: function(e) {
    var p = new Persion(this.name, this.sex, this.birthPlace, this.birthDay,
      this.height, this.weight)

    this.setData({
      flag: false,
      person: p
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