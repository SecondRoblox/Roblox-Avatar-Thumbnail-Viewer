var copyButton = document.getElementById("copyUrlButton");

function generate(){

  var userId = document.getElementById("inputUserId").value;
var size = document.getElementById("size").value;
var fileFormat = document.getElementById("fileFormat").value;
var isCircular = document.getElementById("isCircular").value;
var thumbnail = document.getElementById("thumbnail");
var url = `https://thumbnails.roproxy.com/v1/users/avatar?userIds=${userId}&size=${size}&format=${fileFormat}&isCircular=${isCircular}`;
  var generateButton = document.getElementById("submit");;


  axios.get(url)
  .then(response => {
    // access parsed JSON response data using response.data field
    imageUrl = response.data.data[0].imageUrl

    //console.log(data[0].imageUrl)

   thumbnail.src = imageUrl
  })
  .catch(error => {

    generateButton.innerHTML = "Invalid ID!"

    setTimeout(() => {
  generateButton.innerHTML = "Generate Thumbnail"
}, 3000);
    console.log(error)
    
    
  })

  }

function copyUrl(){
  var userId = document.getElementById("inputUserId").value;
var size = document.getElementById("size").value;
var fileFormat = document.getElementById("fileFormat").value;
var isCircular = document.getElementById("isCircular").value;
var url = `https://thumbnails.roproxy.com/v1/users/avatar?userIds=${userId}&size=${size}&format=${fileFormat}&isCircular=${isCircular}`;
  var copyButton = document.getElementById("copyUrlButton")

  
  axios.get(url)
  .then(response => {
    
    imageUrl = response.data.data[0].imageUrl
    navigator.clipboard.writeText(imageUrl);

    copyButton.innerHTML = "Copied!"

    setTimeout(() => {
  copyButton.innerHTML = "Copy Image Url"
}, 2000);
    
  })
  .catch(error => {
    console.log(error)
  })
  }

function downloadThumbnail(){
  var userId = document.getElementById("inputUserId").value;
var size = document.getElementById("size").value;
var fileFormat = document.getElementById("fileFormat").value;
var isCircular = document.getElementById("isCircular").value;
var url = `https://thumbnails.roproxy.com/v1/users/avatar?userIds=${userId}&size=${size}&format=${fileFormat}&isCircular=${isCircular}`;
  var downloadButton = document.getElementById("downloadThumbnailButton");
  var downloadLink = document.getElementById("downloadTrigger");

  
  axios.get(url)
  .then(response => {
    
    imageUrl = response.data.data[0].imageUrl

    downloadLink.d = imageUrl
   
    setTimeout(() => {
  
}, 2000);
    
  })
  .catch(error => {
    console.log(error)
  })
  }