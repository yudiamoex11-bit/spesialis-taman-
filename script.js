/* =====================
PESONA FLORA SCRIPT
===================== */

document.addEventListener("DOMContentLoaded", function(){

console.log("Website Pesona Flora berhasil dimuat");


/* SMOOTH SCROLL MENU */

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

let target = document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({
behavior:"smooth"
});

}

});

});


/* POPUP GALERI */

document.querySelectorAll(".galeri img").forEach(img=>{

img.addEventListener("click",function(){

let popup = document.createElement("div");

popup.style.position="fixed";
popup.style.top="0";
popup.style.left="0";
popup.style.width="100%";
popup.style.height="100%";
popup.style.background="rgba(0,0,0,0.9)";
popup.style.display="flex";
popup.style.alignItems="center";
popup.style.justifyContent="center";
popup.style.zIndex="9999";

let image = document.createElement("img");

image.src = this.src;
image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="10px";

popup.appendChild(image);

popup.addEventListener("click",function(){
popup.remove();
});

document.body.appendChild(popup);

});

});


/* WHATSAPP CLICK LOG */

document.querySelectorAll(".whatsapp, .button").forEach(btn=>{

btn.addEventListener("click",function(){

console.log("Pengunjung mengklik tombol WhatsApp");

});

});

});