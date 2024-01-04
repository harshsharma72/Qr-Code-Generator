let img = document.querySelector("img");
let input = document.querySelector("input");
let btn = document.querySelector("button");
async function generateQrCode() {
  img.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    input.value;
}
btn.addEventListener("click", () => {
  generateQrCode();
  img.style.display = "block";
});
