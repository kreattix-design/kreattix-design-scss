const GulpClient = require('gulp')
const GulpCleanCss = require('gulp-clean-css')
const GulpRename = require('gulp-rename')
const GulpSass = require('gulp-sass')(require('sass'))
const GulpUtil = require('gulp-util')
const GulpSourceMaps = require('gulp-sourcemaps')

const compileScss = () => {
  return GulpClient.src('./scss/**/*.{sass,scss}')
    .pipe(GulpSourceMaps.init())
    .pipe(GulpSass())
    .on('error', GulpUtil.log.bind(GulpUtil, 'Sass Error'))
    .pipe(GulpSourceMaps.write())
    .pipe(GulpClient.dest('./css/'))
    .pipe(
      GulpRename(function (file) {
        file.basename = file.basename + '.min'
      }),
    )
    .pipe(GulpCleanCss())
    .pipe(GulpSourceMaps.write())
    .pipe(GulpClient.dest('./css/'))
}

const watchScss = () => {
  return GulpClient.watch('./scss/**/*.{sass,scss}', compileScss)
}

exports.compileScss = compileScss
exports.watchScss = watchScss
