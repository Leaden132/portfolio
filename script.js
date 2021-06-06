
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


portfolio.switchMode = () => {
  const modeCheck = document.getElementById('mode');

  modeCheck.addEventListener('change', () => {
    document.body.classList.toggle('dark');
  });
}


portfolio.init = () => {
    portfolio.scrollTop();
    portfolio.switchMode();
}


portfolio.init();
AOS.init();