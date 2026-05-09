function generateQR() {
    let name = document.getElementById("name").value;
    let blood = document.getElementById("blood").value;
    let contact = document.getElementById("contact").value;

    if (!name || !blood || !contact) {
        alert("Please fill all fields");
        return;
    }

    let data =
        "Name: " + name +
        "\nBlood: " + blood +
        "\nContact: " + contact;

    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: data,
        width: 180,
        height: 180
    });
}

function downloadQR() {
    let img = document.querySelector("#qrcode img");

    if (!img) {
        alert("Generate QR first!");
        return;
    }

    let link = document.createElement("a");
    link.href = img.src;
    link.download = "emergency-qr.png";
    link.click();
}
