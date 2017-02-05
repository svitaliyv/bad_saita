var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('start', function() {
    nodemon({
        script: '.',
        ext: 'js',
        env: { 'NODE_ENV': 'development' }
    })
});

gulp.task('default', ['start']);