function generateQR() {
    let text = document.getElementById("qrText").value;
    let qrContainer = document.getElementById("qr-code");
    qrContainer.innerHTML = ""; // Clear any previous QR code
    new QRCode(qrContainer, text); // Generate QR code using the text entered by the user

    setTimeout(() => {
        document.getElementById("downloadQR").style.display = "block"; // Show the download button after QR code is generated
        document.getElementById("footer").classList.add("show-footer"); // Show the footer after QR code generation
    }, 500);
}

function downloadQR() {
    let qrCanvas = document.querySelector("#qr-code canvas"); // Get the QR code canvas
    if (qrCanvas) {
        let link = document.createElement("a"); // Create an anchor element for the download link
        link.href = qrCanvas.toDataURL("image/png"); // Convert canvas to image data URL
        link.download = "qr-code.png"; // Set the filename for the image to be downloaded
        link.click(); // Trigger the download
    }
}
