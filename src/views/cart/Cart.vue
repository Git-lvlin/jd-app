<template>
  <div class="jd-cart">
    <jdNvaBar :active="3"/>
    <van-search
      v-model="value"
      show-action
      label="车品牌"
      background="#4fc08d"
      placeholder="请输入品牌名称拼音首字母"
      @search="onSearch"
    >
    </van-search>
    <van-grid :column-num="3">
      <van-grid-item v-for="item in list" :icon="item.brand_logo" :key="item.id" :text="item.brand_name"/>
    </van-grid>
    <jdTabbar />
  </div>
</template>

<script>
//导入组件
import { jdTabbar,jdNvaBar } from "@/components";
export default {
  components: {
    jdTabbar,
    jdNvaBar
  },
  data() {
    return {
      list: [],
      value:''
    };
  },
  methods: {
    onSearch(val){
      const params={
        first_letter:val,
        key:'5ce4ae659de965c5d010b6c61dd0b4ad'
      }
      //获取车品牌列表接口
      this.$api.cxdqBrand(params).then((res) => {
        this.list=res.result
      });
      
    }
  },
  mounted() {
  },
  computed: {
  },
};
</script>

<style scoped lang='scss'>
.jd-cart {
  padding: 0 0 2rem 0;
}
</style>