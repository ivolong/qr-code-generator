const qrCodeOutput = document.getElementById("qr-code-output");

const qrCode = new QRCode(qrCodeOutput, {
    height: 750,
    width: 750,
});

function generateQrCode(valueToEncode) {
    qrCode.clear();
    qrCode.makeCode(valueToEncode);
};
