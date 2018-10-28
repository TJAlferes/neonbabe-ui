module.exports = function(api) {
  api.cache(true);
  const presets = [
    [
      "@babel/env",
      {
        targets: {"browsers": ["> 1%", "last 2 versions"]},
        useBuiltIns: "usage"
      }
    ],
    "@babel/preset-react"
  ];
  return {presets};
};