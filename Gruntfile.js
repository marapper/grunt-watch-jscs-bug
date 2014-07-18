/*global module, require */
(function (module, require) {
    'use strict';

    module.exports = function (grunt) {
        grunt.initConfig({
            src: {
                source: 'src/**/*.js'
            },
            jscs: {
                options: {
                    config: '.jscs.json',
                    reporter: 'text' //inline
                },
                source: {
                    files: {
                        src: '<%=src.source%>'
                    }
                }
            },
            watch: {
                source: {
                    files: ['Gruntfile.js', '<%=src.source%>'],
                    tasks: [
                        'jscs:source'
                    ],
                    options: {
                        spawn: false
                    }
                }
            }
        });

        grunt.loadNpmTasks('grunt-contrib-watch');

        grunt.loadNpmTasks('grunt-jscs');


        grunt.registerTask('default', [
            'jscs:source'
        ]);

    };
}(module, require));
