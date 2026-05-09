function generateQR() {

var name =
document.getElementById("name").value;

var blood =
document.getElementById("blood").value;

var contact =
document.getElementById("contact").value;

var data =
"Emergency Medical ID | " +
"Name: " + name +
" | Blood Group: " + blood +
" | Contact: " + contact;

var qrURL =
"https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=" +
encodeURIComponent(data);

document.getElementById("qrcode").innerHTML =
"<img src='" + qrURL + "'>";
}