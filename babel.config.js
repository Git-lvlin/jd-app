module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [//导入vant插件，不要动
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
}
