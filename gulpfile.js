var gulp = require('gulp');
var connect = require('gulp-connect');
var watch = require('watch');
gulp.task('webServer', function() {
    connect.server({
        port: 8080,
        livereload: true
    })
});
gulp.task('reloadPage', function() {
    gulp.src('.')
        .pipe(connect.reload())
});
gulp.task('watch', function() {
    gulp.watch('./index.html', ['reloadPage'])
})
gulp.task('default', ['watch', 'webServer'])