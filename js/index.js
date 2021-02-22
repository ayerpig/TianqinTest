window.onload = function () {
  // 轮播图
  const wrap = document.querySelector(".wrap");
  const next = document.querySelector('.btn-right');
  const prev = document.querySelector(".btn-left");
  const content = document.querySelector(".banner-left");
  const dots = document.getElementsByTagName("span");
  let timer = null;
  let index = 0;

  next.onclick = () => {
    next_img();
  }
  prev.onclick = () => {
    prev_img();
  }

  function next_img() {
    let newLeft;
    if (wrap.style.left === "-3234px") {
      newLeft = -1078;
    } else {
      newLeft = parseInt(wrap.style.left) - 539;
    }
    wrap.style.left = newLeft + "px";
    index++;
    if (index > 4) {
      index = 0;
    }
    showCurrentDot();
  }

  function prev_img() {
    let newRight;
    if (wrap.style.left === "0px") {
      newRight = -2156;
    } else {
      newRight = parseInt(wrap.style.left) + 539;
    }
    wrap.style.left = newRight + "px";
    index--;
    if (index < 0) {
      index = 4;
    }
    showCurrentDot();
  }

  function autoImg() {
    timer = setInterval(function () {
      next_img();
    }, 1500);
  }
  autoImg();
  content.onmouseenter = function () {
    clearInterval(timer);
  }
  content.onmouseleave = function () {
    autoImg();
  }
  function showCurrentDot() {
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = "";
    }
    dots[index].className = "on";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = function () {
      let dis = index - i;
      if (index === 4 && parseInt(wrap.style.left) !== -2695) {
        dis = dis - 5;
      }
      if (index === 0 && parseInt(wrap.style.left) !== -539) {
        dis = dis + 5;
      }
      console.log(dis);
      wrap.style.left = (parseInt(wrap.style.left) + dis * 539) + "px";
      console.log(wrap.style.left);
      index = i;
      showCurrentDot();
    }
  }


  //导航滑动效果
  const navList = document.querySelectorAll('.navList>li');
  for (let i = 0; i < navList.length; i++) {
    navList[i].onclick = function () {
      for (let i = 0; i < navList.length; i++) {
        navList[i].classList.remove('active');
      }
      this.classList.add('active');

    }
  }
  tarChart();
  pieChart();
  lineChart();

}


