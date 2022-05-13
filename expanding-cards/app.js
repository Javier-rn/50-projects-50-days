const allImgs = document.querySelectorAll('.image');

allImgs.forEach((img) => {
  img.addEventListener('mouseover', function () {
    if (img.classList.contains('grow')) {
      console.log('yes');
    } else {
      allImgs.forEach((img) => img.classList.remove('grow'));
      img.classList.add('grow');
    }
  });
});
