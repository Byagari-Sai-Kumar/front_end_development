const path = require('path');

module.exports = {
    entry : './script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
        assetModuleFilename: 'asset/resources/images/[hash][ext]',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource'
            }
        ]
    }
}