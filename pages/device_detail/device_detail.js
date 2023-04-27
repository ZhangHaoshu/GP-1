// pages/device_detail/device_detail.js
// 引入本地数据
const localData = require('../../testdata/localData.js');



Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 环形进度条渐变色
        gradientColor: {
            '0%': '#ffd01e',
            '100%': '#ee0a24',
        },
        device_detail: [],
        ID: 0
    },

    // // 获取对应设备详情信息
    // getDetail() {
    //     JSONArray = localData.getJSONArray("list")
    // },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var str = options.device_id
        this.setData({
            ID: str,
            device_detail: localData
        })
        //console.log(this.id)
        //this.getDetail()
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