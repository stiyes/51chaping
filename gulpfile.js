'use strict';

var gulp = require('gulp');
var env = process.env.NODE_ENV || 'development';

require('require-dir')('./gulp');

console.log('Invoking gulp -',env);

gulp.task('default',function(defaultTasks){
	gulp.start(env);
})

