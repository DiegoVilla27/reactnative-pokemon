module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    "nativewind/babel",
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@": "./src",
          "@components": "./src/components",
          "@helpers": "./src/helpers",
          "@layouts": "./src/layouts",
          "@assets": "./src/assets",
          "@interceptor": "./src/interceptor",
          "@config": "./src/config",
          "@services": "./src/services",
          "@interfaces": "./src/interfaces",
          "@store": "./src/store",
          "@screens": "./src/screens"
        },
        extensions: [".js", ".jsx", ".json", ".tsx", ".ts"]
      }
    ]
  ]
};
