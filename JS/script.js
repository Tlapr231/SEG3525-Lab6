// Slider from : https://www.w3schools.com/howto/howto_js_rangeslider.asp
var slider = document.getElementById("question3");
var output = document.getElementById("slider_value");

console.log(slider);
console.log(output)
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}