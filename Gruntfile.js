module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        copy: {
            svg_sprite__template: {
                files: [
                    {
                        expand: true,
                        cwd: "./dist/symbol/",
                        src: "sprite.symbol.html",
                        dest: "./docs/"
                    },
                ]
            },
            svg_sprite__symbolSprite: {
                files: [
                    {
                        expand: true,
                        cwd: "./dist/symbol/svg",
                        src: "*.svg",
                        dest: "./svg/"
                    },
                ]
            },
            svg_sprite__symbolSpriteForDocs: {
                files: [
                    {
                        expand: true,
                        cwd: "./dist/symbol/svg",
                        src: "*.svg",
                        dest: "./docs/svg/"
                    },
                ]
            },
        },
        svg_sprite: {
          default: {
            // Target basics
            expand: true,
            cwd: 'svg-for-sprite',
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
              svg: {
                namespaceClassnames: false,
              },
              mode: {
                symbol: { // Activate the symbol mode
                  bust: false,
                  render: {
                    scss: true,
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
