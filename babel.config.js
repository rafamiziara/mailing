module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@entities': './src/entities',
        '@providers': './src/providers/implementations',
        '@repositories': './src/repositories/implementations',
        '@errors': './src/errors',
        '@IProviders': './src/providers',
        '@IRepositories': '.src/repositories',
      },
    }],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};
