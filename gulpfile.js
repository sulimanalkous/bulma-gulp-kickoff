var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('./sass/main.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});
gulp.task('serve', gulp.series(['sass'], function() {

    browserSync.init({
        server: "./"
        // proxy: "localhost:8888/<website>/"
    });

    gulp.watch("./sass/main.sass", gulp.parallel(['sass']));
    gulp.watch("./*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series(['serve']));