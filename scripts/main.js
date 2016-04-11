var myImg = document.querySelector('.ff');
myImg.onclick = function() {
	var mySrc = myImg.getAttribute('src');
	if (mySrc == 'images/firefox_1.jpg') {
		myImg.setAttribute('src', 'images/firefox_2.jpg');
	} else {
		myImg.setAttribute('src', 'images/firefox_1.jpg');		
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}