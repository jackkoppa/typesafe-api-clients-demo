let httpsConfig = true;

module.exports = {
  devServer: {
    port: 8080,
    host: "localhost.jackkoppa.com"
  }
  // publicPath:
  //   process.env.NODE_ENV === "production"
  //     ? "https://jackkoppa.github.io/typesafe-api-clients-demo/"
  //     : "/"
};
