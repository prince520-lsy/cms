<template>
    <div>
        <!-- 面包屑组件 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">面经后台</el-breadcrumb-item>
            <el-breadcrumb-item>面经管理</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <template v-slot:header>
                <el-row type="flex" justify="space-between">
                    <div>共391条记录</div>
                    <el-button round type="primary" size="small">+ 添加面经</el-button>
                </el-row>
            </template>
            <!-- 表格
          data: 接收渲染的数据的属性，数据类型为数组
          border: 边框  下面写法就是:border="true"的简写
         -->
            <el-table :data="tableData" border style="width: 100%">

                <el-table-column prop="stem" label="标题" width="180">
                </el-table-column>
                <el-table-column prop="creator" label="作者" width="180">
                </el-table-column>
                <el-table-column prop="likeCount" label="点赞" width="180">
                </el-table-column>
                <el-table-column prop="views" label="浏览数"> </el-table-column>
                <el-table-column prop="createdAt" label="更新时间"> </el-table-column>
                <el-table-column label="操作" width="100">

                    <template>

                        <el-row type="flex" justify="space-between">
                            <i class="el-icon-view"></i>
                            <i class="el-icon-edit-outline"></i>
                            <i class="el-icon-delete"></i>
                        </el-row>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页器 -->
            <el-row type="flex" justify="center">

                <el-pagination layout="prev, pager, next" :total="1000">
                </el-pagination>
            </el-row>

        </el-card>
    </div>
</template>
<script>
import { articleList } from '@/api/article'
export default {
    data() {
        return {
            tableData: [],
            total: 0
        }
    },
    created() {
        this.getarticleList()
    },
    methods: {
        async getarticleList() {

            let res = await articleList({
                current: 1,
                pageSize: 10

            })
            console.log(70, res);
            this.tableData = res.data.data.rows
            this.total = res.data.data.pageTotal
        }
    }
}
</script>
<style lang="scss" scoped>
.el-card {
    margin-top: 20px;
}
</style>