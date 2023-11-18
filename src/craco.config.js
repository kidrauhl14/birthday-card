import CracoAlias from 'craco-alias'
import FontPreloadPlugin from 'webpack-font-preload-plugin'

export default {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigPath: 'tsconfig.paths.json',
      },
    },
  ],
  webpack: {
    plugins: {
      add: [
        new FontPreloadPlugin({
          extensions: ['woff2'],
        }),
      ],
    },
  },
}
