setTimeout(function(){
var referrer = document.referrer;
window.alert(referrer);
}, 5000);

var link = document.getElementById('linkYouTube');
var image = document.getElementById('image1');
var parent = link.parentNode;

parent.insertBefore(image, link);


var image = document.getElementById('image1');

function handleMouseOver() {
  image.style.transform = 'scale(2)';
  image.style.border = '1px solid green';
}


function handleMouseOut() {
  image.style.transform = 'scale(1)';
  image.style.border = 'none';
}

image.addEventListener('mouseover', handleMouseOver);
image.addEventListener('mouseout', handleMouseOut);


function checkInternetConnection() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.example.com', true);
  
    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
        showConnectionStatus(true);
      } else {
        showConnectionStatus(false);
      }
    };
  
    xhr.onerror = function() {
      showConnectionStatus(false);
    };
  
    xhr.send();
  }
  
  function showConnectionStatus(connected) {
    var status = connected ? 'Подключен к интернету' : 'Не подключен к интернету';
    var popup = window.open('', 'newWindow', 'width=300,height=250');
    popup.document.write('<h1>Информация</h1>');
    popup.document.write('<p>' + status + '</p>');
  }
  
  checkInternetConnection();
  
