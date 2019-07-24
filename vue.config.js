module.exports = {
  devServer: {
    port: 3030
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/index.scss";`
      }
    },
  },
  lintOnSave: true,
  publicPath: ''
};
