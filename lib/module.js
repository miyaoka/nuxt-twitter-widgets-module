const { resolve } = require('path')

const defaultOptions = {
  directiveName: 'twitter-widgets',
  scriptUrl: '//platform.twitter.com/widgets.js'
}

module.exports = async function module(moduleOptions) {
  const options = { ...defaultOptions, ...moduleOptions }

  this.options.head.script.push({
    type: 'text/javascript',
    src: options.scriptUrl,
    async: true
  })

  this.addPlugin({
    src: resolve(__dirname, './templates/plugin.js'),
    fileName: 'nuxt-twitter-widgets-module.js',
    ssr: false,
    options
  })
}
