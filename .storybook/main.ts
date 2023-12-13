import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    {
      name: '@storybook/addon-styling-webpack',

      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {}
              }
            ]
          }
        ]
      }
    }
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        useSWC: true
      }
    }
  },
  docs: {
    autodocs: 'tag'
  },
  staticDirs: ['../public'],
  webpackFinal(config, { configType }) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@src': path.resolve(__dirname, 'src'),
          '@components': path.resolve(__dirname, '../src/components'),
          '@constants': path.resolve(__dirname, '../src/constants'),
          '@contexts': path.resolve(__dirname, '../src/contexts'),
          '@custom-types': path.resolve(__dirname, '../src/types'),
          '@hooks': path.resolve(__dirname, '../src/hooks'),
          '@mocks': path.resolve(__dirname, '../src/mocks'),
          '@utils': path.resolve(__dirname, '../src/utils')
        }
      }
    };
  }
};
export default config;
