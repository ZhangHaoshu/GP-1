// pages/search/search.js
// 引入本地数据
const localData = require('../../testdata/localData.js');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 延时器的 timerId
        timer: null,
        // 搜索关键词
        value: '',
        // 搜索结果列表
        searchResults: [],
        // 搜索关键词的历史记录
        historyList: [],
    },

    onChange(e) {
        // 防抖作用
        clearTimeout(this.timer)
        // 重新启动延时器
        this.timer = setTimeout(() => {
            //如果800ms内没有触发新的输入事件 则为关键词赋值
            this.setData({
                value: e.detail,
            })
            // 根据关键词 查询搜索建议
            this.getSearchList()
        }, 800);
    },

    /// 根据搜索关键词，获取搜索建议
    getSearchList() {
        //判断关键词是否为空
        if (this.value === '') {
            this.searchResults = []
            return
        }
        
        // 发起请求
        // var newList = []
        // var list = localData.list[1]
        // this.localData.list.forEach(item => {
        //     // if(item.module.indexOf(value) != -1){
        //     //     newList.push(item.module)
        //     // }
        //     console.log(item.module)
        // })
        // for(var i = 0, len = localData.list.length; i<len; i++){

        // }

        this.setData({
            searchResults: localData
        })
    },

    // 确定搜索时触发
    onSearch() {
        // 根据搜索关键词，获取搜索建议
        this.getSearchList()
    },
    onClick() {
        // 根据搜索关键词，获取搜索建议
        this.getSearchList()
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