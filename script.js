
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


portfolio.init = () => {
    portfolio.scrollTop();
}


portfolio.init();
AOS.init();