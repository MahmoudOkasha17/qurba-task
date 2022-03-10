module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-paper/babel',
      [
        'module-resolver',
        {
          alias: {
            '@sharedComponents': './src/app/shared/components',
            '@modules': './src/app/modules',
            '@utils': './src/app/core/utils',
            '@actionTypes': './src/app/core/store/types',
            '@actions': './src/app/core/store/actions',
            '@reducers': './src/app/core/store/reducers',
            '@styles': './src/styles',
            '@assets': './src/assets',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
