function get_random() {
    let images = ['img/김치찜.jpg','img/떡볶이.png','img/보쌈.jpg','img/족발.jpg','img/찜닭.png','img/치킨.png']
    let random = Math.floor(Math.random() * images.length)
   document.write(
       "<img src=" + images[random] + " width=300px; height=200px; object-fit: cover; text-align: center;>" 
   )
}

function get_random2() {
     let images = ['img/마라샹궈.jpg','img/마라탕.jpg','img/동파육.jpg','img/탕수육.jpg','img/짜장.png','img/차항.jpg']
     let random = Math.floor(Math.random() * images.length)
    document.write(
        "<img src=" + images[random] + " width=300px; height=200px; object-fit: cover; text-align: center;>" 
    )
}

function get_random3() {
    let images = ['img/스시.jpg','img/스키야키.jpg','img/오코노미야키.jpg','img/교자.jpg','img/타코야키.png','img/라멘.jpg']
    let random = Math.floor(Math.random() * images.length)
   document.write(
       "<img src=" + images[random] + " width=300px; height=200px; object-fit: cover; text-align: center;>" 
   )
}

function get_random4() {
    let images = ['img/과일.jpg','img/타이야키.jpg','img/빙수.jpg','img/아이스크림.jpg','img/커피.jpg','img/케이크.jpg']
    let random = Math.floor(Math.random() * images.length)
   document.write(
       "<img src=" + images[random] + " width=300px; height=200px; object-fit: cover; text-align: center;>" 
   )
}

function showPopup() {
    window.open("食べる.html", "a", "width=440, height=350, left=400, top=200");
}

function showPopup2() {
    window.open("食べる2.html", "a", "width=440, height=350, left=400, top=200");
}

function showPopup3() {
    window.open("食べる3.html", "a", "width=440, height=350, left=400, top=200");
}

function showPopup4() {
    window.open("食べる4.html", "a", "width=440, height=350, left=400, top=200");
}