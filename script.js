var dontol = document.getElementById("mukadontol");
var countDonnntooll = 0;
var tujukanRipDontol = false;

function ayogiling() {
    if (countDonnntooll == 10 || countDonnntooll == 30 || countDonnntooll == 50) {
        audio_tolong();
    }

    if (countDonnntooll < 78) {
        countDonnntooll += 1;
        console.log(countDonnntooll);
        dontol.style.marginTop = `${countDonnntooll}px`;
    } else {
        if (tujukanRipDontol == false) {
            document.getElementById("ripdontol").style.opacity = 1;
            document.getElementById("ripdontol").style.pointerEvents = "none";
        } else {
            tujukanRipDontol == true;
            return;
        }
    }
}

function bukaLoad() {
    document.getElementById("loadontol").style.opacity = 0;
    document.getElementById("loadontol").style.pointerEvents = "none";
}

function audio_tolong() {
    document.getElementById("dontola1").play();
}

setTimeout(bukaLoad, 5000);