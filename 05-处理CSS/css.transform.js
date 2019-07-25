// transform 选项是在 import css 样式后执行的
module.exports = function (css) {
    console.log(css);
    return window.innerWidth < 1000 ? css.replace("red", "green") : css
};