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
for (let i = 0 ; i<btn.length; i++){

    btn[i].onclick = function () {
        for (let j =0; j< btn.length; j++) btn[j].classList.remove("butt-active")
        btn[i].classList.add("butt-active");
    }
}