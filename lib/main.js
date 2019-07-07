'use strict';

var imageOverlay = document.getElementById('show-message');
var hiddenMessage = document.getElementById('hidden-message');

//Arrows
var showMessage = function showMessage() {
  hiddenMessage.classList.remove('hide');
};

var hideMessage = function hideMessage() {
  hiddenMessage.classList.add('hide');
};

var showBorder = function showBorder() {
  imageOverlay.classList.add('border');
};

var hideBorder = function hideBorder() {
  imageOverlay.classList.remove('border');
};

//Event Listeners
imageOverlay.addEventListener('mouseover', showMessage);
imageOverlay.addEventListener('mouseleave', hideMessage);
imageOverlay.addEventListener('mouseover', showBorder);
imageOverlay.addEventListener('mouseleave', hideBorder);