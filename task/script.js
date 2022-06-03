let submit = document.getElementById('submit-button');
let firstname = document.querySelector('.firstname');
let lastname = document.querySelector('.surname');
let pincode = document.querySelector('.pincode');


let arr = [];

submit.addEventListener('click', function (e) {
    e.preventDefault();

    arr.forEach((elem) => {
        if (elem.objName == firstname.value) {
            alert('no');
            return;
        }else if (elem.objsurname == lastname.value) {
            alert('no');
            return;
        }else if (elem.objpincode == pincode.value) {
            alert('no');
            return;
        }
    })

    let li = document.createElement('li');
    li.classList.add('list-group-item');

    let span1 = document.createElement('span');
    span1.classList.add('user-firstname');
    span1.innerHTML = `---${firstname.value}----`;


    let span2 = document.createElement('span');
    span2.classList.add('user-lastname');
    span2.innerHTML = `---${lastname.value}----`;


    let span3 = document.createElement('span');
    span3.classList.add('user-pincode');
    span3.innerHTML = `---${pincode.value}----`;


    li.append(span1);
    li.append(span2);
    li.append(span3);

    let ul = document.querySelector('.list-group');
    ul.append(li);

    const user = {
        objName: firstname.value,
        objsurname: lastname.value,
        objpincode: pincode.value
    }

    firstname.value = '';
    lastname.value = '';
    pincode.value = '';


    arr.push(user);
    console.log(arr);

});





