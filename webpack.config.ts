import path from 'path';
import { BuildEnv } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/build-webpack-config';
import { Configuration } from 'webpack';

export default (env: BuildEnv): Configuration => {
  const mode = env.mode || 'development';

  return buildWebpackConfig({
    mode,
    paths: {
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      build: path.resolve(__dirname, 'build'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      src: path.resolve(__dirname, 'src'),
    },
    isDev: mode === 'development',
    port: env.port || 3000,
  });
};
