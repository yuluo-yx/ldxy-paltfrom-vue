const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  transpileDependencies: true,
  // 如果要关闭es-lint验证，需要设置
  lintOnSave: false,

  // 设置css样式的主入口文件
  css: {
    loaderOptions: {
      scss: {
        // 主入口css文件路径
        additionalData: `@import "./src/styles/style.scss";`
      }
    }
  },

});
