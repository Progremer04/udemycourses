const scriptURL = 'https://script.google.com/macros/s/AKfycbwtDdyUPyGvgnUclD3H2RV2WQ7kj7E94v8Y8Z4TIV207_lTddBk9TYeBky_fQ8O5kwPJQ/exec'
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => console.log("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})