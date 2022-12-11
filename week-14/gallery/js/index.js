let myImage = new Array ();
myImage[0]="img/image-1.jpg"
myImage[1]="img/image-2.jpg"
myImage[2]="img/image-3.jpg"
myImage[3]="img/image-4.jpg"
myImage[4]="img/image-5.jpg"

let ImageCnt = 0

function moveForward(){
ImageCnt++;
if (ImageCnt > 4) ImageCnt=0
    document.getElementById("imageOne").src = myImage[ImageCnt];

}
function moveBackward(){
    ImageCnt--;
    if (ImageCnt < 0) ImageCnt=4
    document.getElementById("imageOne").src = myImage[ImageCnt];
}