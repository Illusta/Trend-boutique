function myFunction(x) {
x.classList.toggle("icon");
}

function toggleOptions() {
  var options = document.getElementById("options");
  if (options.style.maxHeight) {
    options.style.maxHeight = null;
  } else {
    options.style.maxHeight = options.scrollHeight + "px";
  }
}