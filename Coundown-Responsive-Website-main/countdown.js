function startMainCountdown() {
    // Get the dates from localStorage
    const startDate = new Date(localStorage.getItem("startDate"));
    const endDate = new Date(localStorage.getItem("endDate"));


    if (!startDate || !endDate || isNaN(startDate) || isNaN(endDate)) {
        console.log("No valid dates found in localStorage.");
        resetMainCountdownDisplay();
        return;
    }

    const countdownFunction = setInterval(() => {
        const now = new Date().getTime();
        const distance = endDate - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the HTML elements with the calculated values
        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

        // If the countdown is over, stop the interval and display a message
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
            document.getElementById("header1").innerText = "Countdown Finished!";
           // Trigger confetti effect
            confetti({
                particleCount: 100,
                spread: 100,
                origin: { y: 0.6 }});
        }
    }, 1000);
}

function resetCountdownDisplay() {
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";
    document.getElementById("header1").innerText = "The countdown is on..";
}

// Start the countdown when the page loads
document.addEventListener("DOMContentLoaded", startMainCountdown);
