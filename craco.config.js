const path = require("path");

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `@import "@styles/main.scss";`,
      },
    },
  },
  webpack: {
    alias: {
      "@src": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@apis": path.resolve(__dirname, "./src/apis"),
    },
  },
};
