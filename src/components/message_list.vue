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
  </view>
</template>
<script>
import { reactive, toRefs } from "vue";
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
    padding: 20px;
    background: #ccc;
    margin-bottom: 10px;
    border-radius: 10px;

    > .title {
      font-size: 20px;
      font-weight: bold;
    }
    > .content {
      margin-top: 5px;
      font-size: 16px;
    }
  }
}
</style>