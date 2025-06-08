import type { StorybookConfig } from '@storybook/react-vite'



const config_z: StorybookConfig = {
  stories: ['../src*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    
    '@storybook/addon-interactions',
    '@storybook/addon-coverage',
    '@chromatic-com/storybook'
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  
  
  
  
  
  typescript: {
    
    reactDocgen: false
    

    
  },

  docs: {}
}
export default config
