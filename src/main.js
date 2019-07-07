const imageOverlay = document.getElementById('show-message');
const hiddenMessage = document.getElementById('hidden-message');

//Arrows
const showMessage = () => {
  hiddenMessage.classList.remove('hide');
};

const hideMessage = () => {
  hiddenMessage.classList.add('hide');
};

const showBorder = () => {
  imageOverlay.classList.add('border');
};

const hideBorder = () => {
  imageOverlay.classList.remove('border');
};

//Event Listeners
imageOverlay.addEventListener('mouseover', showMessage);
imageOverlay.addEventListener('mouseleave', hideMessage);
imageOverlay.addEventListener('mouseover', showBorder);
imageOverlay.addEventListener('mouseleave', hideBorder);
