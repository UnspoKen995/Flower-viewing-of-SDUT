//index.js
var amapFile = require('../../libs/amap-wx.js');//微信小程序SDK||高德地图API
var sysWidth,sysHeight;//宽高度
//var longitude,latitude;//经纬度
//var sca;//缩放比例
//var callout0;//标签
Page({
    data:{
        longitude: 118.00121068954468,//经度
        latitude: 36.81053881337006,//纬度
        scale: 16,
        polyline: [],

        /*************  地图标记  *************/
        markers:[
        /*************************  西校区  *******************************/
        //连翘
        {
            iconPath:"/img/连翘.png",
            id: 0,
            latitude: 36.8124751786,//纬度
            longitude: 117.9997102283,//经度
            width: 50,
            height: 50,
            callout://点击显示气泡
            {
              content: "连翘\n花期：3月上旬-4月中旬\n形态特征：连翘属于落叶灌木\n枝开展或下垂，棕色、棕褐色或淡黄褐色，小枝土黄色或灰褐色，节间中空，节部具实心髓",
                color: "#FFFFFF",
                fontSize: 16,
                borderRadius: 4,
                bgColor: "#b3d4db",
                padding: 10,
                textAlign: "center"
            }
            
            /***
             * 
            callout://放大显示气泡
            {
                content: "",
                color: "#fff",
                fontSize: 16,
                borderRadius: 4,
                bgColor: "#000",
                padding: 0,
                display: "ALWAYS",
                textAlign: "center"
            },
               *
             ***/

        },
        //荷花
        {
            iconPath:"/img/荷花.png",
            id: 1,
            latitude: 36.8090940177,
            longitude: 117.9990153411,
            width: 48,
            height: 48,
            callout://点击显示气泡
            {
              content: "荷花\n花期：6-9月\n形态特征：多年生草本，是浮水性的植物，没有明显的茎，叶子盾状圆形\n荷花原产于中国，在水中生活，通常被种植于池塘之中\n花一般盛开于夏季，荷花也因而成为夏日之风物",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        },
        //寿星桃
        {
            iconPath:"/img/寿星桃.png",
            id: 2,
            latitude: 36.8086500177,
            longitude: 118.0010863411,
            width: 50,
            height: 50,
            callout://点击显示气泡
            {
              content: "寿星桃\n花期：3月下旬-4月中旬\n形态特征：叶小乔木，普通桃的变种\n有红色、白色、粉红色不同类型，是我国地方品种资源",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        },
        //美人梅
        {
            iconPath:"/img/美人梅.png",
            id: 3,
            latitude: 36.812671,
            longitude: 118.005031,
            width: 50,
            height: 50,
            callout://点击显示气泡
            {
              content: "美人梅\n花期：3月中下旬-4月中旬\n形态特征：隶属园艺杂交种，由重瓣粉型梅花与红叶李杂交而成",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        },
        //紫荆
        {
            iconPath:"/img/紫荆.png",
            id: 4,
            latitude: 36.808613,
            longitude: 117.996589,
            width: 50,
            height: 50,
            callout://点击显示气泡
            {
              content: "紫荆\n花期：3月下旬-4月中旬\n形态特征：丛生或单生灌木，高2-5米；树皮和小枝灰白色\n花紫红色或粉红色，2-10余朵成束",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        },
        //垂丝海棠
        {
            iconPath:"/img/垂丝海棠.png",
            id: 5,
            latitude: 36.806998,
            longitude: 118.000988,
            width: 50,
            height: 50,
            callout://点击显示气泡
            {
              content: "垂丝海棠\n花期：3-4月\n形态特征：落叶小乔木，高达5米，树冠开展\n叶片卵形或椭圆形至长椭卵形，伞房花序，具花4-6朵",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        },
        //丁香
        {
            iconPath:"/img/丁香.png",
            id: 6,
            latitude: 36.807242,
            longitude: 118.008262,
            width: 50,
            height: 50,
            callout://点击显示气泡
            {
              content: "丁香\n花期：4-5月\n形态特征：灌木或小乔木，高可达5米；树皮灰褐色或灰色\n叶片革质或厚纸质，卵圆形至肾形，圆锥花序直立，由侧芽抽生",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        },
        //鸢尾
        {
            iconPath:"/img/鸢尾.png",
            id: 7,
            latitude: 36.807859,
            longitude: 118.005498,
            width: 65,
            height: 65,
            callout://点击显示气泡
            {
              content: "鸢尾\n花期：4-5月\n形态特征：多年生草本，根状茎粗壮，斜伸；花蓝紫色，直径约10cm\n花期4-5月，果期6-8月",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        },
        //玉兰
        {
            iconPath:"/img/玉兰.png",
            id: 8,
            latitude: 36.8054780177,
            longitude: 118.0074193411,
            width: 50,
            height: 50,
            callout://点击显示气泡
            {
              content: "玉兰\n花期：3-4月\n形态特征：落叶乔木，树高一般2～5米或高可达15米\n花白色，大型、芳香，先叶开放，花期10天左右",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        },
        //西府海棠
        {
            iconPath:"/img/西府海棠.png",
            id: 9,
            latitude: 36.8073130177,
            longitude: 118.0045273411,
            width: 50,
            height: 50,
            callout://点击显示气泡
            {
              content: "西府海棠\n花期：3-4月\n形态特征：小乔木，高达2.5-5米，树枝直立性强\n伞形总状花序，有花4-7朵，集生于小枝顶端，花叶同放",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        },
        //紫薇
        {
            iconPath:"/img/紫薇.png",
            id: 10,
            latitude: 36.807396,
            longitude: 118.003932,
            width: 48,
            height: 48,
            callout://点击显示气泡
            {
              content: "紫薇(百日红)\n花期：6-9月\n形态特征：落叶灌木或小乔木，高可达7米\n叶互生或有时对生，纸质，椭圆形，花色艳丽\n开花时正当夏秋少花季节，花期极长",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        },
        //樱花
        {
            iconPath:"/img/樱花.png",
            id: 11,
            latitude: 36.8079920177,
            longitude: 118.0068083411,
            width: 35,
            height: 35,
            callout://点击显示气泡
            {
              content: "樱花\n花期：4-5月\n形态特征：樱花是乔木，树皮灰色\n花每枝3到5朵，成伞状花序，花瓣先端缺刻，花色多为白色、粉红色",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        },
        //大花萱草
        {
            iconPath:"/img/大花萱草.png",
            id: 12,
            latitude: 36.8082370177,
            longitude: 118.0037723411,
            width: 50,
            height: 48,
            callout://点击显示气泡
            {
              content: "大花萱草\n花期：7-8月\n形态特征：大花萱草肉质根茎较短\n花茎高出叶片，上方有分枝，小花2～4朵，有芳香，花大，具短梗和大型三角状苞片",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        },
        //杏梅
        {
            iconPath:"/img/杏梅.png",
            id: 13,
            latitude: 36.8094381786,
            longitude: 118.0037572283,
            width: 50,
            height: 50,
            callout://点击显示气泡
            {
              content: "杏梅\n花期：3月\n形态特征：落叶乔木，枝叶均似山杏或杏，花呈杏花形\n多为复瓣，水红色或白色，瓣爪细长\n几乎无香味",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        }, 
        //北美海棠
        {
            iconPath:"/img/北美海棠.png",
            id: 14,
            latitude: 36.8112141786,
            longitude: 118.0036312283,
            width: 50,
            height: 50,
            callout://点击显示气泡
            {
              content: "北美海棠\n花期：4月份\n形态特征：学校引进种植有“绚丽”、“红丽”、“高原之火”、“凯尔斯”、“雪球”五个品种\n花型上由过去的野生种单瓣浅色变为深色、多色、重瓣，色彩绚丽，花量之大，令人叹为观止",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        }, 
        //文冠果
        // {
        //     iconPath:"/img/flower.png",
        //     id: 15,
        //     latitude: 36.8112871786,
        //     longitude: 118.0017982283,
        //     width: 50,
        //     height: 50,
        //     callout://点击显示气泡
        //     {
        //       content: "文冠果",
        //       color: "#FFFFFF",
        //       fontSize: 16,
        //       borderRadius: 4,
        //       bgColor: "#b3d4db",
        //       padding: 10,
        //       textAlign: "center"
        //     }
        // }, 
        //朴树
        // {
        //     iconPath:"/img/flower.png",
        //     id: 16,
        //     latitude: 36.8124421786,
        //     longitude: 118.0012422283,
        //     width: 50,
        //     height: 50,
        //     callout://点击显示气泡
        //     {
        //       content: "朴树",
        //       color: "#FFFFFF",
        //       fontSize: 16,
        //       borderRadius: 4,
        //       bgColor: "#b3d4db",
        //       padding: 10,
        //       textAlign: "center"
        //     }
        // }, 
        //牡丹
        {
            iconPath:"/img/牡丹.png",
            id: 17,
            latitude: 36.8125721786,
            longitude: 118.0040802283,
            width: 50,
            height: 50,
            callout://点击显示气泡
            {
              content: "牡丹\n花期：4月中下旬-5月上旬\n形态特征：多年生落叶小灌木，分枝短而粗\n牡丹花大而香，故又有“国色天香”之称",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        }, 
        //月季
        {
            iconPath:"/img/月季.png",
            id: 18,
            latitude: 36.8119331786,
            longitude: 118.0048892283,
            width: 35,
            height: 35,
            callout://点击显示气泡
            {
              content: "月季\n花期：5-10月\n形态特征：常绿或半常绿低矮灌木，小枝粗壮，圆柱形\n近无毛，有短粗的钩状皮刺\n学校主要引进栽植黄和平、红双喜、大红帽、阿尔丹斯、尼克尔、萨曼莎、阿波罗等十余个品种",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        },
        //日本晚樱
        // {
        //     iconPath:"/img/flower.png",
        //     id: 19,
        //     latitude: 36.8148111786,
        //     longitude: 118.0028362283,
        //     width: 50,
        //     height: 50,
        //     callout://点击显示气泡
        //     {
        //       content: "日本晚樱",
        //       color: "#FFFFFF",
        //       fontSize: 16,
        //       borderRadius: 4,
        //       bgColor: "#b3d4db",
        //       padding: 10,
        //       textAlign: "center"
        //     }
        // },
    /*************************  东校区  *******************************/
        //寿星桃
        {
            iconPath:"/img/寿星桃.png",
            id: 20,
            latitude: 36.813068,
            longitude: 118.03792,
            width: 50,
            height: 50,
            callout://点击显示气泡
            {
              content: "寿星桃\n花期：3月下旬-4月中旬\n形态特征：叶小乔木，普通桃的变种\n有红色、白色、粉红色不同类型，是我国地方品种资源",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        },
        //紫荆
        {
            iconPath:"/img/紫荆.png",
            id: 21,
            latitude: 36.812896,
            longitude: 118.03836,
            width: 55,
            height: 55,
            callout://点击显示气泡
            {
              content: "紫荆\n花期：3月下旬-4月中旬\n形态特征：丛生或单生灌木，高2-5米；树皮和小枝灰白色\n花紫红色或粉红色，2-10余朵成束",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        },
        //连翘
        {
            iconPath:"/img/连翘.png",
            id: 22,
            latitude: 36.812784,
            longitude: 118.038677,
            width: 45,
            height: 45,
            callout://点击显示气泡
            {
              content: "连翘\n花期：3月上旬-4月中旬\n形态特征：连翘属于落叶灌木\n枝开展或下垂，棕色、棕褐色或淡黄褐色，小枝土黄色或灰褐色，节间中空，节部具实心髓",
              color: "#FFFFFF",
              fontSize: 16,
              borderRadius: 4,
              bgColor: "#b3d4db",
              padding: 10,
              textAlign: "center"
            }
        },
 /*************************  门口标识  *******************************/
        //东校区南门
        {
            iconPath:"/img/door.png",
            id: 23,
            latitude: 36.8079787499,
            longitude: 118.0405341407,
            width: 50,
            height: 50
        },
        //东校区北门
        {
          iconPath:"/img/door.png",
          id: 24,
          latitude: 36.810051,
          longitude: 118.010279,
          width: 50,
          height: 50
        },
        //西校区东门
        {
          iconPath: "/img/door.png",
          id: 25,
          latitude: 36.810051,
          longitude: 118.010279,
          width: 50,
          height: 50
        },
        //西校区北门
        {
          iconPath: "/img/door.png",
          id: 26,
          latitude: 36.815698,
          longitude: 118.002743,
          width: 50,
          height: 50
        },
        //西校区南门
        {
          iconPath: "/img/door.png",
          id: 27,
          latitude: 36.805064,
          longitude: 118.005269,
          width: 50,
          height: 50
        },
        //西校区西门
        {
          iconPath: "/img/door.png",
          id: 28,
          latitude: 36.811438,
          longitude: 117.992931,
          width: 50,
          height: 50
        }],
        
        /**************  地图上的控件  *************/
        controls: [
        {
            id: 0,
            iconPath: '/img/local.png',
            position: {
              left: 18,
              top: 525,
              width: 50,
              height: 50
            },
            clickable: true
        },
        {
            id: 1,
            iconPath: '/img/road.png',
            position: {
              left: 18,
              top: 585,
              width: 50,
              height: 50
            },
            clickable: true
        },
        {
            id: 2,
            iconPath: '/img/east.png',
            position: {
              left: 18,
              top: 525,
              width: 50,
              height: 50
            },
            clickable: true
        },
        {
            id: 3,
            iconPath: '/img/west.png',
            position: {
              left: 18,
              top: 585,
              width: 50,
              height: 50
            },
            clickable: true
        }]
    },
    onLoad:function(options){
        // 生命周期函数--监听页面加载
        // 获取屏幕宽度和高度
        wx.getSystemInfo({
            success: function(res){
                console.log(res.windowWidth);
                console.log(res.windowHeight);
                sysWidth = res.windowWidth;
                sysHeight = res.windowHeight;
            }
        });
    },
    onReady:function(){
        // 生命周期函数--监听页面初次渲染完成
        console.log(this.data.controls);
        //更新数据
        this.data.controls[0].position.top = sysHeight * 0.55;   
        this.data.controls[1].position.top = sysHeight * 0.65;   
        this.data.controls[2].position.top = sysHeight * 0.75;
        this.data.controls[3].position.top = sysHeight * 0.85;

        this.setData({    
          controls: this.data.controls
        });
        // 使用 wx.createMapContext 获取 map 上下文
        this.mapCtx = wx.createMapContext('map');

        /*
        // 获取气泡结构体
        callout0 = this.data.markers[0].callout;
        */
    },
    onShow:function(){
        // 生命周期函数--监听页面显示

    },
    onHide:function(){
        // 生命周期函数--监听页面隐藏
        
    },
    onUnload:function(){
        // 生命周期函数--监听页面卸载
        
    },
    onPullDownRefresh: function() {
        // 页面相关事件处理函数--监听用户下拉动作
        
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
       
    },
    onShareAppMessage: function() {
        // 用户点击右上角分享
        return {
          title: '赏花在山理', // 分享标题
          desc: '山东理工大学赏花导航', // 分享描述
          path: '../userStart/userStart' // 分享路径
        }
    },
    
    /*************  标记点击事件  *************/
     markertap: function(e){
        /*console.log(e.markerId);
        var id = e.markerId;
        if(id == 0)
        {
            wx.navigateTo({
                url: '../details/yingchunhua/yingchunhua',
                success: function(res){
                    // success
                },
                fail: function() {
                    // fail
                },
                complete: function() {
                    // complete
                }
            })
        }*/
    },

    /*************  控件点击事件  *************/
    controltap: function(e){  
        console.log(e.controlId);
        var id = e.controlId;
        if(id == 0)
        {
            this.mapCtx.moveToLocation();
        }
        if(id == 1)
        {
        /*************************  东校区路径规划  ****************************************/
        var that = this;
        var myAmapFun = new amapFile.AMapWX({key: 'a0a5eae872cd2ec2b25f8ac230b720a2'});
          myAmapFun.getWalkingRoute({
            origin: '118.040534,36.807979',
            destination: '118.039652,36.812549',
            success: function(data){
              var points = [];
              if(data.paths && data.paths[0] && data.paths[0].steps){
                var steps = data.paths[0].steps;
                for(var i = 0; i < steps.length; i++){
                  var poLen = steps[i].polyline.split(';');
                  for(var j = 0;j < poLen.length; j++){
                    points.push({
                      longitude: parseFloat(poLen[j].split(',')[0]),
                      latitude: parseFloat(poLen[j].split(',')[1])
                    })
                  } 
                }
              }
              that.data.controls[1].id = 4;
              that.setData({
                polyline: [{
                  points: points,
                  color: "#0091ff",
                  width: 6,
                  dottedLine: true
                }],
                controls: that.data.controls
              }); 
            },
            fail: function(info){
      
            }
          })
        }
        if(id == 4)
        {
        /*************************  东校区路径规划隐藏  ****************************************/
        var that = this;
        var myAmapFun = new amapFile.AMapWX({key: 'a0a5eae872cd2ec2b25f8ac230b720a2'});
          myAmapFun.getWalkingRoute({
            origin: '118.040534,36.807979',
            destination: '118.039652,36.812549',
            success: function(data){
              var points = [];
              if(data.paths && data.paths[0] && data.paths[0].steps){
                var steps = data.paths[0].steps;
                for(var i = 0; i < steps.length; i++){
                  var poLen = steps[i].polyline.split(';');
                  for(var j = 0;j < poLen.length; j++){
                    points.push({
                      longitude: parseFloat(poLen[j].split(',')[0]),
                      latitude: parseFloat(poLen[j].split(',')[1])
                    })
                  } 
                }
              }
              that.data.controls[1].id = 1;
              that.setData({
                polyline: [{
                  points: points,
                  color: "#0091ff",
                  width: 0,
                  dottedLine: true
                }],
                controls: that.data.controls
              }); 
            },
            fail: function(info){
      
            }
          })
        }
        if(id == 2)
        {
            this.mapCtx.includePoints({
                points: [{
                  latitude: 36.807713,
                  longitude: 118.036911,
                }, {
                  latitude: 36.814423,
                  longitude: 118.042221,
                }]
              })
        }
        if(id==3)
        {
            this.mapCtx.includePoints({
                points: [{
                  latitude: 36.796112,
                  longitude: 117.989906,
                }, {
                  latitude: 36.82489,
                  longitude: 118.012688,
                }]
              })
        }
    },

    /*************  缩放触发事件  *************/
    /***
     * 
    regionchange: function(e){
        // 获取当前缩放级别
        this.mapCtx.getScale({
            success: function(res){
                sca = res.scale;
            }
        });
        if(sca >= 17.5)
        {
            console.log(sca);
            //更新数据
            callout0.content = "迎春花";  
            callout0.padding = 10;
         
            this.setData({    
                //markers: this.data.markers
            });
            console.log(callout0);
        }
        else
        {
            console.log(sca);
            //更新数据
            callout0.content = "";  
            callout0.padding = 0;
          
            this.setData({    
                markers: this.data.markers
            });
             console.log(callout0);
        }
    }
      *
    ***/

})