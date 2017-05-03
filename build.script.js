/**
 * Created by Thomas on 2017-05-02.
 */

const watchify = require('watchify');
const browserify = require('browserify');
const tsify = require('tsify');
const copyfiles = require('copyfiles');

/**
 * Allow node.js imports in TypeScript
 */
browserify()
    .add('src/ts/main.ts')
    .plugin(tsify, {noImplicitAny: true, allowJs: true })
    .bundle()
    .on('error', function (error) { console.error(error.toString()); })
    .pipe(process.stdout);

/**
 * Copy index & css files to the build directory.
 */
copyfiles(["index.html", "src/css/*.css", build]);