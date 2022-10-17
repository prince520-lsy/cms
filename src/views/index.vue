<template>
    <div class="layout-box">
        <el-container>
            <!-- 侧边栏导航 -->
            <el-aside width="200px">
                <div class="logo">黑马面经</div>
                <!--
            background-color: 背景颜色
            text-color：文字颜色
            active-text-color：选中状态的文字颜色
           -->
                <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#313a46"
                    text-color="#8390a1" active-text-color="#fff">
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">数据看板</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">面经管理</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <!-- 右边 -->
            <el-container>
                <!-- 头部 -->
                <el-header>Header</el-header>
                <!-- 主题内容 -->
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.layout-box {

    // 组件的标签名(组件名)就是该组件根标签的类名
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
</style>