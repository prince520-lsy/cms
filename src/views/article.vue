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
                    <div>共 {{total}} 条记录</div>
                    <el-button round type="primary" size="small" @click="addArticle">+ 添加面经</el-button>
                </el-row>
            </template>

            <el-table :data="tableData" border style="width: 100%" ref="form">

                <el-table-column prop="stem" label="标题" width="180">
                </el-table-column>
                <el-table-column prop="creator" label="作者" width="180">
                </el-table-column>
                <el-table-column prop="likeCount" label="点赞" width="180">
                </el-table-column>
                <el-table-column prop="views" label="浏览数"> </el-table-column>
                <el-table-column prop="createdAt" label="更新时间"> </el-table-column>
                <el-table-column label="操作" width="100">

                    <template v-slot="{row}">

                        <el-row type="flex" justify="space-between">
                            <i class="el-icon-view" @click="preview(row.id)"></i>
                            <i class="el-icon-edit-outline" @click="edit(row.id)"></i>
                            <i class="el-icon-delete" @click="del(row.id)"></i>
                        </el-row>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页器 -->
            <el-row type="flex" justify="center">

                <el-pagination layout="prev, pager, next" :total="1000" @current-change="currentChange">
                </el-pagination>
            </el-row>
        </el-card>


        <el-drawer :title="article.id?'编辑面经':'添加面经' " :visible.sync="drawer" :before-close="handleClose" @close="close">
            <span>
                <el-form ref="form" :model="article" :rules="rules" label-width="80px">
                    <el-form-item label="标题" prop="stem">
                        <el-input v-model="article.stem"></el-input>
                    </el-form-item>
                    <el-form-item label="内容" prop="content">
                        <!-- 富文本插件 -->
                        <quillEditor v-model="article.content" @blur="$refs.form.validateField('content')">
                        </quillEditor>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="small" @click="submit">确定</el-button>
                        <el-button size="small" @click="close">取消</el-button>
                    </el-form-item>
                </el-form>

            </span>
        </el-drawer>
        <el-drawer title="面经预览" :visible.sync="previewShow">
            <div style="padding:10px 20px;">
                <h2>{{article.stem}}</h2>
                <div class="content" v-html="article.content"></div>
            </div>
        </el-drawer>
    </div>
</template>
<script>
import { articleList } from '@/api/article'
import { Message } from 'element-ui'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { addArticle } from '@/api/article'
import { delArticle, getAricledetails, updateArticle } from '@/api/article'
import { quillEditor } from 'vue-quill-editor'
export default {
    components: {
        quillEditor
    },
    data() {
        return {
            tableData: [],
            total: 0,
            drawer: false,

            current: 1,
            pageSize: 10,
            article: {
                stem: '', // 标题
                content: '' // 内容
            },
            previewShow: false,
            rules: {
                stem: [
                    { required: true, message: '请输入标题', trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '请输入内容', trigger: 'blur' }
                ]
            }
        }
    },
    created() {
        this.getarticleList()
    },
    methods: {

        async getarticleList() {
            let res = await articleList({
                current: this.current,
                pageSize: this.pageSize
            })
            // console.log(70, res);
            this.tableData = res.data.data.rows
            this.total = res.data.data.total
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        addArticle() {
            this.drawer = true
        },
        submit() {
            this.$refs.form.validate(async (bool) => {
                if (bool) {

                    if (this.article.id) {
                        await updateArticle({
                            id: this.article.id,
                            stem: this.article.stem,
                            content: this.article.content

                        })
                        Message.success('编辑成功')

                    } else {
                        await addArticle(this.article)
                        Message.success('添加成功')

                    }
                    this.getarticleList()
                    this.close()

                }


            })
        },
        close() {
            this.drawer = false
            this.article = {
                stem: "",
                content: '',
            }
            this.$refs.form.resetFields()
        },
        currentChange(val) {
            this.current = val,
                this.getarticleList()
        },
        del(id) {
            console.log(167, id);
            this.$confirm('确定删除这条面经吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(async () => {
                await delArticle({ id })
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
                this.getarticleList()
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });

        },
        async edit(id) {
            this.drawer = true

            let res = await getAricledetails({ id })
            console.log(170, res);
            this.article = res.data.data
        },
        async preview(id) {
            this.previewShow = true
            let res = await getAricledetails({
                id
            })
            this.article = res.data.data
        }
    }
}
</script>
<style lang="scss" scoped>
.el-card {
    margin-top: 20px;
}
</style>