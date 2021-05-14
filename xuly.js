let image = document.getElementById("img1");
let imgArray = ["dog1.jpg", "cat1.jpg", "rabbit1.jpg"];
let imgIndex = Math.floor(Math.random() * (2 - 0 + 1));
image.src = "image/" + imgArray[imgIndex];

function next1() {
    image.setAttribute("src", "image/" + imgArray[imgIndex]);
    imgIndex = (imgIndex + 1) % imgArray.length;
    check()
}

let image2 = document.getElementById("img2");
let imgArray2 = ["dog2.jpg", "cat2.jpg", "rabbit2.jpg"];
let imgIndex2 = Math.floor(Math.random() * (2 - 0 + 1));
image2.src = "image/" + imgArray2[imgIndex2];

function next2() {
    image2.setAttribute("src", "image/" + imgArray2[imgIndex2]);
    imgIndex2 = (imgIndex2 + 1) % imgArray2.length;
    check()
}

let image3 = document.getElementById("img3");
let imgArray3 = ["dog3.jpg", "cat3.jpg", "rabbit3.jpg"];
let imgIndex3 = Math.floor(Math.random() * (2 - 0 + 1));
image3.src = "image/" + imgArray3[imgIndex3];

function next3() {
    image3.setAttribute("src", "image/" + imgArray3[imgIndex3]);
    imgIndex3 = (imgIndex3 + 1) % imgArray3.length;
    check()
}

let image4 = document.getElementById("img4");
let imgArray4 = ["dog4.jpg", "cat4.jpg", "rabbit4.jpg"];
let imgIndex4 = Math.floor(Math.random() * (2 - 0 + 1));
image4.src = "image/" + imgArray4[imgIndex4];

function next4() {
    image4.setAttribute("src", "image/" + imgArray4[imgIndex4]);
    imgIndex4 = (imgIndex4 + 1) % imgArray4.length;
    check()
}

let image5 = document.getElementById("img5");
let imgArray5 = ["dog5.jpg", "cat5.jpg", "rabbit5.jpg"];
let imgIndex5 = Math.floor(Math.random() * (2 - 0 + 1));
image5.src = "image/" + imgArray5[imgIndex5];

function next5() {
    image5.setAttribute("src", "image/" + imgArray5[imgIndex5]);
    imgIndex5 = (imgIndex5 + 1) % imgArray5.length;
    check()
}

let image6 = document.getElementById("img6");
let imgArray6 = ["dog6.jpg", "cat6.jpg", "rabbit6.jpg"];
let imgIndex6 = Math.floor(Math.random() * (2 - 0 + 1));
image6.src = "image/" + imgArray6[imgIndex6];

function next6() {
    image6.setAttribute("src", "image/" + imgArray6[imgIndex6]);
    imgIndex6 = (imgIndex6 + 1) % imgArray6.length;
    check()
}

function check() {
    if ((imgIndex == 0) && (imgIndex2 == 0) && (imgIndex3 == 0) && (imgIndex4 == 0) && (imgIndex5 == 0) && (imgIndex6 == 0)) {
        document.getElementById("img1").style.boxShadow = "10px 30px 50px red";
        document.getElementById("img2").style.boxShadow = "10px 30px 50px red";
        document.getElementById("img3").style.boxShadow = "10px 30px 50px red";
        document.getElementById("img4").style.boxShadow = "10px 30px 50px red";
        document.getElementById("img5").style.boxShadow = "10px 30px 50px red";
        document.getElementById("img6").style.boxShadow = "10px 30px 50px red";
    } else if ((imgIndex == 1) && (imgIndex2 == 1) && (imgIndex3 == 1) && (imgIndex4 == 1) && (imgIndex5 == 1) && (imgIndex6 == 1)) {
        document.getElementById("img1").style.boxShadow = "10px 30px 50px red";
        document.getElementById("img2").style.boxShadow = "10px 30px 50px red";
        document.getElementById("img3").style.boxShadow = "10px 30px 50px red";
        document.getElementById("img4").style.boxShadow = "10px 30px 50px red";
        document.getElementById("img5").style.boxShadow = "10px 30px 50px red";
        document.getElementById("img6").style.boxShadow = "10px 30px 50px red";

    } else if ((imgIndex == 2) && (imgIndex2 == 2) && (imgIndex3 == 2) && (imgIndex4 == 2) && (imgIndex5 == 2) && (imgIndex6 == 2)) {
        document.getElementById("img1").style.boxShadow = "10px 30px 50px red";
        document.getElementById("img2").style.boxShadow = "10px 30px 50px red";
        document.getElementById("img3").style.boxShadow = "10px 30px 50px red";
        document.getElementById("img4").style.boxShadow = "10px 30px 50px red";
        document.getElementById("img5").style.boxShadow = "10px 30px 50px red";
        document.getElementById("img6").style.boxShadow = "10px 30px 50px red";

    }else {
        document.getElementById("img1").style.boxShadow = "";
        document.getElementById("img2").style.boxShadow = "";
        document.getElementById("img3").style.boxShadow = "";
        document.getElementById("img4").style.boxShadow = "";
        document.getElementById("img5").style.boxShadow = "";
        document.getElementById("img6").style.boxShadow = "";

    }
}


