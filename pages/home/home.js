const myGlobalFunctions = require("../../utils/myGlobalFunctions")

var app = getApp() //获取全局内容

// 引入本地数据
const localData = require('../../testdata/localData.js');
// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        deviceOnline: [],
        // 倒计时秒数
        seconds: 3,
        // 定时器id
        timer: null
    },

    //判断是否已经登录
    isLongin() {
        // console.log('home_g', app.globalData.userInfo)
        if (app.globalData.userInfo == null) {
            myGlobalFunctions.myFunction.myShowToast()
            wx.switchTab({
                url: '/pages/my/my',
            })
            // console.log('2')
        }
    },

    // //提示界面
    // myShowToast(n){
    //     wx.showToast({
    //       title: '请先登录!即将跳转至登录界面',
    //       mask: true,
    //       duration: 1500
    //     })
    // },

    // // 延迟跳转到登录界面
    // delayNavigate(){
    //     this.setData({
    //         seconds: 3
    //     })
    //     this.myShowToast(this.seconds)
    //     // 将定时器的id存储到timer中
    //     this.timer =  setInterval(() => {
    //         this.seconds--
    //         //判断秒数是否小于0
    //         if(this.seconds <= 0){
    //             //清楚定时器
    //             clearInterval(this.timer)
    //             //跳转到ny页面
    //             wx.switchTab({
    //               url: '/pages/my/my',
    //             })
    //             //终止提示
    //             return
    //         }
    //         this.myShowToast(this.seconds)
    //     }, 1000)
    // },

    // 跳转search 页面
    gotoSearch() {
        //先判断是否已经登录
        this.isLongin()
        if (app.globalData.userInfo != null) {
            wx.navigateTo({
                url: '/pages/search/search',
                fail: function () {
                    myGlobalFunctions.myFunction.myShowToast()
                }
            })
        }
    },

    // 跳转详情页面
    gotoDetail(e) {
        //console.log(e)
        this.isLongin()
        if (app.globalData.userInfo != null) {
            wx.navigateTo({
                // 跳转指定详情页 并传递设备名称
                url: '/pages/device_detail/device_detail?device_id=' + e.currentTarget.dataset.name.id,
            })
        }

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 将设备信息绑定到该页面
        this.setData({
            deviceOnline: localData
        })
        // //确定在线设备数赋值给全局变量
        // const len = localData.list.length()
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