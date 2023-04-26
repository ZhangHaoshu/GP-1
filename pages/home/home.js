const myGlobalFunctions = require("../../utils/myGlobalFunctions")
// 引入本地数据
const localData = require('../../testdata/localData.js');
// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        deviceOnline: []
    },

    // 跳转search 页面
    gotoSearch() {
        wx.navigateTo({
          url: '/pages/search/search',
          fail: function() {
              myGlobalFunctions.myFunction.myShowToast()
          }
        })
    },

    // 跳转详情页面
    gotoDetail(e) {
        console.log(e)
        wx.navigateTo({
            // 跳转指定详情页 并传递设备名称
          url: '/pages/device_detail/device_detail?device_id=' + e.currentTarget.dataset.name.id,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            deviceOnline: localData
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})