var getConfig = require('hjs-webpack')

var config = getConfig({
    in: 'src/',
    out: 'examples/',
    clearBeforeBuild: true,
    html: function (context) {
        context.relative = true;
        return {
            'index.html': context.defaultTemplate()
        }
    },
});

var mdLoader = { test: /\.md$/, loader: 'html-loader!markdown-loader' };
config.module.loaders.push(mdLoader)
 
module.exports = config;