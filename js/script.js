// 語言
(function () {
  const langFace = document.querySelector(".lang");
  const lis = document.querySelectorAll(".lang > ul li");
  let p = document.querySelector(".lang p");

  let click = 0;
  langFace.addEventListener("click", function () {
    click++;
    click % 2 == 1
      ? langFace.classList.add("display")
      : langFace.classList.remove("display");
  });

  lis.forEach(function (li) {
    li.addEventListener("click", function (e) {
      let el = e.target;
      p.innerHTML = el.innerHTML;
    });
  });
})();

// swiper
(function () {
  var swiper = new Swiper(".swiper-banner", {
    loop: true, //循環
    autoHeight: true, //自動高
    autoplay: {
      //自動播放
      delay: 7500, //延遲
      disableOnInteraction: false, //互動後停止
      pauseOnMouseEnter: true, //滑鼠滑入時停止
    },
    slidesPerView: 1, //顯示個數
    spaceBetween: 0, //間距

    pagination: {
      //dot
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      //arrow
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})();
