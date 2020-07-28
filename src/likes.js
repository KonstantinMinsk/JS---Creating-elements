let heart = document.querySelector('.heart');
let likesNumber = document.querySelector('.likes-number');

heart.onclick = function () {
  // console.log(heart.classList.contains('added'));
  heart.classList.contains('added') ? likesNumber.textContent-- : likesNumber.textContent++;
  heart.classList.toggle('added');
};