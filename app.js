let qrImg = document.querySelector("#qr_img");
let imgBox = document.querySelector(".img_box");
let qrText = document.querySelector("#txturl");
async function generateQrCode(){
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
}
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    generateQrCode();
})