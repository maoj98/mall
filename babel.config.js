module.exports = {
  presets: [
    '@vue/app'
  ],
  presets: ['@vue/cli-plugin-babel/preset'],
  // vant引入：
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]

}
