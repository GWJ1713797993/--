// pages/details/details.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[],
    music:[],
    _this_data:[],
    rowid:0,
    id:0,
    row:4,
  },
  showfun(){
    if(this.data.row == 4){
      this.setData({
        row: 0
      })
    }else{
      this.setData({
        row: 4
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    let data = app.getdata()
    let music = app.getmusic()
    this.setData({
      data: data
    })
    this.setData({
      music: music
    })
    this.rowid = parseInt(options.rowid)
    this.id = parseInt(options.id)
    for (let i = 0; i <= this.data.data.length; i++){
      if (i == this.rowid){
        this._this_data = this.data.data[i].list[this.id]
        this.setData({
          _this_data: this.data.data[i].list[this.id]
        })
        console.log(this._this_data)
      }
    }
    this.setData({
      rowid: parseInt(options.rowid),
      id: parseInt(options.id)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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