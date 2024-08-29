let countdownInterval;

function startCountdown() {
    const startDate = new Date().getTime();
    const endDate = new Date(document.getElementById("endDate").value);

    // Convert the timestamp to a Date object
    const startDateObject = new Date(startDate);

    // Convert the Date object to a human-readable string
    const startDateFormatted = startDateObject.toString();

    console.log("Start Date:", startDateFormatted);
    console.log("End Date:", endDate);

    if (!startDateFormatted || !endDate || isNaN(startDate) || isNaN(endDate)) {
        alert("Please select valid dates.");
        return;
    }

    if (startDate >= endDate  || endDate <= startDateFormatted) {
        alert("The starting date must be before the ending date.");
        console.clear();
        return;
    }

    localStorage.setItem("startDate", startDateFormatted);
    localStorage.setItem("endDate", endDate);

    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

   /*  countdownInterval = setInterval(() => { */
       /*  const now = new Date().getTime();
        const distance = endDate - now; */

       /*  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
 */
       /*  if (distance < 0) {
            clearInterval(countdownInterval);
            alert("Countdown Finished!");
        } */
    /* }, *//*  1000); */

    window.location.href = "countdownrep.html";
}

function resetMainCountdownDisplay() {

    if (typeof countdownFunction !== 'undefined') {
        clearInterval(countdownFunction);
    }

    const mainPage = window.opener || window.parent || window;
    if (mainPage) {
        mainPage.document.getElementById('days').innerText = "00";
        mainPage.document.getElementById('hours').innerText = "00";
        mainPage.document.getElementById('minutes').innerText = "00";
        mainPage.document.getElementById('seconds').innerText = "00";
        mainPage.document.getElementById('header1').innerText = "The countdown is on..";
    }
}

document.getElementById('startCountdown').addEventListener('click', function () {
    startCountdown();
    console.log('Countdown started');
});

document.getElementById('resetCountdown').addEventListener('click', function () {
    localStorage.removeItem('startDateFormatted');
    localStorage.removeItem('endDate');
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    //resetMainCountdownDisplay();
    console.log('Countdown reset');
    alert("Reset Succes")

   // window.location.href = "countdownrep.html";
});
