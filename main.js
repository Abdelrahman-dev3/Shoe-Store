let Read_about = document.getElementById("Read_about")
let closebtn = document.getElementById("closebtn")
let dadalertid = document.getElementById("dadalertid")
Read_about.onclick = function () {
    dadalertid.style.display = "block"
}

closebtn.addEventListener("click", function () {
    dadalertid.style.display = "none"

}
)



let buttoms = document.querySelectorAll("button[id=clickright]")
let buttomsl = document.querySelectorAll("button[id=clickleft]")
let shiftValue = 237;
buttoms.forEach((ele) => {
    ele.addEventListener('click', function () {
        let param = ele.closest('.sportproduct'); 
                let sssad = param.lastElementChild
                param.scrollBy({left: shiftValue,behavior: "smooth"});
             let currentLeft = parseInt(window.getComputedStyle(ele).left, 10) || 0; //237
            let currentRight = parseInt(window.getComputedStyle(sssad).left, 10) || 0;
            let paramWidth = param.scrollWidth;
            let containerWidth = param.clientWidth; 
            if (param.scrollLeft + containerWidth >= paramWidth) {return;}
            ele.style.left = `${currentLeft + shiftValue}px`; 
            sssad.style.left = `${currentRight + shiftValue}px`; 
            });});
buttomsl.forEach((ele) => {
    ele.addEventListener('click', function () {
        let param = ele.closest('.sportproduct'); 
            let sssad = param.firstElementChild
            param.scrollBy({left: -shiftValue,behavior: "smooth"});
            let currentRight = parseInt(window.getComputedStyle(sssad).left, 10) || 0;
            let currentLeft = parseInt(window.getComputedStyle(ele).left, 10) || 0;
            if (currentLeft === 0) {return; }
            sssad.style.left = `${currentRight - shiftValue}px`; 
            ele.style.left = `${currentLeft - shiftValue}px`; 
        })});
