const panels = document.querySelectorAll('.panel');

const toogleOpen = function () {
  this.classList.toggle('open');
};

const toogleActive = function (e) {
  if (e.propertyName.includes('flex')) this.classList.toggle('open-active');
};

panels.forEach(panel => panel.addEventListener('click', toogleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toogleActive));
