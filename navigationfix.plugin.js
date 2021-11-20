/**
 * @name NavigationFix
 * @version 0.0.1
 * @description Fix thumb button navigation on linux
 * @author Fugi
 * @source https://github.com/FugiMuffi/BDNavigationFix
 */

 module.exports = class NavigationFix {

    handleMouseUp(e) {
        if (e.button === 3 || e.button === 4) e.preventDefault();
    }

    start() {
        window.addEventListener("mouseup", this.handleMouseUp);
    }

    stop() {
        window.removeEventListener("mouseup", this.handleMouseUp)
    }
}
