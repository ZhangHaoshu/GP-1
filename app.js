// app.js
App({
    onLaunch() {
        //打印初始全局数据
        console.log('0_globalUserInfo', this.globalData.userInfo)

        // 云开发的初始化
        wx.cloud.init({
            env: "cloud1-4gifgsij80e4cc31"
        })

        // 获取用户的openid
        var that = this
        wx.cloud.callFunction({
            name: 'login_get_openid',
            success(res) {
                console.log('1', res)
                //给全局变量赋值
                that.globalData.openid = res.result.openid
                // 查看数据库用户表是否有用户记录
                wx.cloud.database().collection('login_users').where({
                    _openid: res.result.openid
                }).get({
                    success(result){
                        console.log('2', result)
                        // 查找到数据库用户信息则给全局变量赋值
                        that.globalData.userInfo = result.data[0]
                    }
                })
            }
        })
    },

    // 全局数据
    globalData: {
        userInfo: null,
        loginStatus: false,
        openid: null,
        deviceOnlineNum: 0
    }
})
