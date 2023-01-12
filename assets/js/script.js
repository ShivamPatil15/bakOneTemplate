const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");

ham.addEventListener("click",()=>{
  ham.classList.toggle("ac");
  nav.classList.toggle("ac");
})


const all = document.querySelector('.all');
const webDesign = document.querySelector('.web');
const graphicDesign =  document.querySelector('.graphic');
const flatDesign = document.querySelector('.flat');
const allTabs = document.querySelectorAll('.tabs');
const allTablist = Array.from(allTabs);

all.addEventListener('click', showAll)
function showAll() {
    allTablist.forEach(a => {
    a.classList.remove('remove')
    a.classList.add('show')
    a.classList.remove('animate')
  })
}

webDesign.addEventListener('click', webdesign)
function webdesign() {
    allTablist.forEach(a => {
    a.classList.remove('remove')
    a.classList.add('animate')
    if (!a.dataset.web) {
      a.classList.add('remove')
    }
  })
}

graphicDesign.addEventListener('click', graphicdesign)
function graphicdesign() {
    allTablist.forEach(a => {
    a.classList.remove('remove')
    a.classList.add('animate')
    if (!a.dataset.graphic) {
      a.classList.add('remove')
    }
  })
}

flatDesign.addEventListener('click', flatdesign)
function flatdesign() {
    allTablist.forEach(a => {
    a.classList.remove('remove')
    a.classList.add('animate')
    if (!a.dataset.flat) {
      a.classList.add('remove')
    }
  })
}


const up = document.querySelector('.top');

up.addEventListener("click", myFunction);

function myFunction() {
  document.documentElement.scrollTop = 0;
}
