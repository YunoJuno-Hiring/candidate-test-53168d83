import path from 'path';

module.exports = {
  webpack: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@mocks': path.resolve(__dirname, '../src/mocks'),
      '@custom-types': path.resolve(__dirname, '../src/types'),
      '@utils': path.resolve(__dirname, '../src/utils')
    }
  }
};
