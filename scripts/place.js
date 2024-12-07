document.addEventListener("DOMContentLoaded", function() {
    const temperature = 10; 
    const windSpeed = 5; 

 
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").textContent = windChill !== null ? windChill.toFixed(1) + ' °C' : 'N/A';
});

function calculateWindChill(temperature, windSpeed) {
    
    if ((temperature <= 10 && windSpeed > 4.8)) {
        return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    }
    return null; 
}


document.addEventListener("DOMContentLoaded", function () {

    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
  
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;
  });
  