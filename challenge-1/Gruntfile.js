module.exports = function (grunt) {

    //    require('load-grunt-tasks')(grunt);
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            scripts: {
                files: ['./*.html', './scss/*.scss','./js/*.js'],
                tasks: ['uglify', 'sass', 'cssmin', 'watch'],
                options: {
                    event: 'all'
                }
            }
        },


        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },


        sass: {
            options: {
                style: 'expanded'
            },
            dist: {
                files: {
                    './css/c1.css': './scss/c1.scss'
                }
            } 
        },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    src: ['./css/*.css', '!*.min.css'],
                    ext: '.min.css'
                        }]
            }
        },


        browserSync: {
            bsFiles: {
                src: ['./*.html', './css/*.css'],
            },
            options: {
                watchTask: true,
                port: 8001,
                server: {
                    baseDir: './'
                }
            }
        }



    });


    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Default task(s).
    grunt.registerTask('default', ['uglify', 'cssmin', 'sass', 'browserSync', 'watch']);
};