var gulp = require('gulp'),
<<<<<<< .merge_file_BULqL6
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
=======
watch = require ('gulp-watch');
>>>>>>> .merge_file_fTUe1l
