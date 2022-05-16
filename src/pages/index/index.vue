<template>
  <view class="index">
    <view>
      <img src="" alt="" />
    </view>
    <view class="h3">{{ msg }}</view>
    <view class="btn">
      <nut-button type="primary" @click="handleClick('text', msg2, true)"
        >点-我</nut-button
      >
    </view>
    <view
      ><span class="iconfont">&#xe61e;</span>
      <span class="iconfont">&#xe61a;</span>
      <span class="iconfont">&#xe61d;</span>
      <span class="iconfont">&#xe61f;</span>
      <span class="iconfont">&#xe625;</span>
    </view>
    <nut-toast :msg="msg" v-model:visible="show" :type="type" :cover="cover" />
    <nut-button type="primary">主要按钮</nut-button>
    <nut-button type="info">信息按钮</nut-button>
    <nut-button type="default">默认按钮</nut-button>
    <nut-button type="danger">危险按钮</nut-button>
    <nut-button type="warning">警告按钮</nut-button>
    <nut-button type="success">成功按钮</nut-button>
  </view>
  <view>
    <nut-button @click="toList" type="success">列表</nut-button>
  </view>
</template>

<script>
import { reactive, toRefs } from "vue";
import Taro from "@tarojs/taro";
import key from "@/utils/key";
export default {
  name: "Index",
  components: {},
  // 可以使用所有的 Vue 生命周期方法
  mounted() {
    console.log("mounted");
  },

  // onLoad
  onLoad() {
    console.log(process.env.TARO_ENV, "小程序环境变量 TARO_ENV");
    console.log(process.env.NODE_ENV, "NODE_ENV");
    console.log(key.ossKey, "key");
    console.log("onLoad");
  },

  // onReady
  onReady() {
    console.log("onReady");
  },

  // 对应 onShow
  onShow() {
    console.log("onShow");
  },

  // 对应 onHide
  onHide() {
    console.log("onHide");
  },

  // 对应 onPullDownRefresh
  onPullDownRefresh() {
    console.log("onPullDownRefresh");
  },
  setup() {
    const state = reactive({
      msg: "欢迎使用 NutUI3.0 开发小程序",
      msg2: "你成功了～",
      type: "text",
      show: false,
      cover: false,
    });

    const handleClick = (type, msg, cover = false) => {
      state.show = true;
      state.msg2 = msg;
      state.type = type;
      state.cover = cover;
    };

    const toList = () => {
      Taro.navigateTo({
        url: "/pages/list/index",
      });
    };

    return {
      ...toRefs(state),
      handleClick,
      toList,
    };
  },
};
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.h3 {
  margin: 20px;
  color: $themeColor;
  text-align: center;
}
.iconfont {
  font-size: 40px;
  color: $themeColor;
}
</style>