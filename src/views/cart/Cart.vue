<template>
  <div class="jd-cart">
    <!-- 导航栏 -->
    <jdNvaBar title="购物车" righttext="..."></jdNvaBar>
    <!-- 购物车列表 -->
    <div class="cartlist">
      <!-- 购物车为空时显示的组件 -->
      <empty :show="list.length == 0"> </empty>
      <!-- 商品 -->
      <van-swipe-cell
        v-for="(item, idx) in list"
        :key="item._id"
        class="itemlist"
      >
        <van-row class="box">
          <van-col span="4" class="chebox">
            <van-checkbox
              v-model="item.checked"
              shape="square"
              @click="Clickche"
            />
          </van-col>
          <van-col span="20">
            <van-card
              :num="item.num"
              :price="item.good.price"
              :desc="item.good.desc"
              :title="item.good.name"
              class="goods-card"
              :thumb="$img.baseImg + item.good.img"
            >
              <!-- 加减 -->
              <template #footer>
                <!-- 利用v-model绑定数量贼好用 -->
                <van-stepper v-model="item.num" @change="changeNum(item)" />
              </template>
            </van-card>
          </van-col>
        </van-row>
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="del(idx)"
          />
        </template>
      </van-swipe-cell>
    </div>
    <!-- 提交订单栏 -->
    <van-submit-bar
      :price="sum"
      button-text="结算"
      @submit="onSubmit"
      class="submit"
    >
      <van-checkbox v-model="Full" @click="all">全选</van-checkbox>
      <template #tip>
        <!-- 有默认地址就显示 -->
        <i class="adr" v-if="Arraddr.length>0" v-text="Arraddr[0].addr"></i>
        <!-- 没有默认地址显示 -->
        <i v-else>还没有选择地址，请先去设置地址</i>
        <span @click="onEdit" class="onEdit">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>

<script>
//导入组件
import { jdNvaBar, empty } from "@/components";
export default {
  components: {
    jdNvaBar,
    empty,
  },
  data() {
    return {
      checked: false,
      list: [],
      Full: false,
      Arraddr:[],//默认地址
    };
  },
  methods: {
    all() {
      //全选
      this.list.map((ele, indx) => {
        this.list[indx].checked = this.Full;
      });
      this.list = JSON.parse(JSON.stringify(this.list));
    },
    isFull() {
      //判断是否全选
      var cont = 0;
      this.list.map((ele) => {
        if (ele.checked) {
          cont++;
        }
        this.Full = this.list.length == cont;
      });
      if (cont == 0) {
        this.init();
      }
    },
    Clickche() {
      //每次点击判断是否全选
      this.isFull();
    },
    changeNum(item) {
      //商品数量变化进行更新
      var data = {
        id: item._id,
        num: item.num,
      };
      this.$api.fetchCartUpdate(data).then(() => {});
    },
    del(idx) {
      //删除商品
      var params = {
        id: this.list[idx]._id,
      };
      this.$api.delcart(params).then(() => {
        this.list.splice(idx, 1);
        this.isFull(); //删除之后判断是否全选
      });
    },
    onSubmit() {
      //提交订单
      var ids = "";
      this.list.map((ele) => {
        if (ele.checked) {
          ids += ";" + ele.good._id; //购物车列表项_id组件成的字符串
        }
      });
      if (!ids) {
        return this.$dialog.alert({
          title: "警告",
          message: "请选择要提交的商品",
        });
      }
      const data = {
        ids,
      };
      if (this.Arraddr.length >= 1) {
        //要是有地址才能提交
        this.$api.submitcart(data).then(() => {
          // this.$dialog.confirm({
          //   title: "支付",
          //   message: "确定购买吗?",
          // });
          this.init(); //提交后重新获取购物车商品
          this.$router.push('/order')
        });
      } else {
        this.$dialog.confirm({
          //没有地址先添加地址
          message: "请先添加地址",
        });
      }
    },
    onEdit() {
      this.$router.push("/addr");
    },
    init() {
      //获取购物车列表接口
      this.$api.fetchCartList({}).then((res) => {
        this.list = res.list || []; //获取商品
        this.Arraddr=res.addr//获取默认地址
      });
      this.Full = false; //每次获取全选都不勾选



    },
  },
  mounted() {
    this.init();
  },
  activated() {
    //解决页面不更新的问题
    this.init();
  },
  computed: {
    //在计算属性计算总价格的好处就是会实现响应式
    sum() {
      var s = 0;
      this.list.map((ele) => {
        if (ele.checked) {
          s += ele.num * ele.good.price * 100; //所有选中的商品价格乘于数量  *100是因为展示时要保留两位小数
        }
      });
      return s;
    },
  },
};
</script>

<style scoped lang='scss'>
.jd-cart {
  padding: 1.2rem 0 2rem 0;
  .delete-button {
    height: 100%;
  }
  .van-field {
    background: none;
  }
  .cartlist {
    .itemlist {
      margin: 0.2rem 0;
    }
    .van-card {
      background: #fff;
    }
  }
  .box {
    background: #fff;
    .chebox {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 2.9rem;
    }
  }
  .submit {
    margin-top: 2rem;
    .van-submit-bar__tip {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .adr {
        color: #000;
        font-style: normal;
        width: 3rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
      }
    }
  }
}
</style>