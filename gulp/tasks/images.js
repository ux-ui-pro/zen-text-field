export const images = () => {
    return app.gulp.src(app.path.src.svg)
        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream())
}
