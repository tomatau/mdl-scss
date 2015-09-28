const
  gulp = require('gulp')
, log = require("color-util-logs")
, $ = require('gulp-load-plugins')({ camelize: true, lazy: true })

const
  { blue, magenta, yellow } = $.util.colors

module.exports = function(name, glob, tasks){
  gulp.task(`watch.${name}`, function(){
    gulp.watch(glob, tasks)
  })
}