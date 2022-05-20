/*
 * 2022/5/20 上午10:48
 * author: francesca
 * email: 575525869@qq.com
 * webpack.config.js
 */
// 导入 webpack-chain 模块，该模块导出了一个用于创建一个webpack配置API的单一构造函数。
const Config = require('webpack-chain');

// 对该单一构造函数创建一个新的配置实例
const config = new Config();

export default {
  chainWebpack( memo, { env, webpack, createCSSRule } ) {
    // 设置 alias
    memo.resolve.alias.set( 'foo', '/tmp/a/b/foo' );
    memo.resolve.alias.set( 'page', '/src/pages/' );
    memo.resolve.alias.set( 'com', '/src/components/' );

    // 删除 umi 内置插件
    memo.plugins.delete( 'progress' );
    memo.plugins.delete( 'friendly-error' );
    memo.plugins.delete( 'copy' );
  },
};
