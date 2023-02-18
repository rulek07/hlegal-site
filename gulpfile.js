var gulp = require('gulp')
var browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
// const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(done) {
    gulp.src("sass/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
    done();
});

gulp.task('serve', function(done) {
    browserSync.init({
        server: "3004"
    });
    gulp.watch("sass/*.sass", gulp.series('sass'));
    gulp.watch("*.html").on('change', () => {
        browserSync.reload();
        done();
    });

    done();
});

gulp.task('default', function () {
    gulp.src('**/main.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'));
});

// exports.default = () => (
// 	gulp.src('css/*.css')
// 		.pipe(autoprefixer({
// 			cascade: false
// 		}))
// 		.pipe(gulp.dest('css'))
// );

gulp.task('default', gulp.series('sass', 'serve'));