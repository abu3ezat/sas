let slides = document.querySelectorAll(".slide-item");
let [arrow_right, arrow_left] = document.querySelectorAll(".arrow");
let img = document.querySelectorAll(".images");

slide(slides, 2000);
slide(img, 2000);


/////////////

let cards = document.querySelectorAll(".card");
for (let i = 0 ; i<cards.length; i++){

    cards[i].onmouseover = function () {
        for (let j =0; j< cards.length; j++) cards[j].classList.remove("active")
        cards[i].classList.add("active");
    }
}

let btn = document.querySelectorAll(".select-button");
let [x , y , z] = document.querySelectorAll(".feature-box");
for (let i = 0 ; i<btn.length; i++){

    btn[i].onclick = function () {
        for (let j =0; j< btn.length; j++) btn[j].classList.remove("butt-active")
        btn[i].classList.add("butt-active");
        if (i === 0){
            x.style.display = "flex";
            y.style.display = "none";
            z.style.display = "none";
        }
        if (i === 1){
            y.style.display = "flex";
            x.style.display = "none";
            z.style.display = "none";
        }
        if (i === 2){
            z.style.display = "flex";
            x.style.display = "none";
            y.style.display = "none";
        }
    }
}

// let btns = document.querySelectorAll(".select-button");
// let boxes = document.querySelectorAll(".feature-box");
// btns.forEach(function (btn, key) {
//     btn.onclick = function () {
//         btns.classList.remove("butt-active");
//         btns[key].classList.add("butt-active");
//         boxes.forEach(function (box, key) {
//
//         })
//         btns[key].classList.add("butt-active");
//     }
// })