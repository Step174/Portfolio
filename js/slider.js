var arrowleft = document.querySelector(".arrow-left");
var arrowright = document.querySelector(".arrow-right");
var content1 = document.querySelector(".prew-1");
var content2 = document.querySelector(".prew-2");
var content3 = document.querySelector(".prew-3");

arrowright.addEventListener("click", function() {
    content1.classList.add("none-prew");
    content2.classList.add("show-prew");
});

arrowleft.addEventListener("click", function() {
	content1.classList.remove("none-prew");
    content1.classList.add("show-prew");
    content2.classList.remove("show-prew");
});

document.querySelectorAll('[href^="#new"]').forEach(function(lnk) {
  var speed = 0.4;
  lnk.onclick = function() {
    var w = window.pageYOffset,
      hash = this.href.replace(/[^#]*(.*)/, '$1');
    t = document.querySelector(hash).getBoundingClientRect().top
    start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
        r = (t < 0 ? Math.max(w - progress / speed, w + t) : Math.min(w + progress / speed, w + t));
      window.scrollTo(0, r);
      if (r != w + t) {
        requestAnimationFrame(step)
      } else {
        location.hash = hash
      }
    }
  }
});