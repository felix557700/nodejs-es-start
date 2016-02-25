import gulp from 'gulp';
import rimraf from 'rimraf';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';
import nodemon from 'gulp-nodemon';
import relativeSource from 'gulp-relative-sourcemaps-source';

// Set production flag
var isProduction = process.env.IS_PRODUCTION || false;

const paths = {
	js: ['./src/**/*.js'],
	destination: './app'
};

gulp.task('clean', callback => {
	rimraf(paths.destination, callback);
});

gulp.task('babel', () => {
	if (isProduction) {
		return gulp.src(paths.js)
			.pipe(babel())
			.pipe(gulp.dest(paths.destination));
	}

	return gulp.src(paths.js)
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(relativeSource({dest: 'app'}))
		.pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '.'}))
		.pipe(gulp.dest(paths.destination));
});

gulp.task('start', () => {
	nodemon({
		verbose: true,
		ignore: ['.git', '.idea', 'node_modules/**/node_modules', 'test', './app'],
		watch: ['./src'],
		script: './app/server.js',
		nodeArgs: ['--debug'],
		ext: 'js json',
		env: {'NODE_ENV': 'development'}
	}).on('restart', ['babel']);
});

