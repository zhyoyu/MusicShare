// //index.js
// //获取应用实例
// const app = getApp()

// Page({
//   data: {
//     motto: '欢迎来到小辰之窗！',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })

const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/01.jpg',
      '/images/02.jpg',
      '/images/03.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    proList: [
      {
        logo: '/images/pro_001.jpg',
        title:'让我弹琴给你听-尧十三',
        desc: '愿你梦里有喝不完的酒，醒来后能酩酊大醉地过完这一生。',
        poster: 'http://p1.music.126.net/YZ4EmG8r5T6XPj_1WBue-A==/3295236350128132.jpg',
        name: '让我弹琴给你听',
        author: '尧十三',
        src: 'http://m10.music.126.net/20180518174316/9c2c6efad1868d43463e6e73c9f64a24/ymusic/ed4e/e60c/3acc/3e0a79e3e9b3d8f299ab5cc361a7a2a7.mp3',
      },
      {
        logo: '/images/pro_002.jpg',
        title: 'Purity-Painless Destiny',
        desc: '我厌恶的都是我赖以生存的，我深爱的却是我遥不可及的。',
        poster: 'https://y.gtimg.cn/music/photo_new/T002R68x68M0000025sEti145gtL.jpg',
        name: 'Purity',
        author: 'Painless Destiny',
        src: 'http://isure.stream.qqmusic.qq.com/C200002vXSoL2Xrofj.m4a?guid=2000001731&vkey=D43450BAED77512DB92B02F34B9D35A4ACDF96E83CF1D851C2D2ED1641A7DDC6BD81685D3FB56BF93188C12886D42A05048359CD27186230&uin=&fromtag=50',
      },
      {
        logo: '/images/pro_003.jpg',
        title: 'Fade-Alan Walker',
        desc: '戴耳机和不戴耳机是两码事，不戴耳机，音乐是世界的一部分，戴上耳机，音乐就是整个世界。',
        poster: 'https://y.gtimg.cn/music/photo_new/T002R68x68M00000472CVU4VP4I3.jpg',
        name: 'Fade',
        author: 'Alan Walker',
        src: 'http://isure.stream.qqmusic.qq.com/C200004Kc2Yi3tt44L.m4a?guid=2000001731&vkey=DA422373B19B56FA5DDE4077E78EEFA73F71A885616995EC1C5D72A8BBF350100860C3FF3AF4D1789A7BCE5A39525C63E6721C64CD522ACC&uin=&fromtag=50',
      }
    ]
    },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.setData({
      test: '01'
    })
  },
  toListen: function(e) {
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
