'use strict';

const htmlText = document.querySelector('.kitkat');
console.log(htmlText);

document.querySelector('.number').textContent = 13;
document.querySelector('.guess').value = 23;
document.querySelector('.score').textContent = 10;

document.querySelector('body').addEventListener('click', function () {
  console.log('click');
  // document.body.style.backgroundColor = 'brown';
  document.querySelector('body').classList.add('brown');
  // document.querySelector('body').style.backgroundColor = 'brown';
});
