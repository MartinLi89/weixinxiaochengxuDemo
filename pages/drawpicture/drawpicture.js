// pages/drawpicture/drawpicture.js
var ctx = wx.createCanvasContext('aabbcczz') //创建画布绘图环境
Page({
  clear: function() {
    ctx.draw() //刷新屏幕,显示绘制效果(无参数或参数为false时要先清除画布)

  },
  /**画点 */
  drawDot: function(e) {

    // console.log(e)
    ctx.arc(200, 200, 10, 0, 2 * Math.PI) //绘制圆形
    ctx.setFillStyle('black') //设置填充样式
    ctx.fill() //对当前路径中的内容进行填充.默认填充色为黑色
    ctx.draw() //刷新屏幕,显示绘制效果(无参数或参数为false时,要先清除画布)


    // const grd = ctx.createLinearGradient(0, 0, 200, 0)

    // grd.addColorStop(0, 'red')

    // grd.addColorStop(1, 'white')


    // ctx.setFillStyle(grd)

    // ctx.fillRect(10, 10, 150, 80)

    // ctx.draw()



   

    // ctx.strokeRect(10, 10, 25, 15)

    // ctx.scale(2, 2)

    // ctx.strokeRect(10, 10, 25, 15)

    // ctx.scale(2, 2)

    // ctx.strokeRect(10, 10, 25, 15)

    // ctx.draw()


    // Draw coordinates

    ctx.arc(100, 75, 50, 0, 2 * Math.PI)

    ctx.setFillStyle('#EEEEEE')

    ctx.fill()



    ctx.beginPath()

    ctx.moveTo(40, 75)

    ctx.lineTo(160, 75)

    ctx.moveTo(100, 15)

    ctx.lineTo(100, 135)

    ctx.setStrokeStyle('#AAAAAA')

    ctx.stroke()



    ctx.setFontSize(12)

    ctx.setFillStyle('black')

    ctx.fillText('0', 165, 78)

    ctx.fillText('0.5*PI', 83, 145)

    ctx.fillText('1*PI', 15, 78)

    ctx.fillText('1.5*PI', 83, 10)



    // Draw points

    ctx.beginPath()

    ctx.arc(100, 75, 2, 0, 2 * Math.PI)

    ctx.setFillStyle('lightgreen')

    ctx.fill()



    ctx.beginPath()

    ctx.arc(100, 25, 2, 0, 2 * Math.PI)

    ctx.setFillStyle('blue')

    ctx.fill()



    ctx.beginPath()

    ctx.arc(150, 75, 2, 0, 2 * Math.PI)

    ctx.setFillStyle('red')

    ctx.fill()



    // Draw arc

    ctx.beginPath()

    ctx.arc(100, 75, 50, 0, 1.5 * Math.PI)

    ctx.setStrokeStyle('#333333')

    ctx.stroke()



    ctx.draw()
  },
  /**画圆 */
  drawCircle: function() {
    ctx.setFillStyle('black')
    ctx.arc(200, 200, 10, 0, 2 * Math.PI)
    ctx.fill()

    ctx.setStrokeStyle('red') //设置描边颜色
    ctx.moveTo(300, 200) //将画笔移动到画布中指定的坐标点,不创建线条
    ctx.arc(200, 200, 100, 0, 2 * Math.PI) //画圆
    ctx.stroke() //画出当前路径的边框
    ctx.draw() //刷新屏幕,显示绘制效果
  },
  /**画虚线 */
  drawDash: function() {
    ctx.setStrokeStyle('red')
    ctx.setLineDash([20, 10]) //设置虚线样式
    ctx.setLineWidth(10) //设置线宽
    ctx.moveTo(50, 100) //移动画笔位置
    ctx.lineTo(250, 100) //划线
    ctx.lineTo(150, 300)
    ctx.lineTo(50, 100)
    ctx.stroke() //画出当前路径的边框
    ctx.draw() //执行

    this.resetCtx()

  },
  resetCtx: function() {
    ctx.setLineDash([0, 0]) //回复画笔初始值
    ctx.setLineWidth(1)
    ctx.setLineCap('butt')
    ctx.setLineJoin('mitter')
    ctx.setGlobalAlpha(1)

  },
  /**端点焦点 */
  capAndJoin: function() {
    ctx.setStrokeStyle('red')
    ctx.setLineWidth(20)
    ctx.setLineCap('round')
    ctx.setLineJoin('miter')
    ctx.moveTo(50, 50)
    ctx.lineTo(250, 50)
    ctx.lineTo(50, 250)
    ctx.lineTo(250, 250)
    ctx.stroke()
    ctx.draw()
    this.resetCtx()
  },
  /**画文字 */
  drawText: function() {
    ctx.moveTo(10, 80)
    ctx.lineTo(400, 80)
    ctx.stroke()

    ctx.setFontSize(40)

    ctx.setFillStyle('green')
    ctx.setTextBaseline('middle')
    ctx.fillText('地球村', 10, 80)


    ctx.setFillStyle('red')
    ctx.setTextBaseline('bottom')
    ctx.fillText('中华人民共和国', 0, 80)

    ctx.setFillStyle('yellow')
    ctx.setTextBaseline('top')
    ctx.fillText('中华上下五千年', 80, 80)

    ctx.setFillStyle('black')
    ctx.rotate(30 * Math.PI / 180)
    ctx.fillText('世界属于三体', 150, 80)

    ctx.draw()


  },
  /**圆形渐变 */
  circularGrad: function() {
    var grd = ctx.createCircularGradient(175, 175, 125)
    grd.addColorStop(0, 'purple') //添加渐变起点
    grd.addColorStop(1, 'white') //添加渐变终点
    ctx.setFillStyle(grd)
    ctx.fillRect(50, 50, 250, 250)
    ctx.draw()

  },
  /**阴影矩形 */
  shadowRect: function() {
    ctx.setFillStyle('orange')
    ctx.setShadow(20, 20, 50, 'yellow') //设置阴影
    ctx.fillRect(50, 50, 250, 250)
    ctx.draw()
  },
  /**半透明 */
  translucent: function() {
    ctx.setFillStyle('red')
    ctx.setGlobalAlpha(0.2)
    ctx.fillRect(50, 50, 250, 250)
    ctx.draw()
    this.resetCtx()
  }




})