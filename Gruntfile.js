module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: "./dist/defs/",
                        src: "sprite.defs.html",
                        dest: "./docs/_includes/"
                    },
                ]
            }
        },
        svg_sprite: {
          default: {
            // Target basics
            expand: true,
            cwd: 'svg',
            src: ['**/*.svg'],
            dest: 'dist',
            // Target options
            options: {
              shape: {
                dimension: {      // Set maximum dimensions
                  maxWidth: 24,
                  maxHeight: 24
                },
                spacing: {        // Add padding
                  padding: 0
                },
                dest: 'dist/intermediate-svg'  // Keep the intermediate files
              },
              mode: {
                view: {           // Activate the «view» mode
                  bust: false,
                  render: {
                    scss: true    // Activate Sass output (with default options)
                  }
                },
                defs: { // Activate the defs» mode
                  render: {
                    scss: true
                  },
                  example: true
                }
              }
            }
          }
        }
    });
    grunt.loadNpmTasks("grunt-svg-sprite");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.registerTask("default", ["svg_sprite", "copy"]);

};
