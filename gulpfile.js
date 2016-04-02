var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        },
        https: true
    });

    gulp.watch("./app/*.*", function () {
      browserSync.reload();
    });
});