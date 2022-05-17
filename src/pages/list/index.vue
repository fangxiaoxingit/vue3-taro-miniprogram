<template>
  <view class="listPage">
    <messageList :list="dataList" @detail="onDetail"></messageList>
    <nut-dialog
      :title="title"
      :content="content"
      v-model:visible="visible1"
      @ok="onOk"
    />
  </view>
</template>

<script>
import { ref } from "vue";
import messageList from "@/coms/message_list.vue";
import { useDidShow } from "@tarojs/taro";
export default {
  name: "Index",
  components: {
    messageList,
  },

  setup() {
    const visible1 = ref(false);
    const title = ref("");
    const content = ref("");

    const dataList = ref([
      {
        id: 1,
        title: "标题1",
        content: "内容1",
      },
      {
        id: 2,
        title: "标题2",
        content: "内容2",
      },
      {
        id: 3,
        title: "标题3",
        content: "内容3",
      },
    ]);

    const onDetail = (item) => {
      console.log(item);
      visible1.value = true;
      title.value = item.title;
      content.value = item.content;
    };

    useDidShow(() => {});

    return {
      visible1,
      title,
      content,
      dataList,
      onDetail,
    };
  },
};
</script>

<style lang="scss">
.listPage {
  height: 100%;
  padding: 30px;
  background-color: #ebecf0;
}
</style>