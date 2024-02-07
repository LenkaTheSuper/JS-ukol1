let teplotaFar = Number(prompt("Zadej teplotu ve stupních Fahrenheita: "))
let teplotaCel = Math.round((5 * (teplotaFar - 32)) / 9)

document.body.innerHTML = "<h1> Převod stupňů Fahrenheita na stupně Celsia</h1>"
document.body.innerHTML += `<p> ${teplotaFar}°F = ${teplotaCel}°C</p>`