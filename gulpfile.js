var gulp = require('gulp'),
watch = require ('gulp-watch');

gulp.task('styles',function(){
	return gulp.src('./app/styles/styles.css').pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch',function(){
	
	watch('./index.html',function(){
		gulp.start('html');
	});
	watch('./app/styles/**/*.css',function(){
		gulp.start('styles');
	});
})

