import * as nodePath from 'path'

const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`
    },
    src: {
        js: `${srcFolder}/js/*.js`,
        scss: `${srcFolder}/scss/*.scss`,
        html: [srcFolder + "/**/*.{html,json}", "!" + srcFolder + "/html/**/*"],
        svg: [srcFolder + "/img/**/*.svg", "!" + srcFolder + "/img/fav/**/*"]
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,png,gif,webp,svg,ico}`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}
