const qrCodeOutput = document.getElementById("qr-code-output");

const debounce = (callback, wait) => {
    let timeoutId = null;

    return (...args) => {
        window.clearTimeout(timeoutId);

        timeoutId = window.setTimeout(() => {
            callback.apply(null, args);
        }, wait);
    };
};

const qrCode = new QRCode(qrCodeOutput, {
    height: 750,
    width: 750,
});

function generateQrCode(valueToEncode) {
    qrCode.clear();
    qrCode.makeCode(valueToEncode);
};
