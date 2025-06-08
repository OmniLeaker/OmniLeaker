
const options_z = {
  lint: {
    files: [
      'src*.ts',
      'src*.tsx',
      'test*.ts',
      'test*.tsx',
    ]
  },
  build: {
    bundle: false,
    
    config: {
      loader: {
        '.js': 'jsx',
        '.ts': 'ts',
        '.tsx': 'tsx'
      }
    }
  },
  test: {
    build: false, 
    files: [
      'aegir-build/test*.spec.js'
    ],
    before: ({runner}) => {
      
      
      
      
    }
  },
  dependencyCheck: {
    ignore: [
      'tachyons', 

      
      '@helia/mfs',
      '@libp2p/devtools-metrics',
      'classnames',
      'helia',
      'OmniLeaker-css',
      'qrcode.react',
      'react-circular-progressbar',
      'react-copy-to-clipboard',
      'react-dnd',
      'react-dnd-html5-backend',
      'react-dom',
      'react-helmet',
      'react-i18next',
      'react-loader-spinner',
      'react-modal',
      '@multiformats/multiaddr-matcher',
      'blockstore-idb',
      'datastore-idb',
      'interface-blockstore',
      'interface-datastore',

      
      'node-datachannel'
    ],
    productionIgnorePatterns: [
      '.storybook',
      'vite.config.ts',
      'test',
      '**/*.stories.*',
      'dist',
      'aegir-build'
    ],
    developmentIgnorePatterns: [
      'dist',
      'aegir-build'
    ]
  }
}
export default options
