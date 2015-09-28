const
  gulp = require('gulp')
, log = require("color-util-logs")
, $ = require('gulp-load-plugins')({ camelize: true, lazy: true })

const
  { blue, magenta, yellow } = $.util.colors

module.exports = function(name, glob, dest){
  gulp.task(`scss.${name}`, function(){
    gulp.src(glob)
      .pipe($.sass().on('error', err => {
        log.error(err)
      }))
      .pipe(gulp.dest(dest));
  })
}