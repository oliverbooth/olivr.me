const { src, dest, parallel } = require("gulp");
const { phpMinify } = require("@cedx/gulp-php-minify");
const autoprefixer = require("gulp-autoprefixer");
const gulpClean = require("gulp-clean");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify-es").default;
const htmlmin = require("gulp-htmlmin");
const rename = require("gulp-rename");
const gulpCopy = require("gulp-copy");
const browserify = require("gulp-browserify");
const fs = require("fs")

function clean() {
  if (fs.existsSync("./dist")) {
    return src("dist", { read: false })
      .pipe(gulpClean({ force: true }));
  }

  return src("dist", { read: false });
}

function copy() {
  src(["src/**/.*", "src/**/*.min.*", "src/**/*.ttf", "src/**/*.jpg", "src/**/*.png", "src/**/*.db", "src/**/*.json"])
    .pipe(gulpCopy("dist", { prefix: 1 }))

  return src(["vendor/**/*", "vendor/**/*.php"])
    .pipe(gulpCopy("dist/internal"));
}

function css() {
  return src("src/**/*.scss")
    .pipe(sass({ outputStyle: "compressed", sourceMap: true }))
    .pipe(autoprefixer({
      browsers: ["last 2 versions"],
      cascade: false
    }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("dist"))
}

function js() {
  return src(["src/**/_*.js", "src/**/*.js", "!src/**/*.min.js"], { sourcemaps: true })
    .pipe(browserify({ insertGlobals: false }))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("dist", { sourcemaps: true }));
}

function php() {
  return src(["src/**/*.php", "src/**/*.phtml"], { read: false })
    .pipe(phpMinify())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("dist"));
}

exports.copy = copy;
exports.clean = clean;
exports.js = js;
exports.css = css;
exports.php = php;
exports.default = parallel(copy, php, css, js);
