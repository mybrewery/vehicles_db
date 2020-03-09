const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path")
const jsonfile = require("jsonfile")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ip = require("ip")
const CopyPlugin = require("copy-webpack-plugin");


const package_json = jsonfile.readFileSync("package.json")


const NODE_ENV = process.env.NODE_ENV
const ENTRY_POINT = "main"
const OUTPUT_PATH = "dist"
const SOURCE_MAP = NODE_ENV === "development"

let host = ip.address()
let port = 8010

host = "localhost"

let webpack_config = {
    devServer: { host, port },
    devtool: SOURCE_MAP ? "cheap-module-eval-source-map" : undefined,
    mode: NODE_ENV,
    entry: {
        "main": ENTRY_POINT
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname, OUTPUT_PATH),
        libraryTarget: "umd",
        auxiliaryComment: "coded by @sanyabeast"
    },
    module: {
        rules: [{
            /*js*/
                test: /\.(js$)/,
                use: [{
                    loader: "babel-loader"
                }]
            }, {
                /*css */
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }, {
                /*scss*/
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }, 
                    { loader: "sass-loader" }

                ]
            }, {
                /*vue*/
                test: /\.vue$/,
                use: [
                    {
                        loader: "vue-loader",
                        options: {  hot: true }
                    }
                ],
            }, {
                /*other*/
                test: /\.(ttf|eot|svg|png|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                loader: "file-loader",
                options: { name: "[path][name].[ext]" },
                }]
            }
        ]
    },
    resolve: { modules: ["src", "node_modules", "res"] },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: path.join(__dirname, OUTPUT_PATH, "index.html"),
            template: path.join(__dirname, "static", "index.html"),
            inject: true,
        })
    ],
};

if (NODE_ENV == "production") {  
    webpack_config.optimization = {
        minimizer: [
            new TerserPlugin({
                test: /\.js(\?.*)?$/i,
                terserOptions: {
                    ecma: 5,
                    warnings: false,
                    parse: {},
                    compress: {},
                    mangle: true,
                    module: false,
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_classnames: undefined,
                    keep_fnames: false,
                    safari10: true
                }
            })
        ]
    }

    webpack_config.plugins.push( new CopyPlugin([
        { from: "res", to: "res" },
    ]))

    
} else {
    
}

if ( NODE_ENV === "production" ) {
    increase_build_version();
}

function increase_build_version() {
    var splitted = package_json.version.split(".");
    var splitted_build = splitted[2].split("-");
    splitted_build[0]++;
    var new_version = [splitted[0], splitted[1], splitted_build.join("-")].join(".");
    package_json.version = new_version;

    jsonfile.writeFileSync( "package.json", package_json, {
        spaces: 4
    });
    
}

module.exports = webpack_config