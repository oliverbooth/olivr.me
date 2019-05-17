module.exports = (grunt) => {
    const sass = require("node-sass");
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        clean: {
            dist: ["dist/"]
        },

        copy: {
            dist: {
                files: [
                    { expand: true, src: ["**/*.php", "**/*.html", "**/*.jpg", "**/*.png", "**/*.svg", "**/.ht*"], cwd: "src/", dest: "dist/", filter: "isFile", dotFile: true }
                ]
            }
        },

        sass: {
            options: {
                implementation: sass,
                outputStyle: "compressed",
                sourceMap: true
            },
            dist: {
                files: [
                    { expand: true, src: ["**/*.scss", "**/*.sass"], cwd: "src/", dest: "dist/", ext: ".min.css", filter: "isFile", dotFile: true }
                ]
            }
        },

        uglify: {
            dist: {
                files: [
                    { expand: true, src: ["**/*.js"], cwd: "src/", dest: "dist/", ext: ".min.js", filter: "isFile", dotFile: true }
                ]
            }
        },

        postcss: {
            options: {
                processors: [
                    require("pixrem")(),
                    require("autoprefixer")({ browsers: "last 2 versions" })
                ]
            },

            dist: {
                src: "dist/**/*.css"
            }
        },

        watch: {
            dist: {
                files: "src/**/*",
                tasks: ["default"],
                options: {
                    debounceDelay: 250,
                }
            }
        }
    });

    grunt.registerTask("default", ["clean", "copy", "sass", "uglify", "postcss"]);
    grunt.registerTask("live", ["default", "watch"]);
};
