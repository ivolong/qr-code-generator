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

const generateQrCode = debounce(function (valueToEncode) {
    qrCode.clear();

    if (valueToEncode?.length > 0) qrCode.makeCode(valueToEncode);
}, 500);
