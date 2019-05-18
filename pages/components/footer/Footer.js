// pages/compments/footer.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    partitionPage: function () {
      wx.navigateTo({
        url: '../subregion/subregion'
      })
    },
    indexPage: function () {
      wx.navigateTo({
        url: '../index/index'
      })
    }
  }
})