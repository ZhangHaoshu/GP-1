// pages/my/my.js
var app = getApp() //获取全局内容
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    login() {
        var that = this;
        wx.getUserProfile({
            desc: '用于信息完善',
            success(res) {
                var user = res.userInfo
                that.setData({
                    userInfo: user
                })
                // 给全局变量赋值
                app.globalData.userInfo = user

                // 检查是否之前已经授权登录
                wx.cloud.database().collection('login_users').where({
                    _openid: app.globalData.openid
                }).get({
                    success(res) {
                        console.log('3', res)
                        // 如果数据库长度不为零则不添加
                        if (res.data.length == 0) {
                            // 将用户信息上传到云数据库
                            wx.cloud.database().collection('login_users').add({
                                data: {
                                    avatarUrl: user.avatarUrl,
                                    nickName: user.nickName
                                },
                                success(res) {
                                    //console.log(res)
                                    wx.showToast({
                                        title: '登陆成功',
                                    })
                                }
                            })
                        }else{
                            that.setData({
                                userInfo: res.data[0]
                            })
                        }
                    }
                })
            }
        })

    },

    //退出登录
    loginOut(){
        app.globalData.userInfo = null
        this.setData({
            userInfo: null
        })
    },

    // 跳转到home页面
    gotoHome(){
        // console.log('111', 'ok')
        wx.switchTab({
            url: '/pages/home/home',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        //通过全局变量获取userInfo 绑定到该页面上
        this.setData({
            userInfo: app.globalData.userInfo
        })
        // console.log('userInfo', this.userInfo)
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