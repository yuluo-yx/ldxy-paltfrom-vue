<template>

    <div class="pages">
        <div class="common-layout">
            <el-container>
                <el-header class="header">
                    <Tm />
                </el-header>
                <el-main class="main">
                    <!-- <router-view /> -->
                    <span>
                        首页
                    </span>
                    <br>
                    <el-button type="primary">Primary</el-button>
                </el-main>
                <el-footer class="footer">
                    Footer
                </el-footer>
            </el-container>
        </div>
    </div>

</template>

<script setup>
import Tm from "../../components/TopMenu.vue"

</script>

<style lang="scss">
.pages {
    display: flex;
    align-items: center;
    justify-content: center;

    .header {
        background-color: pink;
    }
    .main {
        background-color: skyblue;
    }
    .footer {
        background-color: green;
    }

    span {
        font-size: 20px;
        color: black;
        font-weight: 700;
        text-align: center;
    }
}
</style>