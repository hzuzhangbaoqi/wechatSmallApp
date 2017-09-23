// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    from: null,
    to: null,
    date: null

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

  },

  fromInput: function (e) {
    this.setData({ from: e.detail.value });
  },
  toInput: function (e) {
    this.setData({ to: e.detail.value });
  },
  dateInput: function (e) {
    this.setData({ date: e.detail.value });
  },

  searchClick: function () {
    var dataArr = [];
    for (var key in this.data) {
      dataArr.push(this.data[key])
    }
    console.log(dataArr);
    wx.navigateTo({
      url: '../result/result?title='+dataArr+'',
    })
  }
})