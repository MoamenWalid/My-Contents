const inputField = document.querySelector('input');
const listOfNames = document.querySelectorAll('.name');

inputField.addEventListener('keyup', () => {
  listOfNames.forEach((name) => {
    if (name.innerHTML.toUpperCase().includes(inputField.value.toUpperCase())) {
      name.style.display = 'block';
    }
    
    else {
      name.style.display = 'none';
    }
  })
})