const input = document.querySelector("input");
const qrImage = document.querySelector("img");
const generateBtn = document.querySelector("#generate");
const downloadBtn = document.querySelector("#download");

generateBtn.addEventListener("click", ()=>{
    const qrValue = ` https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${input.value}`;
    qrImage.src = qrValue;
    
});
downloadBtn.addEventListener("click", async ()=>{
    const response = await fetch(qrImage.src);
    const blob = await response.blob();
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "qrImage.jpg";
    downloadLink.click();

})