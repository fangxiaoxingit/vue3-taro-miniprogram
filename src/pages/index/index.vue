<template>
  <view class="index">
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
  <view class="list">
    <nut-button @click="toList" type="success">列表</nut-button>
  </view>
  <view class="list">
    <nut-button @click="getList(1)" type="success">请求</nut-button>
    <nut-button @click="onReset" type="success">重置</nut-button>
  </view>
  <view class="list">
    <nut-button @click="getList(2)" type="success"
      >不显示 Loading 请求</nut-button
    >
    <nut-button @click="onReset" type="success">重置</nut-button>
  </view>
  <view class="list">
    <nut-button @click="onUpload" type="success">上传</nut-button>
  </view>
  <view class="img-box">
    <image :src="path" mode="filled" />
  </view>
  <view v-if="result">请求结果：{{ result }}</view>
  <view v-for="(item, i) in cookies" :key="i" class="res-list">
    {{ item }}</view
  >
</template>

<script>
import { reactive, toRefs, ref } from "vue";
import Taro from "@tarojs/taro";
import key from "@/utils/key";
import { post } from "@/utils/request";
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
    const img = reactive({
      path: "",
      size: "",
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
    const result = ref("");
    const cookies = ref([]);
    const getList = (type) => {
      post(
        "http://www.baidu.com",
        {
          name: "测试",
        },
        type == 1
      ).then((res) => {
        console.log("测试postRes", res);
        result.value = res.errMsg;
        cookies.value = res.cookies;
      });
    };

    const onReset = () => {
      result.value = "";
      cookies.value = [];
    };

    const onUpload = () => {
      Taro.chooseImage({
        success(res) {
          console.log("chooseImage", res);
          Object.assign(img, res.tempFiles[0]);
          const tempFilePaths = res.tempFiles;
          // Taro.uploadFile({
          //   url: "https://example.weixin.qq.com/upload", //仅为示例，非真实的接口地址
          //   filePath: tempFilePaths[0],
          //   name: "file",img
          //   },
          // });
        },
      });
    };

    return {
      ...toRefs(state),
      ...toRefs(img),
      handleClick,
      toList,
      getList,
      onReset,
      result,
      cookies,
      onUpload,
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
.list {
  text-align: center;
}
.res-list {
  padding: 10px;
  word-break: break-all;
}
</style>