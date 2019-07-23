module.exports = {
  devServer: {
    port: 3030
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/base.scss";`
      }
    },
  },
  lintOnSave: true,
  publicPath: ''
};
