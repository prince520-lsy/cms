<template>
    <div class="layout-box">
        <el-container>
            <!-- 侧边栏导航 -->
            <el-aside width="200px">
                <div class="logo">黑马面经</div>

                <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#313a46"
                    text-color="#8390a1" active-text-color="#fff" :router="true">
                    <el-menu-item index="/dashboard">
                        <i class="el-icon-menu"></i>
                        <span slot="title">数据看板</span>
                    </el-menu-item>
                    <el-menu-item index="/article">
                        <i class="el-icon-setting"></i>
                        <span slot="title">面经管理</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <!-- 右边 -->
            <el-container>
                <!-- 头部 -->
                <el-header>
                    <el-row type="flex" justify="end" align="middle">
                        <el-avatar :src="user.avatar">

                        </el-avatar>
                        <span class="username">{{user.name}}</span>


                        <el-popover placement="top" width="230" v-model="visible">

                            <p><span class="el-icon-question" style="color:orange"></span> 您确认退出黑马面经管理后台吗？</p>
                            <div style="text-align: right; margin: 0">
                                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                                <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
                            </div>

                            <span class="el-icon-switch-button" slot="reference"></span>
                        </el-popover>
                    </el-row>
                </el-header>
                <!-- 主题内容 -->
                <el-main>
                    <router-view> </router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import { getUserInfo } from '@/api/user'
export default {
    data() {
        return {
            visible: false,
            user: {}
        }
    },
    async created() {
        const res = await getUserInfo()
        console.log(res);
        this.user = res.data.data
    }

}
</script>
<style lang="scss" scoped>
.layout-box {
    .el-container {
        height: 100vh;

        .el-aside {
            background-color: #313a46;

            .logo {
                text-align: center;
                font-size: 20px;
                color: #fff;
                padding: 20px;
            }
        }
    }
}

.username {
    margin: 0 8px;
}
</style>