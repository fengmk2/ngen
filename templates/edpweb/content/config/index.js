/*!
 * {{project}} - config/index.js
 * Copyright(c) 2012 Taobao.com
 * Author: {{name}} <{{email}}>
 */

"use strict";

/**
 * Module dependencies.
 */
var path = require('path');

var config = {

};

var customConfig = path.join(__dirname, 'config.js');
// 非测试环境需要加载相应对配置文件
if (process.env.NODE_ENV !== 'test' && fs.existsSync(customConfig)) {
  var options = require(customConfig);
  for (var k in options) {
    config[k] = options[k];
  }
}

// 判断是否服务是否在线
config.onlineStatusFile = path.join(path.dirname(__dirname), 'public', 'status.taobao');

module.exports = config;
