import gulp from "gulp";

// Конфигурация
import path from "../config/path";

//Plugins connect
import loadPlugins from "gulp-load-plugins";
const gp = loadPlugins();

const video = () => {
    return gulp.src(path.video.src)
    .pipe(gp.plumber({
        errorHandler: gp.notify.onError(error => ({
            title : "Video",
            message: error.message
        }))
    }))
    .pipe(gp.babel())
    .pipe(gulp.dest(path.video.dest))
}

export default video;