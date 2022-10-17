<template>
    <div class="login-box">
        <el-card class="login-card">
            <!-- header是card组件提供的插槽名字 -->
            <template v-slot:header>
                <span>黑马面经运营后台</span>
            </template>
            <div>

                <el-form label-position="top" label-width="80px" :model="user" :rules="rules" ref="form">
                    <el-form-item label="用户名" prop="username">
                        <el-input v-model="user.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="user.password"></el-input>
                    </el-form-item>
                </el-form>

                <el-row type="flex" justify="center">
                    <el-button type="primary" size="small" @click="login">登录</el-button>
                    <el-button size="small">重置</el-button>
                </el-row>
            </div>
        </el-card>
    </div>
</template>
<script>
import { login } from '@/api/user'
import { getUserInfo } from '@/api/user'
export default {
    data() {
        return {
            user: {
                username: '',
                password: ''
            },
            rules: {
                username: [

                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },


    methods: {
        // 登录
        login(formname) {
            // validate是form表单用于校验整个表单规则的方法
            this.$refs.form.validate(async (bool) => {
                // bool值为true表示校验通过，否则校验失败!
                if (bool) {
                    const res = await login(this.user)
                    console.log(res, this);
                    this.$store.commit('user/SET_TOKEN',
                        res.data.data.token)
                    this.$router.push('/')
                } else {
                    console.log('校验不通过')
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.login-box {
    background: url('@/assets/login-bg.svg') no-repeat center center;
    background-size: 150%;
    height: 100vh;
}

.login-card {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40%;
    transform: translate(-50%, -50%);

    //样式穿透
    //el根标签类名就是他自己的类名
    ::v-deep .el-card__header {
        background-color: #727cf5;
        text-align: center;
        color: #fff;
    }
}
</style>