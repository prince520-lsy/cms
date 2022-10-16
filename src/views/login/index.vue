<template>
    <div>
        <el-card class="login-card">
            <!-- header是card组件提供的插槽名字 -->
            <template v-slot:header>
                <span>黑马面经运营后台</span>
            </template>
            <div>
                <el-form label-position="top" label-width="80px" :model="user">
                    <el-form-item label="用户名">
                        <el-input v-model="user.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="user.password"></el-input>
                    </el-form-item>
                </el-form>
                <!--
          el-row表示行 ， 是elementUI提供的栅格布局中行的标签
          这个标签可以独立使用，通常用于布局，这个标签可以支持flex布局
         -->
                <el-row type="flex" justify="center">
                    <!-- size: 设置按钮大小的属性
          type：设置按钮类型的属性，primary表示主要按钮
           -->
                    <el-button type="primary" size="small">登录</el-button>
                    <el-button size="small">重置</el-button>
                </el-row>
            </div>
        </el-card>
    </div>
</template>
<script>
import '@/styles/index.scss'
export default {
    data() {
        return {
            // 这里的属性名可以自定义，但最好不要这样做，一般我们会取和后端规定的传输数据的名字一样
            user: {
                username: '',
                password: ''
            }
        }
    }
}
</script>
<style lang="scss" scoped>
// scss和less一样都是css预处理器，都有嵌套语法
.login-card {
    // margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    transform: translate(-50%, -50%);

    /**
     * 有scoped属性的情况下：
     * 当我们设置组件内部标签的样式的时候，默认情况下是无法设置样式，
       那怎么解决呢？
        答：scss提供了一个“样式穿透”的语法，让我们能够设置组件内部标签的样式
        这个样式穿透的语法就是：::v-deep 要设置的选择器
    */
    ::v-deep .el-card__header {
        background-color: #727cf5;
        text-align: center;
        color: #fff;
    }
}
</style>