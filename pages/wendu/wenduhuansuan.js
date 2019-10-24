// pages/wendu/wenduhuansuan.js
Page({

  /**
   * 页面的初始数据
   */

  calc: function(e) { //事件处理函数
    var C, F; //定义变量
    C = e.detail.value; //获取input组件中输入的数值(value)
    if (!C) {
      this.setData({
        
      })
      return
    }
    this.setData({
      F: C * 9 / 5 + 32
    })
  },
  teaaa:function(){


    for (var a=0;a<0;a++){

      console.log(a)
    }
  }
})