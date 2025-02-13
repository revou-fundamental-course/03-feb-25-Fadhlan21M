function convert() {
  let celsius = parseFloat(document.getElementById("celsius").value);
  if (!isNaN(celsius)) {
    let fahrenheit = (celsius * 9) / 5 + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
    document.getElementById(
      "calculation"
    ).value = `${celsius}°C * (9/5) + 32 = ${fahrenheit}°F`;
  } else {
    alert("Masukkan angka yang valid");
  }
}

function reset() {
  document.getElementById("celsius").value = "";
  document.getElementById("fahrenheit").value = "";
  document.getElementById("calculation").value = "";
}

function reverse() {
  let fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
  if (!isNaN(fahrenheit)) {
    let celsius = ((fahrenheit - 32) * 5) / 9;
    document.getElementById("celsius").value = celsius;
    document.getElementById(
      "calculation"
    ).value = `${fahrenheit}°F - 32 * (5/9) = ${celsius}°C`;
  } else {
    alert("Masukkan angka yang valid pada Fahrenheit");
  }
}
