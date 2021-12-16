module.exports = {
    plugins: {
      autoprefixer: {
        browsers: ['Android >= 4.0', 'iOS >= 8'],
      },
      'postcss-pxtorem': {
            rootValue: 75,// 值为设计稿宽度的1/10，例如设计稿的宽度750px，值就为75
        propList: ['*'],
      },
    },
  };