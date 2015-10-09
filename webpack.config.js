var getConfig = require('hjs-webpack');

var config = getConfig({
    in: 'src/',
    out: 'dist/',
    clearBeforeBuild: true,
    html: function (context) {
        context.relative = true;
        return {
            'index.html': context.defaultTemplate()
        }
    },
});

var mdLoader = { test: /\.md$/, loader: 'html-loader!markdown-loader' };
var imgLoader = { test: /\.(png|jpg)$/, loader: 'file-loader?name=dist/img/[name].[ext]' };

config.module.loaders.push(mdLoader)
config.module.loaders.push(imgLoader)

console.log(config.module.loaders)
 
module.exports = config;