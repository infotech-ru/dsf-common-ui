const sass = require('sass');
const tilde_importer = require("grunt-sass-tilde-importer");
const {babel} = require("@rollup/plugin-babel");
const resolve = require("@rollup/plugin-node-resolve").default;
const uglify = require("@lopatnov/rollup-plugin-uglify");
const nodeGlobals = require("rollup-plugin-node-globals");
const commonjs = require("@rollup/plugin-commonjs");
const replace = require("@rollup/plugin-replace");
const env = process.env.NODE_ENV || "development";

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
            js: {
                files: [
                    {
                        expand: true,
                        cwd: "./dist/js",
                        src: "*.js",
                        dest: "./docs/dist/"
                    },
                ]
            },
            sass_var:{
              files: [
                    {
                        expand: true,
                        cwd: "./src/scss/utilities/variables",
                        src: "*.scss",
                        dest: "./docs/_sass/"
                    },
                ]
            },
            sass_func:{
              files: [
                {
                    expand: true,
                    cwd: "./src/scss/utilities/functions",
                    src: "*.scss",
                    dest: "./docs/_sass/"
                },
              ]
            },
            jekyll:{
                expand: true,
                cwd: "./docs/dist/",
                src: "jekyll.yml",
                dest: "./docs/_data/",
                options: {
                  process: function (content, srcpath) {
                    const lines = content.split('\n')
                    let mapName, isInBlock = false, parts, key, value
                    const maps = {}
                    for (const line of lines) {
                      if (isInBlock) {
                        parts = line.replace(';', '').split(':')
                        key = parts[0].trim()
                        value = parts[1].trim()
                        maps[mapName][key] = value
                        isInBlock = false
                      } else {
                        if (line.trim().endsWith('{')) {
                          mapName = line.split('{')[0].trim()
                          maps[mapName] = maps[mapName] || {}
                          isInBlock = true
                        }
                      }
                    }
                    let result = ''
                    for (mapName in maps) {
                      result += mapName + ':\n'
                      for (key in maps[mapName]) {
                        result += '- name: ' + key + '\n'
                        result += '  value: ' + maps[mapName][key] + '\n'
                      }
                      result += '\n'
                    }
                    return result
                  },
                },
            }
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
                      {cleanupAttrs: false},
                      {mergeStyles: false},
                      {inlineStyles: true},
                      {mergePaths: false},
                      {convertStyleToAttrs: true},
                      {convertPathData: false},
                      {convertTransform: false},
                      {removeUnusedNS: false},
                      {removeEditorsNSData: false},
                      {removeEmptyAttrs: false},
                      {removeHiddenElems: false},
                      {minifyStyles: false},
                      {removeUselessStrokeAndFill: false},
                      {removeStyleElement: false}
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
                namespaceClassnames: false
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
                  "./docs/dist/style.css": "./src/scss/index.scss",
                  "./docs/dist/jekyll.yml": "./docs/_sass/jekyll.scss",
                }
            },
        },
        rollup: {
            options: {
                format: "iife",
                external: [
                    "jquery",
                ],
                globals: {
                    jquery: "$",
                },
                interop: 'auto',
                plugins: [
                    resolve(),
                    babel({
                        compact: false,
                        babelHelpers: "external",
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    modules: false
                                }
                            ]
                        ],
                        plugins: [
                            "@babel/plugin-proposal-object-rest-spread",
                            "@babel/plugin-external-helpers",
                            "@babel/plugin-transform-destructuring"
                        ]
                    }),
                    nodeGlobals(),
                    commonjs(),
                    replace({
                        preventAssignment: true,
                        "process.env.NODE_ENV": JSON.stringify(env)
                    }),
                    (env === "production" && uglify()),
                ],
            },
            default: {
                options: {
                    name: "DSFUI"
                },
                files: {
                    "dist/js/script.js": "src/js/entry.js"
                }
            }
        },
    });
    grunt.loadNpmTasks("grunt-svg-sprite");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-rollup");
    grunt.registerTask('copy-default', ['copy:svg_sprite__template', 'copy:svg_sprite__symbolSpriteForDocs', 'copy:js', 'copy:sass_var', 'copy:sass_func']);
    grunt.registerTask("default", ["rollup", "svg_sprite", "copy-default", "sass", "copy:jekyll"]);
    // grunt.registerTask("default", ["rollup", "svg_sprite", "copy-default", "sass"]);
    grunt.registerTask("tmp", ["copy:jekyll"]);

};
