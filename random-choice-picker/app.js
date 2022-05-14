const textarea = document.querySelector('.textarea');
const spans = document.querySelector('.spans');

textarea.addEventListener('input', function () {
  spans.innerHTML = '';

  const choices = textarea.value.split(', ');

  choices.forEach((choice) => {
    const newSpan = document.createElement('span');
    newSpan.textContent = choice;
    spans.appendChild(newSpan);
  });
});

textarea.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    setTimeout(function () {
      const choices = textarea.value.split(', ');
      const random = Math.floor(Math.random() * choices.length);
      alert(choices[random]);
    }, 3000);
  }
});

function pickOne(arr) {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
}
