document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

//form
  const form = document.querySelector('#new-item-form');
  const handleFormSubmit = function (evt) {
    evt.preventDefault();
    const resultList = document.querySelector('#reading-list');

    const unorderList = document.querySelector('#list');

    const listItems = document.createElement('li');
    listItems.classList.add('list-item');

    listItems.textContent = `Title: ${evt.target[0].value}. Author: ${evt.target[1].value}. Category: ${evt.target[2].value}`;

    document.getElementById('new-item-form').reset();

    unorderList.appendChild(listItems);
  };

  form.addEventListener('submit', handleFormSubmit);

  const clearForm = document.querySelector('#delete');
    const handleFormDelete = (evt) => {
      evt.preventDefault();
      const resultList = document.querySelector('#list');
      const children = document.querySelectorAll(".list-item");
      children.forEach((child)=>{
        resultList.removeChild(child);
      })

    }

  clearForm.addEventListener('submit', handleFormDelete);
});



// console.log(evt.target[0].value);
// console.log(evt.target[1].value);
// console.log(evt.target[2].value);
