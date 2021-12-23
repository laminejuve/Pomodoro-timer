

let mins = document.querySelector(".minutes input");
workMinutes = mins.value;
let seconds = document.querySelector(".seconds input").value;
console.log(workMinutes + seconds);
if (seconds === "00") {
    seconds = 60;
}
document.querySelector(".minutes input").value = workMinutes;
let RemainingTime = () => {
    seconds = seconds - 1;
    document.querySelector(".seconds input").value = (seconds < 10 ? '0' : '') + seconds;
    if (seconds === 0 && workMinutes !== "00") {
        seconds = 60;
        console.log("!0 and sec =0");
    } else if (seconds === 59 && workMinutes !== "00") {
        console.log("!0 and sec =59");
        workMinutes = workMinutes - 1;
        document.querySelector(".minutes input").value = workMinutes;
    } else if (seconds === 00 && workMinutes === "00") {
        console.log("min=0 and sec =0");
        clearInterval(timer);
        document.querySelector(".start").innerHTML = "RESET";
        document.querySelector(".ring").style.stroke = "#900A0A";
        alert("Time's Up !!! ");
    }
}
let stopBtn = document.querySelector(".start");
let timer = setInterval(RemainingTime, 1000);
stopBtn.innerHTML = "STOP";
stopBtn.addEventListener('click', function (e) {
    let status = e.target.innerHTML;
    if (status === "STOP") {
        clearInterval(timer);
        e.target.innerHTML = "START";
    } else if (status === "START") {
        seconds = document.querySelector(".seconds input").value;
        seconds = (seconds < 10 ? '0' : '') + seconds;
        workMinutes = document.querySelector(".minutes input").value;
        timer = setInterval(RemainingTime, 1000);
        stopBtn.innerHTML = "STOP";
        document.querySelector(".minutes input").disabled = true;
        document.querySelector(".seconds input").disabled = true;
    } else {
        seconds = document.querySelector(".seconds input").value;
        document.querySelector(".ring").style.stroke = "#09A65A";
        workMinutes = document.querySelector(".minutes input").value;
        if (seconds === "00" && workMinutes === "00") {
            console.log("inside");

            workMinutes = 15;
            document.querySelector(".minutes input").value = workMinutes;
            seconds = 60;
            // document.querySelector(".seconds input").value=seconds;
            timer = setInterval(RemainingTime, 1000);
            stopBtn.innerHTML = "STOP";
            document.querySelector(".ring").style.stroke = "#09A65A";
        } else if (seconds === "00"){
            seconds=60;
            timer = setInterval(RemainingTime, 1000);
            stopBtn.innerHTML = "STOP";
            document.querySelector(".minutes input").disabled = true;
            document.querySelector(".seconds input").disabled = true;
        } else {
            timer = setInterval(RemainingTime, 1000);
            stopBtn.innerHTML = "STOP";
            document.querySelector(".minutes input").disabled = true;
            document.querySelector(".seconds input").disabled = true;
        }

    }

});

let btnSettings = document.querySelector(".settings");
btnSettings.addEventListener('click', function (e) {
    let testStatus = document.querySelector(".start").innerHTML;
    if (testStatus === "START" || testStatus === "RESET") {
        document.querySelector(".minutes input").disabled = false;
        document.querySelector(".seconds input").disabled = false;
    }
});
console.log(btnSettings);