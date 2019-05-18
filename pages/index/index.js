//index.js
//获取应用实例
import { NAVS, PARTITION } from './sentData.js'
// import 

const app = getApp()
// var API = require('../../mock/mock.js')

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    navs: NAVS,
    partition: PARTITION,
    message: ''
  },
  messageUpdate: function (e) {

    this.setData({
      message: e.detail.value
    })
    console.log(this)
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  scanCode: function () {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },
  // components: {
  //   Top,
  //   VideoCard,
  //   Footer
  // }
  // onReady () {
      // console.log(1)
      // navs(res => {
      //   console.log(res)
        // this.navs = res.data.navs
      // })
    // this.getData()
    // console.log(1)
  // },
  onLoad: function () {
    // var that = this
    console.log(this.data.navs)
    // console.log(that.partition)
    // var that = this
    // var that = this
    // 使用 Mock
    // API.ajax('', function (res) {
      //这里既可以获取模拟的res
      // console.log(res)
      // that.setData({
      //   list: res.data
      // })
    // })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  methods: {
   
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
