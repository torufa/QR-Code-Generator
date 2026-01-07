let inp = document.querySelector("input");
let btn = document.querySelector("button");
let qrBox = document.getElementById("qrBox");

function qrCodeGenerator(){
    if(inp.value === ""){
        document.querySelector(".alertbox").style.display = "block";
        document.querySelector(".down").style.display = "none";
        qrBox.innerText = "";
    }else{
        document.querySelector(".alertbox").style.display = "none";
        document.querySelector(".down").style.display = "block";
        qrBox.innerText = "";
        new QRCode(qrBox, {
            text: inp.value
        });
    }
}


btn.addEventListener("click", qrCodeGenerator);
inp.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        qrCodeGenerator();
    }
})


let downBtn = document.querySelector(".down");
downBtn.addEventListener("click", function(){
    let img = qrBox.querySelector("img");
    if(!img) return;

    let link = document.createElement("a");
    link.href = img.src;
    link.download = "qrcode.png";
    link.click();
    downBtn.appendChild("link");
})



