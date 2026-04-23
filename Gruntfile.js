const sass = require('sass');
const tilde_importer = require("grunt-sass-tilde-importer");
const {babel} = require("@rollup/plugin-babel");
const resolve = require("@rollup/plugin-node-resolve").default;
const inject = require("@rollup/plugin-inject");
const commonjs = require("@rollup/plugin-commonjs");
const replace = require("@rollup/plugin-replace");
const env = process.env.NODE_ENV || "development";
const {terser} = require("@rollup/plugin-terser");

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
                      {name: 'cleanupAttrs', active: false },
                      {name: 'mergeStyles', active: false },
                      {name: 'inlineStyles', active: true },
                      {name: 'mergePaths', active: false },
                      {name: 'convertStyleToAttrs', active: true },
                      {name: 'convertPathData', active: false },
                      {name: 'convertTransform', active: false },
                      {name: 'removeUnusedNS', active: false },
                      {name: 'removeEditorsNSData', active: false },
                      {name: 'removeEmptyAttrs', active: false },
                      {name: 'removeHiddenElems', active: false },
                      {name: 'minifyStyles', active: false },
                      {name: 'removeUselessStrokeAndFill', active: false },
                      {name: 'removeStyleElement', active: false }
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
                // dest: './intermediate-svg'  // Keep the intermediate files
              },
              svg: {
                namespaceClassnames: false
              },
              mode: {
                symbol: { // Activate the symbol mode
                  bust: false,
                //   render: {
                    // scss: true,
                    // dest: 'dist/symbol/sprite.scss'
                //   },
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
                importer: tilde_importer,
                api: 'modern'
            },
            default: {
                files: {
                  "./docs/dist/style.css": "./docs/_sass/index.scss",
                  "./docs/dist/jekyll.yml": "./docs/_sass/jekyll.scss",
                }
            },
        },
        watch: {
            options: {livereload: false, spawn: false},
            styles: {
                files: ["./src/scss/**/*.scss"],
                tasks: ["sass"],
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
                        babelHelpers: "bundled",
                        presets: [["@babel/preset-env", { modules: false }]],
                        plugins: [
                            "@babel/plugin-proposal-object-rest-spread",
                            "@babel/plugin-transform-destructuring"
                        ]
                    }),
                    inject({
                        // Эта опция заменит все упоминания `process` в коде
                        process: 'process-es6', // [4†L18-L20]
                        // Эта опция заменит все упоминания `Buffer` в коде
                        Buffer: ['buffer-es6', 'Buffer'],
                        // Вы можете добавить и другие глобальные переменные, если нужно
                        // global: [path.resolve('src/polyfills/global.js'), 'default'],
                    }),
                    commonjs(),
                    replace({
                        preventAssignment: true,
                        "process.env.NODE_ENV": JSON.stringify(env)
                    }),
                    env === "production" ? terser({ mangle: false }) : null
                ].filter(Boolean),
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
        terser: {
            vendor_js: {
                options: {
                    output: {
                        comments: false,
                    },
                    mangle: false,
                    sourceMap: true
                },
                files: {
                    "dist/js/vendor-other.js": [
                        "src/js/popper.js", // for tooltip & popover
                        // "src/js/bootstrap/util.js", // v3
                        "src/js/bootstrap/transition.js", // v3
                        // "src/js/bootstrap/alert.js", // v3
                        "src/js/bootstrap/button.js", // v3
                        // "src/js/bootstrap/carousel.js", // v3
                        // "src/js/bootstrap/collapse.js", // v3
                        "src/js/bootstrap/modal.js", // v3
                        "assets/js/bootstrap-modal-enforceFocus-patch.js", // for v3
                        "src/js/bootstrap/dropdown.js", // v3
                        // "src/js/bootstrap/tooltip.js", // v3
                        // "src/js/bootstrap/popover.js", // v3
                        // "src/js/bootstrap/scrollspy.js", // v3
                        "src/js/bootstrap/tab.js", // v3
                        "src/js/bootstrap/affix.js", // v3
                        "src/js/bootstrap/util.js", // v4
                        "src/js/bootstrap/alert.js", // v4
                        "src/js/bootstrap/collapse.js", // v4
                        "src/js/bootstrap/carousel.js", // v4
                        // "src/js/bootstrap/dropdown.js", // v4
                        // "src/js/bootstrap/tab.js", // v4 li.active a -> a.active
                        "src/js/bootstrap/tooltip.js", // v4
                        "src/js/bootstrap/popover.js", // v4
                        "src/js/bootstrap/toast.js", // v4
                        "src/js/bootstrap-select/dist/bootstrap-select.min.js",
                    ],
                },
            }
        },
    });
    grunt.loadNpmTasks("grunt-svg-sprite");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-rollup");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-terser");
    grunt.registerTask('copy-default', ['copy:svg_sprite__template', 'copy:svg_sprite__symbolSpriteForDocs', 'copy:js']);
    grunt.registerTask("default", ["terser", "rollup", "svg_sprite", "copy-default", "sass", "copy:jekyll"]);
    // grunt.registerTask("default", ["rollup", "svg_sprite", "copy-default", "sass"]);
    grunt.registerTask("tmp", ["copy:jekyll"]);
    grunt.registerTask('dev', ['default', 'watch']);

};
