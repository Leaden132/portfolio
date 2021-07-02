
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
    
  //checks for firefox browser
    if(navigator.userAgent.indexOf("Firefox") != -1 ){
      const webkitArray = document.querySelectorAll('h2');

      for (let i = 0; i < webkitArray.length; i++) {
        webkitArray[i].classList.add('fireFox');
    }
    }
  }


//mode switch
portfolio.toggleMode = () => {
      document.body.classList.toggle('dark');
}
  

portfolio.toggleMenu = (menu) => {
  menu.parentElement.classList.toggle("turnMenu");
}

portfolio.init = () => {
    portfolio.scrollTop();
    portfolio.fireFoxAdapt();
    // portfolio.toggleMode();
}


portfolio.init();
AOS.init();
