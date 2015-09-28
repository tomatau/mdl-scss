const
  gulp = require('gulp')
, path = require('path')
, httpServer = require('http-server')


const
  { ROOT, DIST } = require('./gulp/paths')

const
  tasks = require('require-dir')(
    path.join(__dirname, 'gulp')
  )

tasks.scss('all', `${ROOT}/src/mdl-scss.scss`, DIST)
// tasks.watch('scss', 'mdl-scss.scss', ['scss.all'])

gulp.task('dev', function(){
  gulp.watch(`${ROOT}/src/**/*.scss`, ['scss.all']);
  var server = httpServer.createServer({
    root: DIST
  });
  server.listen(8080);
})

gulp.task('default', require('gulp-task-listing'))