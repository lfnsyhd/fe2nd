function encryptText(plain_text) {
    var slam_ol = CryptoJS.lib.WordArray.random(256);
    var iv = CryptoJS.lib.WordArray.random(16);
    var key = CryptoJS.PBKDF2("", slam_ol, {
        hasher: CryptoJS.algo.SHA512,
        keySize: 64 / 8,
        iterations: 999
    });
    var encrypted = CryptoJS.AES.encrypt(plain_text, key, {
        iv: iv
    });
    var data = {
        amtext: CryptoJS.enc.Base64.stringify(encrypted.ciphertext),
        slam_ltol: CryptoJS.enc.Hex.stringify(slam_ol),
        iavmol: CryptoJS.enc.Hex.stringify(iv)
    }
    return JSON.stringify(data);
}

$(".form_mobile_search").submit(function (e) { 
    var q = $(".form-searchbar-input").val();
    var url = $(this).attr("action");

    if(q.length > 0) {
        window.location.href = `${url}${q}`;
    }

    return false;
});