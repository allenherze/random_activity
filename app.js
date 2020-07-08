// Assigning the event listener

document.getElementById('get-activity').addEventListener('click', getActivity);
document.addEventListener('click', rickRoll);

function getActivity(e) {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://www.boredapi.com/api/activity', true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);

      const output = document.getElementById('output');
      output.textContent = response.activity;
    }
  };

  xhr.send();
}

function rickRoll(e) {
  e.preventDefault();
  if (e.target.id !== 'get-activity') {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  }
}
