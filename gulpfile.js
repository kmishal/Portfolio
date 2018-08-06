var gulp = require ('gulp');
// require gulp-sass plugin
var sass = require ('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('./app/css'))
});

// Gulp watch syntax
gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    // Other watchers
})