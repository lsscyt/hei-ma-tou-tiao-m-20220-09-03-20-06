<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 导航栏 -->
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.username"
        name="用户名"
        placeholder="请输入手机号"
        ><i slot="left-icon" class="toutioa toutiao-shouji" id="toutioa"></i
      ></van-field>
      <van-field
        v-model="user.password"
        name="验证码"
        placeholder="请输入验证码"
        ><i slot="left-icon" class="toutioa toutiao-yanzhengma" id="code"></i>
        <template #button>
          <van-button round size="small" class="sendBtn" type="default"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="sumitBtn">
        <van-button class="summitColor" block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
    <!-- 登录表单 -->
  </div>
</template>
<script>
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    }
  }
}
</script>

<style lang="less">
#toutioa {
  font-size: 37px;
}
#code {
  font-size: 37px;
}
.sendBtn {
  background-color: #ededed;
  width: 156px;
  height: 46px;
  font-size: 22px;
  color: #666;
}
.sumitBtn {
  padding: 53px 33px;
  .summitColor {
    background-color: #6db4fb;
    border: none;
  }
}
</style>
