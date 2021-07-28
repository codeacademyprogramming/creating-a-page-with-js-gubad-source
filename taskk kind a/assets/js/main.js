let form = document.querySelector("#form-submit");
let inputValue = document.querySelector("input");
let inputList = document.querySelector(".list-group");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let li = document.createElement("li");
  li.classList.add("list-group-item");

  let spanInfo = document.createElement("span");
  spanInfo.classList.add("info");
  spanInfo.append(inputValue.value);
  inputValue.value = "";

  let spanTime = document.createElement("span");
  spanTime.classList.add("time");
  let date = new Date();

  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let timeSpan = `${year} year :${hours}:${minutes}:${seconds}`;
  console.log(timeSpan);
  spanTime.append(timeSpan);

  let listInfo = document.createElement("div");
  listInfo.classList.add("list-info");
  listInfo.append(spanInfo);
  listInfo.append(spanTime);

  let i = document.createElement("i");
  i.classList.add("fas");
  i.classList.add("fa-trash");
  i.classList.add("text-danger");

  let spanIcon1 = document.createElement("span");
  spanIcon1.classList.add("icon1");
  spanIcon1.innerText = "UnComplete";
  listInfo.append(spanIcon1);

  let spanIcon2 = document.createElement("span");
  spanIcon2.classList.add("icon2");
  spanIcon2.innerText = "Edit";
  listInfo.append(spanIcon2);

  li.append(listInfo);
  li.append(i);

  inputList.append(li);

  i.addEventListener("click", function () {
    if (confirm("are you sure about that")) {
      this.parentNode.remove();
    } else {
      return;
    }
  });

  spanIcon1.addEventListener("click", function () {
    if (spanIcon1.innerText == "Complete") {
      spanIcon1.innerText = "UnComplete";
      spanIcon1.parentNode.children[0].innerHTML = `${spanIcon1.parentNode.children[0].innerText}`;
    } else {
      spanIcon1.innerText = "Complete";
      spanIcon1.parentNode.children[0].innerHTML = `<del>${spanIcon1.parentNode.children[0].innerText}</del>`;
    }
  });

  let finish = document.querySelector(".finish");
  let cancel = document.querySelector(".cancel");
  spanIcon2.addEventListener("click", function () {
    if (spanIcon2.innerText == "Edit") {
      spanIcon2.innerText = "Editing";

      finish.classList.remove("d-none");
      cancel.classList.remove("d-none");
    }
    // else {
    //   spanIcon2.innerText = "Edit";
    //   finish.classList.add('d-none');
    //   cancel.classList.add('d-none');
    // }
    cancel.addEventListener("click", function () {
      this.classList.add("d-none");
      finish.classList.add("d-none");
      spanIcon2.innerText = "Edit";
    });
  });
});


////////////////////////////////////////////////////////////////////////////////////////////////////////

let tabButton = Array.from(document.querySelectorAll(".tabs button"));

tabButton.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    e.stopPropagation();
    let elemSelected = document.querySelector(
      `[data-target='${elem.getAttribute("data-source")}']`
    );

    let elemPrime = document.querySelector(".active");
    elemPrime.classList.remove("active");
    elemPrime.classList.add("d-none");

    elemSelected.classList.remove("d-none");
    elemSelected.classList.add("active");
  });
});


///////////////////////////////////////////////////////////////////////////////////////////
let next=document.querySelector('.slider .next');
next.addEventListener('click',function(e){
  e.stopPropagation();
  let elemPrimary=document.querySelector('.slider .items .item.active');
  elemPrimary.classList.remove('active');
  if(elemPrimary.nextElementSibling !=null){
   elemPrimary.nextElementSibling.classList.add('active');
  }else{
    document.querySelector('.slider .items .item:first-child').classList.add('active');
  }
});
let prev=document.querySelector('.slider .prev');
prev.addEventListener('click',function(e){
  e.stopPropagation();
  let elemPrimary=document.querySelector('.slider .items .item.active');
  elemPrimary.classList.remove('active');

  if(elemPrimary.previousElementSibling !=null){
    elemPrimary.previousElementSibling.classList.add('active');
  }else{
    document.querySelector('.slider .items .item:last-child').classList.add('active');
  }
});


