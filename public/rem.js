// 移动端适配方案：以828px设计稿为基准，1rem = 100px。eg：font-size: 0.32rem;(字体大小为32px)。
;(function (document, window) {
  let designWidth = 828 // 设计稿宽度，需根据设计稿进行调整。
  document.documentElement.style.fontSize = document.documentElement.clientWidth / designWidth * 100 + "px";
  window.onresize = function () {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / designWidth * 100 + "px";
  }
}(document, window))
  