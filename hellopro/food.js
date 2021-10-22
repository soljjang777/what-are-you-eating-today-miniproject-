function get_random() {
    let images = ['img/김치찜.jpg','img/떡볶이.png','img/보쌈.jpg','img/족발.jpg','img/찜닭.png','img/치킨.png']
    let random = Math.floor(Math.random() * images.length)
   document.write(
       "<img src=" + images[random] + " width=300px; height=200px; object-fit: cover; text-align: center;>" 
   )
}

function get_random2() {
     let images = ['img/마라샹궈.jpg','img/마라탕jpg','img/동파육.jpg','img/탕수육.jpg','img/짜장.png','img/차항jpg']
     let random = Math.floor(Math.random() * images.length)
    document.write(
        "<img src=" + images[random] + " width=300px; height=200px; object-fit: cover; text-align: center;>" 
    )
}

function get(){
    let img1 = document.querySelector("#food1");
    alert(img1.getAttribute("src"));
   
    // document.write("<img src=" + img1.src + ">")


}




function showPopup() {
    window.open("食べる.html", "a", "width=400, height=300, left=400, top=200");
  
}