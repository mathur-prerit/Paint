window.onload=function(){

let canvas = document.getElementById("myPaintCanvas");
// console.dir(canvas)

// let heightRatio = 1.5;
// canvas.height=canvas.ratio*heightRatio;

let canvasContext = canvas.getContext("2d");
let boundings = canvas.getBoundingClientRect();
let mouseflag = false;

let mouseX = 0;
let mouseY = 0;
canvasContext.strokeStyle = 'red';
canvasContext.width = 1;

canvas.addEventListener('mousedown', function (e) {
    setMouseCoordinates(e)
    mouseflag = true;

    canvasContext.beginPath();
    canvasContext.moveTo(mouseX, mouseY);
});

canvas.addEventListener('mousemove', function (e) {
    setMouseCoordinates(e)

    if (mouseflag === true) {
        canvasContext.lineTo(mouseX, mouseY);
        canvasContext.stroke();
    }
});

canvas.addEventListener('mouseup', function (e) {
    setMouseCoordinates(e)

    mouseflag = false;
});
    
canvas.addEventListener('touchstart', function (e) {
    e.preventDefault()
    setMouseCoordinates(e)
    mouseflag = true;

    canvasContext.beginPath();
    canvasContext.moveTo(mouseX, mouseY);
});
    
canvas.addEventListener('touchmove', function (e) {
    e.preventDefault()
    setMouseCoordinates(e)

    if (mouseflag === true) {
        canvasContext.lineTo(mouseX, mouseY);
        canvasContext.stroke();
    }
});
    
canvas.addEventListener('touchend', function (e) {
    e.preventDefault()
    setMouseCoordinates(e)

    mouseflag = false;
});

function setMouseCoordinates(e) {
    mouseX = event.clientX - boundings.left;
    mouseY = event.clientY - boundings.top;
}

const mainSiteButton = document.getElementById('main-site-btn')
mainSiteButton.addEventListener('click', function (e) {
    // e.preventDefault();
    window.location.href = "http://www.preritmathur.tech/"
});

const clearButton=document.getElementById("clear-btn")
clearButton.addEventListener('click',function(e){
    // e.preventDefault();
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
});

const saveButton=document.getElementById("save-btn")
saveButton.addEventListener('click',function(e){
    // e.preventDefault();
    let imageName=prompt("Enter Image name");
    let imageFile=canvas.toDataURL("image/jpg");
    if(imageName){
        downloadImage(imageName,imageFile);
    }else{
        imageName="preritmathur";
        downloadImage(imageName,imageFile);
    }
});

const downloadImage=((imageName,imageFile)=>{
let finalImage=document.createElement("a");
finalImage.href=imageFile;
finalImage.download=imageName;
finalImage.click();
});

};
