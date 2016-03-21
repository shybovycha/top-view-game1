var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('typescripts', function () {
    return gulp.src(['src/**/*.ts'])
        .pipe(ts({
            noImplicitAny: true,
            target: 'ES5',
            out: 'application.js'
        }))
        .pipe(gulp.dest('build/javascripts'));
});

gulp.task('stylesheets', function () {
    return gulp.src('src/**/*.css')
        .pipe(gulp.dest('build/stylesheets'));
});

gulp.task('javascripts', function () {
    return gulp.src('src/**/*.js')
        .pipe(gulp.dest('build/javascripts'));
});

gulp.task('default', ['typescripts', 'stylesheets', 'javascripts']);
