function generate(){

  var userId = document.getElementById("inputUserId").value;
var size = document.getElementById("size").value;
var fileFormat = document.getElementById("fileFormat").value;
var isCircular = document.getElementById("isCircular").value;
var thumbnail = document.getElementById("thumbnail");
var url = `https://roproxy.valiantwind.repl.co/thumbnails/v1/users/avatar?userIds=${userId}&size=${size}&format=${fileFormat}&isCircular=${isCircular}`;
  var generateButton = document.getElementById("submit");;
	
  axios.get(url)
  .then(response => {

thumbnail.src = response.data.data[0].imageUrl;
		
  })
  .catch(error => {

    generateButton.innerHTML = "Invalid ID!"

    setTimeout(() => {
  generateButton.innerHTML = "Generate Thumbnail"
}, 3000);
    console.log(error)
    
    
  })

  }


function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", createRipple);
}