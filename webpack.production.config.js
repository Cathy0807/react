var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');

//先清空build文件夹下的文件
var fs = require('fs');
var	buildPath='./build/';
var folder_exists = fs.existsSync(buildPath);
if(folder_exists == true)
{
   var dirList = fs.readdirSync(buildPath);
   dirList.forEach(function(fileName)
   {
       fs.unlinkSync(buildPath + fileName);
   });
   console.log("clearing " + buildPath);
};

module.exports = {
	//入口文件配置
	entry: [
		'./index.jsx' // Your appʼs entry point
	],
	//输出文件配置
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	//更多配置项
	resolve: {
		extensions: ['', '.js', '.jsx']    //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
	},
	//文件的加载配置
	module: {
		loaders: loaders
	},
	//插件配置
	plugins: [
		//Webpack提供了设置环境变量来优化代码的方案
		new webpack.DefinePlugin({
	      'process.env':{
	        'NODE_ENV': JSON.stringify('production')
	      }
	    }),
	    //复制文件到构建目录
	    new CopyWebpackPlugin([
			{from: './index.html'}
		])
	]
};
