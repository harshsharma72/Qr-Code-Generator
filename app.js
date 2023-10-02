let qr_img = document.querySelector("img");
let txturl = document.querySelector("ïnput");
function gerQRCode(){
    qr_img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " + txturl.value;
}
let btn = document.querySelector("button");
btn.addEventListener("click", gerQRCode);