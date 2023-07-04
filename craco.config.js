const path = require('path')
const CracoLessPlugin = require('craco-less');
module.exports = {
    plugins: [
        { // less
          plugin: CracoLessPlugin,
       
        },
      ],
   


    // webpack
    webpack: {
        // 别名
        alias: {//绝对路径
            "@": path.resolve(__dirname, "src"),
            "components": path.resolve(__dirname, "src/components"),
            "utils": path.resolve(__dirname, "src/utils"),
        }
    }
}