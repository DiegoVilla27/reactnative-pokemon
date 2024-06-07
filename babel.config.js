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
          "@components": "./src/components"
        },
        extensions: [".js", ".jsx", ".json", ".tsx", ".ts"]
      }
    ]
  ]
};
