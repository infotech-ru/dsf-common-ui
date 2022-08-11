const sass = require('sass');
const tilde_importer = require("grunt-sass-tilde-importer");

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
                        dest: "./docs/_includes/"
                    },
                ]
            },
            svg_sprite__symbolSpriteForDocs: {
                files: [
                    {
                        expand: true,
                        cwd: "./dist/symbol",
                        src: "*.svg",
                        dest: "./docs/dist/"
                    },
                ]
            },
        },
        svg_sprite: {
          default: {
            // Target basics
            expand: true,
            cwd: 'src/svg-for-sprite',
            src: ['**/*.svg'],
            dest: 'dist',
            // Target options
            options: {
              shape: {
                transform: [
                  {svgo: {
                    plugins: [
                      {removeStyleElement: false},
                      // {moveGroupAttrsToElems: false}
                      {inlineStyles: true},
                    ]
                  }}
                ],
                dimension: {      // Set maximum dimensions
                  maxWidth: 24,
                  maxHeight: 24
                },
                spacing: {        // Add padding
                  padding: 0
                },
                dest: './intermediate-svg'  // Keep the intermediate files
              },
              svg: {
                namespaceClassnames: false,
                transform: [
                    function(svg) {
                      // var svgDoc = svg;
                      // var styleElement = svgDoc.createElementNS("http://www.w3.org/2000/svg", "style");
                      // styleElement.textContent = ".fill{fill: var(--svg-icon-fill, #000);.stroke{stroke: var(--svg-icon-stroke, #000)}";
                      // svgDoc.appendChild(symbol);
                      return svg;
                    }
                ]
              },
              mode: {
                symbol: { // Activate the symbol mode
                  bust: false,
                  render: {
                    scss: true,
                  },
                  inline: false,
                  sprite: 'sprite.symbol.svg',
                  dimensions: false,
                  example: {
                    template: './src/tmpl/symbol/sprite.html',
                    dest: 'sprite.symbol.html'
                  }
                }
              }
            }
          }
        },
        sass: {
            options: {
                implementation: sass,
                sourceMap: false,
                importer: tilde_importer
            },
            default: {
                files: {
                  "./docs/dist/style.css": "./scss/index.scss",
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-svg-sprite");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-sass");
    grunt.registerTask("default", ["svg_sprite", "copy", "sass"]);

};
