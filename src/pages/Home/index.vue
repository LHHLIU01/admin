<template>
  <div>
    <!-- 三级联动 -->
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor
      v-for="(floor, index) in floorList"
      :key="floor.id"
      :list="floor"
    ></Floor>
    <Brand></Brand>
    <!-- <button @click="add">点我加1</button>
    <span>仓库的数据{{ count }}</span>
    <button>点我减1</button> -->
  </div>
</template>

<script>
//引入
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";

import { mapState } from "vuex";
export default {
  name: "",
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  // computed:{
  //   ...mapState(['count'])
  // },
  // methods: {
  //   add(){
  //     this.$store.dispatch('add')
  //   }
  // },
  mounted() {
    this.$store.dispatch("getFloorList");
    // 获取用户信息 并进行展示
    // this.$store.dispatch("getUserInfo");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>

<style>
</style>