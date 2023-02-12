import { BuildOptions } from './types/config';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  // If we don't use typescript, we need babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module.s[ac]ss$/i,
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  return [typescriptLoader, cssLoader];
}
