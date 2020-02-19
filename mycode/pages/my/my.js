//my.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    data:[
      {
        src:"http://gwj1713797993.gz01.bdysite.com/image/c_icon.jpg",
        name:"观影",
        number:0,
        unit:"看",
        tip:"标记10部影片"
      },
      {
        src: "http://gwj1713797993.gz01.bdysite.com/image/b_icon.jpg",
        name: "读书",
        number: 0,
        unit: "读",
        tip: "标记10本书"
      },
      {
        src: "http://gwj1713797993.gz01.bdysite.com/image/m_icon.jpg",
        name: "音乐",
        number: 0,
        unit: "听",
        tip: "标记10张唱片"
      }
    ]
  },
  //事件处理函数
  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  loginfun:function(){
    
  }
})
