let tabButton = Array.from(document.querySelectorAll(".tabs button"));

tabButton.forEach((elem) => {
  elem.addEventListener("click", function () {
    let elemSelected = document.querySelector(
      `[data-target='${elem.getAttribute("data-source")}']`
    );

    let elemPrimary = document.querySelector(".active");
    elemPrimary.classList.remove("active");
    elemPrimary.classList.add("d-none");

    elemSelected.classList.remove("d-none");
    elemSelected.classList.add("active");
  });
});
//////////////////////////////////////////////////////////////////////////////////
let squarePlus = document.querySelectorAll(".squareplus a");
squarePlus.forEach((elem) => {
  elem.addEventListener("click", function () {
    let sign = document.querySelector(".sign");
    sign.classList.toggle("d-none");
  });
});

let hamburger = document.querySelector(".hamburger a");
hamburger.addEventListener("click", function () {
  let hamburgerInfo = document.querySelector(".hamburger-info");
  hamburgerInfo.classList.toggle("d-none");
});

let sidebar = Array.from(document.querySelectorAll(".sidebar li a"));
sidebar.forEach((elem) => {
  elem.onmouseover = function () {
    let sidebarSelected = document.querySelector(`[data-target='${elem.getAttribute('data-source')}']`);
   sidebarSelected.classList.remove('d-none');
  };
  elem.onmouseout=function(){
      let sidebarInfoSelected=document.querySelectorAll('.sidebar-info ul');
      sidebarInfoSelected.forEach((elem)=>{
          elem.classList.add('d-none')
      })
  }
});
