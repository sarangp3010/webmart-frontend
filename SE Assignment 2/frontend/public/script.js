const form = document.querySelector('#myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  fetch('/submit-form',{
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert('Form submitted successfully!');
  })
  .catch(error => {
    console.error(error);
    alert('Form submission failed!');
  });
});
