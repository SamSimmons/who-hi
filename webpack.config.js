module.exports = {
   entry: "./src/js/index.js",
   output: {
       path: 'public/js',
       filename: "bundle.js"
   },
   module: {
       loaders: [
           { test: /\.css$/, loader: "style!css" },
           { test: /\.jade$/, loader: "jade" },
           {
           test: /.jsx?$/,
           loader: 'babel-loader',
           exclude: /node_modules/,
           query: {
             presets: ['es2015']
           }
         }
       ]
   }
}
