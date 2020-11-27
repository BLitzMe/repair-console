module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/api": {
        target: "http://172.20.0.5",
        changeOrigin: true
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/repair-console/" : "/"
};
