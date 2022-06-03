// const element = document.querySelector('.something');

// const attribute = element.setAttribute('class', "something another-thing another-another-thing")

// const listItems = Array.from(document.querySelectorAll('.custom li'));
// listItems.forEach(listItem => {
//     listItem.onmouseover = function () {
//         const foundTarget = document.querySelector(`[data-target='${listItem.getAttribute('data-source')}']`);
//         foundTarget.classList.remove('d-none');
//     }

//     listItem.onmouseout = function () {
//         const unorderedLists = Array.from(document.querySelectorAll('.wrapper ul'));
//         unorderedLists.forEach(unorderedList => {
//             unorderedList.classList.add('d-none');
//         })
//     }
// })




let custom=Array.from(document.querySelectorAll(".custom li"));
custom.forEach((elem)=>{
    elem.onmouseover=function(){
        let wrapper=document.querySelector(`[data-target='${elem.getAttribute('data-source')}']`);
        console.log(wrapper);
        wrapper.classList.remove('d-none');
    }
    elem.onmouseout=function(){
        let rem=Array.from(document.querySelector('.wrapper ul'))
        rem.classList.add('d-none')
    }
})


