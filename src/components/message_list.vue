<template>
  <view class="message-list">
    <view
      v-for="item in list"
      :key="item.id"
      @click="onDetail(item)"
      class="list"
    >
      <view class="title">{{ item.title }}</view>
      <view class="content">{{ item.content }}</view>
    </view>
    <view class="red" type="button"> Log in</view>
  </view>
</template>
<script>
import { reactive, toRefs } from "vue";
import {shake} from '@/utils/tools';
export default {
  name: "MessageList",
  emits: ["detail"],
  props: {
    list: {
      type: Array,
      default: [],
    },
  },
  setup(props, content) {
    const onDetail = (item) => {
      shake();
      content.emit("detail", item);
    };
    return {
      onDetail,
    };
  },
};
</script>
<style lang="scss">
.message-list {
  padding: 10px;
  > .list {
    margin-bottom: 30px;
    border-radius: 10px;
    border: 0;
    outline: 0;
    font-size: $ruler;
    padding: $ruler;
    background-color: $color-bg;
    text-shadow: 1px 1px 0 $color-white;
    box-shadow: -5px -5px 20px $color-white, 5px 5px 20px $color-shadow;
    transition: all 0.3s ease;
    &:active {
      box-shadow: inset 1px 1px 2px $color-shadow,
        inset -1px -1px 2px $color-white;
    }

    > .title {
      font-size: 20px;
      font-weight: bold;
      color: #000;
    }
    > .content {
      margin-top: 5px;
      font-size: 16px;
      color: #666;
    }
  }
}
.red {
  border: 0;
  outline: 0;
  font-size: $ruler;
  border-radius: $ruler * 20;
  padding: $ruler;
  background-color: $color-bg;
  text-shadow: 1px 1px 0 $color-white;
  color: #61677c;
  font-weight: bold;
  box-shadow: -5px -5px 20px $color-white, 5px 5px 20px $color-shadow;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 600;
  display: block;
  color: $color-red;
  text-align: center;

  &:active {
    box-shadow: inset 1px 1px 2px $color-shadow,
      inset -1px -1px 2px $color-white;
  }
}
</style>