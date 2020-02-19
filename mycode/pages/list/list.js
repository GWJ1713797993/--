// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        title:"华语电影",
        color:"#4A708B",
        src:"../../image/movie.png",
        data:[
          {
            name:"哪吒之魔童降世",
            grade:"8.5分"
          },
          {
            name: "少年的你",
            grade: "8.3分"
          },
          {
            name: "谁先爱上他的",
            grade: "8.6分"
          }
        ]
      },
      {
        title: "外语电影",
        color: "#8B7765",
        src: "../../image/movie.png",
        data: [
          {
            name: "何以为家",
            grade: "9.1分"
          },
          {
            name: "绿皮书",
            grade: "8.9分"
          },
          {
            name: "小丑",
            grade: "8.7分"
          }
        ]
      },
      {
        title: "冷门佳片",
        src: "../../image/movie.png",
        color: "#8B5F65",
        data: [
          {
            name: "爱尔兰人",
            grade: "9.0分"
          },
          {
            name: "婚姻故事",
            grade: "8.7分"
          },
          {
            name: "死无对证",
            grade: "8.7分"
          }
        ]
      },
      {
        title: "",
        src: "../../image/science.png",
        color: "#4A708B",
        data: [
          {
            name: "星际穿越",
            grade: "9.3分"
          },
          {
            name: "黑客帝国",
            grade: "9.0分"
          },
          {
            name: "头号玩家",
            grade: "8.7分"
          }
        ]
      },
      {
        title: "",
        src: "../../image/happy.png",
        color: "#8B7765",
        data: [
          {
            name: "三傻大闹宝莱坞",
            grade: "9.2分"
          },
          {
            name: "大话西游之月光宝盒",
            grade: "9.0分"
          },
          {
            name: "两杆大烟枪",
            grade: "9.1分"
          }
        ]
      },
      {
        title: "",
        src: "../../image/motion.png",
        color: "#999",
        data: [
          {
            name: "蝙蝠侠：黑暗骑士崛起",
            grade: "8.7分"
          },
          {
            name: "谍影重重3",
            grade: "8.8分"
          },
          {
            name: "复仇者联盟4：终局之战",
            grade: "8.5分"
          }
        ]
      },
      {
        title: "",
        src: "../../image/love.png",
        color: "#8B5F65",
        data: [
          {
            name: "泰坦尼克号",
            grade: "9.4分"
          },
          {
            name: "大话西游之大圣娶亲",
            grade: "9.2分"
          },
          {
            name: "乱世佳人",
            grade: "9.3分"
          }
        ]
      },
      {
        title: "虚构类畅销图书",
        src: "../../image/books.png",
        color: "#8B795E",
        data: [
          {
            name: "呼吸",
            grade: "8.8分"
          },
          {
            name: "萨拉戈萨手稿",
            grade: "8.7分"
          },
          {
            name: "大象席地而坐",
            grade: "8.7分"
          }
        ]
      },
      {
        title: "非虚构类畅销图书",
        src: "../../image/books.png",
        color: "#666",
        data: [
          {
            name: "你当象鸟飞往你的山",
            grade: "9.0分"
          },
          {
            name: "了不起的我",
            grade: "8.9分"
          },
          {
            name: "被统治的艺术",
            grade: "8.7分"
          }
        ]
      },
      {
        title: "畅销图书",
        src: "../../image/books.png",
        color: "#CDB7B5",
        data: [
          {
            name: "追风筝的人",
            grade: "8.9分"
          },
          {
            name: "解忧杂货店",
            grade: "8.5分"
          },
          {
            name: "小王子",
            grade: "9.0分"
          }
        ]
      }
    ]
  },
  examinefun(){
    console.log('xxx')
    wx.navigateTo({
      url: '../recommend/recommend',
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {
        console.log(res)
      },
      complete: function(res) {
        console.log(res)
      },
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