document.getElementById("year").innerHTML = new Date().getFullYear();

document.getElementById("pi").textContent = `Last Modified: 
${document.lastModified}`;


function calculateWindChill(temp, windSpeed, unit = "C") {
    if (unit === "C") {
        // Celsius version (valid if T ≤ 10°C and v > 4.8 km/h)
        if (temp <= 10 && windSpeed > 4.8) {
            const wc =
                13.12 +
                0.6215 * temp -
                11.37 * Math.pow(windSpeed, 0.16) +
                0.3965 * temp * Math.pow(windSpeed, 0.16);
            return wc.toFixed(2);
        } else {
            return temp.toFixed(2);
        }
    } else if (unit === "F") {
        
        if (temp <= 50 && windSpeed > 3) {
            const wc =
                35.74 +
                0.6215 * temp -
                35.75 * Math.pow(windSpeed, 0.16) +
                0.4275 * temp * Math.pow(windSpeed, 0.16);
            return wc.toFixed(2);
        } else {
            return temp.toFixed(2);
        }
    }
}

const temperature = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById("wind-chill").textContent = windChill;
