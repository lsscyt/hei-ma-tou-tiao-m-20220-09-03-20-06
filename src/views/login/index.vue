<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 导航栏 -->
    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="用户名"
        placeholder="请输入手机号"
        :rules="[
          { required: true, message: '请填写手机号' },
          {
            pattern:
              /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
            message: '格式错误'
          }
        ]"
        ><i slot="left-icon" class="toutioa toutiao-shouji" id="toutioa"></i
      ></van-field>
      <van-field
        v-model="user.code"
        name="验证码"
        placeholder="请输入验证码"
        :rules="[
          { required: true, message: '请填写验证码' },
          {
            message: '格式错误',
            pattern: /[0-9]{6}/
          }
        ]"
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
import { login } from '@/api/login'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data() {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    async onSubmit() {
      const user = this.user
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
      })
      try {
        const res = await login(user)
        console.log('登录成功', res)
        this.$toast.success('登录成功')
      } catch (error) {
        console.log('登录失败', error)
        this.$toast.fail('登录成功')
      }
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
