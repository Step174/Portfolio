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






document.getElementById('feedback-form').addEventListener('submit', function(evt){
  var http = new XMLHttpRequest(), f = this;
  evt.preventDefault();
  http.open("POST", "contacts.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("nameFF=" + f.nameFF.value + "&contactFF=" + f.contactFF.value + "&messageFF=" + f.messageFF.value);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      alert(http.responseText + ', Ваше сообщение получено.\nНаши специалисты ответят Вам в течении 2-х дней.\nБлагодарим за интерес к нашей фирме!');    
      f.messageFF.removeAttribute('value'); // очистить поле сообщения (две строки)
      f.messageFF.value='';
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
}, false);


var active = document.querySelector(".btn-work");
var popup = document.querySelector(".forma");
var closePopup = document.querySelector(".close");

active.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("popup-show");
})

closePopup.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup-show");

});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("popup-show")) {
            popup.classList.remove("popup-show");
        }
    }
});