var gulp = require("gulp");
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-image');
var notify = require("gulp-notify");
var watchSass = require("gulp-watch-sass");
var clean = require('gulp-clean');
var rename = require("gulp-rename");
var concat = require("gulp-concat");
var runSequence = require('run-sequence');
var runTimestamp = Math.round(Date.now()/1000);

var task = {

	clean: function(){
		return gulp.src('./build', {read: false})
        		.pipe(clean())
	},

	sass: function(){
		return gulp.src('./src/scss/**/*.scss')
			.pipe(sass())
			.on('error', utils.swallowError)
			.pipe(autoprefixer({
				browsers: ['last 50 versions'],
				cascade: false
			}))
			.pipe(cssmin())
			.pipe(gulp.dest('./build/css'));
	},

	js: function(){
		return gulp.src(['./src/js/**/*.js','!./src/js/common/**/*.js'])
			.pipe(uglify())
			.on('error', utils.swallowError)
			.pipe(gulp.dest('./build/js'));
	},

	jsGlobal: function(){
		return gulp.src('./src/js/common/**/*.js')
			.pipe(concat('enext-global.js'))
			.pipe(uglify())
			.on('error', utils.swallowError)
			.pipe(gulp.dest('./build/js/'));
	},

	img: function(){
		return gulp.src('./src/img/**/*')
			.pipe(imagemin())
			.pipe(gulp.dest('./build/img'));
	}
};

var utils = {
	swallowError: function(error) {
		console.log(error.toString())
		utils.alert(error.toString())
		this.emit('end')
	},

	alert: function(msg){
		gulp.src('./src').pipe(notify(msg));
	}
};

gulp.task('clean', task.clean);
gulp.task('sass', task.sass);
gulp.task('js', task.js);
gulp.task('jsGlobal', task.jsGlobal);
gulp.task('img', task.img);


gulp.task('observe', function(){
	gulp.watch(['./src/scss/**/*.scss'], function(){
        gulp.run('sass');
    });
    
	gulp.watch(['./src/js/**/*.js'], function(){
        gulp.run('js');
        gulp.run('jsGlobal');
    });
    
	gulp.watch('./src/img/**/*', function(){
        gulp.run('img');
    });
});

gulp.task('default', function(callback){
	runSequence('clean', ['sass','jsGlobal','js','img'], callback);
});
gulp.task('watch', ['observe']);