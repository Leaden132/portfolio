
//namespacing
const portfolio = {};



//scroll back to top
portfolio.scrollTop = () => {
let mybutton = document.getElementById("topButton");

window.onscroll = () => {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
}

portfolio.goTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  portfolio.fireFoxAdapt = () => {
    
    if(navigator.userAgent.indexOf("Firefox") != -1 ){
      const webkitArray = document.querySelectorAll('h2');

      for (let i = 0; i < webkitArray.length; i++) {
        webkitArray[i].classList.add('fireFox');
    }
    }
  }


portfolio.init = () => {
    portfolio.scrollTop();
    portfolio.fireFoxAdapt();
}


portfolio.init();
AOS.init();
