var gulp = require('gulp')
var vue = require('vue-loader')
var named = require('vinyl-named')
var webpack = require('gulp-webpack')
var htmlone = require('gulp-htmlone')


var autoprefixer = require('autoprefixer')

var appList = ['main']

gulp.task('default', ['build'], function () {
    console.log('done')
})


gulp.task('bundle', function () {
    return gulp.src(mapFiles(appList, 'js'))
        .pipe(named())
        .pipe(webpack(getConfig()))
        .pipe(gulp.dest('dist/'))
})

gulp.task('watch', function () {
    return gulp.src(mapFiles(appList, 'js'))
        .pipe(named())
        .pipe(webpack(getConfig({ watch: true })))
        .pipe(gulp.dest('dist/'))
})

gulp.task('build', ['bundle'], function () {
    return gulp.src(mapFiles(appList, 'html'))
        .pipe(htmlone())
        .pipe(gulp.dest('dist'))
})


/**
 * @private
 */
function getConfig(opt) {
    var config = {
        output: {
            publicPath: '../dist/'
        },
        module: {
            loaders: [
                { test: /\.vue$/, loader: 'vue' },
                { test: /\.json$/, loader: 'json' },
                { test: /\.js$/, loader: 'babel-loader?presets[]=es2015&plugins[]=transform-runtime' },
                { test: /\.(?:jpg|svg|jpeg|gif|png)$/, loader: 'url?limit=8192' },
                { test: /\.(woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'}
            ]
        },
        vue: {
            autoprefixer: { browsers: ['ios_saf >= 7', 'android >= 4'] }
        },
        // resolve: {
        //     alias: {
        //         vue: './dist/vue.js'
        //     }
        // },
        devtool: 'source-map'
    }
    if (!opt) {
        return config
    }
    for (var i in opt) {
        config[i] = opt[i]
    }
    return config
}

/**
 * @private
 */
function mapFiles(list, extname) {
    return list.map(function (app) { return 'src/' + app + '.' + extname })
}
