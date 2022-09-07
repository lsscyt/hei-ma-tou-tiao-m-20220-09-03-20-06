<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录" />
    <!-- 导航栏 -->
    <!-- 登录表单 -->
    <van-form @submit="onSubmit" ref="submitForm">
      <van-field
        v-model.number="user.mobile"
        maxlength="11"
        name="mobile"
        placeholder="请输入手机号"
        :rules="mobileRules"
        ><i slot="left-icon" class="toutioa toutiao-shouji" id="toutioa"></i
      ></van-field>
      <van-field
        v-model.number="user.code"
        name="code"
        placeholder="请输入验证码"
        maxlength="6"
        :rules="codeRules"
        ><i slot="left-icon" class="toutioa toutiao-yanzhengma" id="code"></i>
        <template #button>
          <van-count-down
            :time="1000 * 6"
            format="ss s"
            @finish="IscountDownShow = false"
            v-if="IscountDownShow"
          />
          <van-button
            v-else
            round
            size="small"
            class="sendBtn"
            type="default"
            @click="OnsendSms"
            native-type="button"
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
import { login, sendSms } from '@/api/login'
import { mobileRules, codeRules } from './login.js'
import { mapMutations } from 'vuex'
export default {
  name: 'LoginPage',
  components: {},
  props: {},
  data() {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      },
      IscountDownShow: false,
      mobileRules,
      codeRules
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    ...mapMutations(['setUser']),
    async onSubmit() {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true
        // 禁止点击
      })
      try {
        const { data } = await login(this.user)
        this.setUser(data.data)
        this.$toast.success('登录成功')
        this.$router.push('/profile')
      } catch (error) {
        console.log('登录失败', error)
        this.$toast.fail('登录失败')
      }
    },
    async OnsendSms() {
      try {
        await this.$refs.submitForm.validate('mobile')
        console.log('验证成功')
        this.IscountDownShow = true
        this.$toast.success('登录成功')
      } catch (error) {
        console.log('登录失败', error)
        this.$toast.fail('登录失败')
      }
      try {
        const res = await sendSms(this.user.mobile)
        console.log(res)
      } catch (error) {
        if (
          error.response &&
          error.response.status === 429 &&
          error.response.status === 404
        ) {
          this.$toast('发送过于频繁')
        } else {
          this.$toast('发送失败')
        }
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
