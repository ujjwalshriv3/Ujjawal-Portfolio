module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ignore source map warnings from @mediapipe
      webpackConfig.ignoreWarnings = [
        {
          module: /@mediapipe\/tasks-vision\/vision_bundle\.mjs$/,
          message: /Failed to parse source map/,
        },
      ];
      return webpackConfig;
    },
  },
};
