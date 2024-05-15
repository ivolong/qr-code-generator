const qrCodeOutput = document.getElementById("qr-code-output");

const qrCode = new QRCode(qrCodeOutput, {
    height: 768,
    width: 768,
});


function generateQrCode(valueToEncode) {
    qrCode.clear();

    qrCode.makeCode(valueToEncode);
}
