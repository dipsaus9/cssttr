
module.exports = function(grunt) {

  //configure tasks
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded',
          noCache: true
        },
        files: {
          'css/style.css': 'src/scss/app.scss'
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('pixrem')(),
          require('autoprefixer')({broswers: 'last 2 versions'}),
          require('postcss-size')({}),
          require('postcss-alias')({}),
          require('postcss-center')({}),
          require('postcss-vmin')({}),
        ]
      },
      files: {
        expand: true,
        cwd: 'css',
        src: ['*.css'],
        dest: 'css',
      },
    },
    watch: {
     css: {
       files: 'src/**/*.css',
       tasks: ['copy:css', 'postcss'],
       options: {
         spawn: false,
       }
     },
     html: {
       files: '**/*.html',
       tasks: ['copy:theme'],
       options: {
         spawn: false,
       }
     },
   },
   browserSync: {
       bsFiles: {
           src : 'src/**/*'
       },
       options: {
           server: {
               baseDir: "./"
           },
           watchTask: true
       }
   },
   copy: {
     images: {
       files: [{
         expand: true,
         cwd: 'src/img/',
         src: [
           '**.jpg',
           '**.jpeg',
           '**.png',
           '**.gif',
           '**.svg',
           '**.ico'
         ],
         dest: 'img'
       }]
     },
     css: {
       files: [{
         expand: true,
         cwd: 'src/',
         src: [
           '**/*.css',
         ],
         dest: 'css/'
       }]
     },
     theme: {
       files: [{
         expand: true,
         spawn: false,
         cwd: 'src/',
         src: [
           '**/*',
           '!js/**',
           '!scss/**',
           '!**/*.css',
           'fonts/**',
           '!img/**'
         ],
         dest: ''
       }]
     },
   },
 });
  //load the plugins
  grunt.loadNpmTasks('grunt-contrib-watch'); //Watch when items change
  grunt.loadNpmTasks('grunt-browser-sync'); //Sync browser
  grunt.loadNpmTasks('grunt-contrib-copy'); //copy to wordpress
  grunt.loadNpmTasks('grunt-postcss'); //post css

  //Register tasks
  grunt.registerTask('default', ['copy', 'postcss', 'browserSync' , 'watch']);

};
