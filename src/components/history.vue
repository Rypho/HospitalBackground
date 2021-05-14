//监护历史
<template>
  <div id="back">
    <div id="left">
      <div id="li">
        <img src="../assets/pic/管理.png" height="25" width="28" style="position: relative;top: 7px;left: -7px"/>管理平台</div>
      <div id="menu">
        <el-menu>
          <router-link to="home"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/首页.png" class="img1" height="17" width="17"/>首页</el-menu-item></router-link>
          <router-link to="bingqu"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/病区.png" class="img1" height="17" width="17"/>病区管理</el-menu-item></router-link>
          <router-link to="ruyuan"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/入院.png" class="img1" height="17" width="17"/>入院管理</el-menu-item></router-link>
          <router-link to="jianhu"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/监护.png" class="img1" height="17" width="17"/>监护看板</el-menu-item></router-link>
          <router-link to="history"><el-menu-item class="liLevel" style="color: #3e99ff;font-size:11px;"><img src="../assets/pic/历史1.png" class="img1" height="17" width="17"/>监护历史</el-menu-item></router-link>
          <router-link to="control"><el-menu-item class="liLevel1" style="color: #747f92;font-size:11px;"><img src="../assets/pic/管理员.png" class="img1" height="17" width="17"/>管理员管理</el-menu-item></router-link>
        </el-menu>
      </div>
    </div>
    <div id="top">
      <div id="t1">监护历史</div>
      <div id="t2">院区管理员，欢迎进入</div>
      <router-link to="login"><div id="t3"><img src="../assets/pic/退出.png" class="img2" height="18" width="18"/>退出登录</div></router-link>
    </div>
    <div id="content">
      <div class="return">
        <router-link to="jianhu"><el-button type="primary" >返回</el-button></router-link>
      </div>
      <div style="height:500px;width:95%;background-color: white;margin-left: 25px;margin-top: 15px">
        <div style="height: 60px;">
          <label style="position: relative;top:20px;left: -300px;">
            床位：01床&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            姓名：张三&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            病人编号：uy45463635545&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            高温报警：0次
          </label>
        </div>
          <div class="home":style="{backgroundColor: '#3E4457',}">
            <ul>
              <li>
                <div id="myChart1":style="{ height: '400px',backgroundColor: '#3E4457'}"></div>
              </li>
            </ul>
          </div>
      </div>
      <div id="foot">Copyrigth @ 2020. All Rigths Reserved. 杭州小为智能科技有限公司 版权所有 v1.0.0</div>
    </div>
  </div>

</template>

<script>
export default {
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
      // 绘制图表
      myChart1.setOption({
        title: {
          text: '<  05月30日17时体温记录折线图  >',
          padding: [20,20,100,100],
          textStyle: {
            fontWeight: 'normal',
            color: 'white',
            fontSize:12,
          },
          x:"center"
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '6%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          name:'时间/分',
          nameTextStyle:{
            color:"#c3dbff",
            fontSize:11,
          },
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#c3dbff',
              fontSize : 11,
            }
          },
          data: ['00', '02', '04', '06', '08', '10', '12','14','16','18','20','22','24','26','28','30',]
        },
        yAxis: {
          name:'体温/度',
          nameTextStyle:{
            color:"#c3dbff",
            fontSize:11,
          },
          type: 'value',
          min: 34,
          max: 40,
          axisLabel: {
            show: true,
            textStyle: {
              color: '#c3dbff',  //更改坐标轴文字颜色
              fontSize : 11      //更改坐标轴文字大小
            }
          },
          data: ['34', '35', '36', '37', '38', '39', '40'],
        },
        series: [
          {
            name: '体温',
            type: 'line',
            stack: '总量',
            symbolSize: 6, //折线点的大小
            markLine : {
              symbol:"none",               //去掉警戒线最后面的箭头
              label:{
                position:"end",         //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
              },
              data : [{
                silent:false,             //鼠标悬停事件  true没有，false有
                lineStyle:{               //警戒线的样式  ，虚实  颜色
                  type:"dotted",
                  color:"rgba(238, 99, 99)"
                },
                yAxis: "39.5"     //警戒线在y轴的坐标
              },
                {
                  silent:false,             //鼠标悬停事件  true没有，false有
                  lineStyle:{               //警戒线的样式  ，虚实  颜色
                    type:"dotted",
                    color:"rgba(72, 167, 38)"
                  },
                  yAxis: "37.4"     //警戒线在y轴的坐标
                },
                {
                  silent:false,             //鼠标悬停事件  true没有，false有
                  lineStyle:{               //警戒线的样式  ，虚实  颜色
                    type:"dotted",
                    color:"rgba(196, 134, 68)"
                  },
                  yAxis: "35.1"     //警戒线在y轴的坐标
                }]
            },
            itemStyle: {
              normal: {
                color: "#4DA1FF", //折线点的颜色
                lineStyle: {
                  color: "#4DA1FF" //折线的颜色
                }
              }
            },
            data: [35.1, 36.6, 37.5, 39.2, 37.0, 36.3, 38.5,37.4,36.5,37.0,38.2,36.5,35.1,36.6,37.7,36.5]
          },
        ]
      }
    );
    }
  }
}
</script>

<style scoped>
@import "../assets/css/history.css";
</style>
