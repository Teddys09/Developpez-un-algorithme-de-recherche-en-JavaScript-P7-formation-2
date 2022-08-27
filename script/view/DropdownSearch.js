export class DropdownSearch {
  ingredientsDropdown(
    liSelectedFilter,
    ingredients,
    ulName,
    ingredientsContainer,
    dropdown,
    input
  ) {
    console.log(ingredients);

    let isDropdownOpen = false;
    dropdown.addEventListener('click', () => {
      if (!isDropdownOpen) {
        let ul = document.createElement('ul');
        ul.classList.add(`${ulName}`, 'dropdown-ul');
        ingredientsContainer.appendChild(ul);
        ingredients.forEach((ingredient) => {
          let li = document.createElement('li');
          li.classList.add('ingredient');
          li.innerHTML = ingredient;
          ul.appendChild(li);
          // add style on input
          input.style.width = '667px';
          input.style.borderRadius = '5px 5px 0 0';
          dropdown.style.left = '620px';
          dropdown.classList.add('rotate');
          isDropdownOpen = true;
        });
      } else {
        document.querySelector(`.${ulName}`).remove();
        input.style.width = '170px';
        input.style.borderRadius = '5px';
        dropdown.style.left = '140px';
        dropdown.classList.remove('rotate');
        isDropdownOpen = false;
      }
      let ingredientLi = document.querySelectorAll('.ingredient');
      let isClicked = false;
      ingredientLi.forEach((li) => {
        li.addEventListener('click', () => {
          if (!isClicked) {
            makeFilterDiv(li.textContent);
            isClicked = true;
          } else {
            makeFilterDiv(li.textContent);
            isClicked = false;
          }
        });
      });
    });

    //

    function makeFilterDiv(li) {
      let filterContainer = document.querySelector('.filter-container');

      const filterToDelete = liSelectedFilter.findIndex(
        (filter) => filter === li
      );

      let createDiv = document.createElement('div');
      createDiv.classList.add('filter-box', `filter-${ulName}`);
      createDiv.innerHTML = `
      <p>${li}</p>
      <img src="./assets/icons/delete.svg" alt="delete" class="delete-filter">
      `;
      if (filterContainer.children.length === 0) {
        filterContainer.appendChild(createDiv);
        liSelectedFilter.push(li);
      } else if (liSelectedFilter.includes(li)) {
        liSelectedFilter.splice(filterToDelete, 1);
        filterContainer.removeChild(filterContainer.children[filterToDelete]);
      } else {
        filterContainer.appendChild(createDiv);
        liSelectedFilter.push(li);
      }

      document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-filter')) {
          let elementToDelete = e.target.parentElement.children[0].textContent;
          if (liSelectedFilter.includes(elementToDelete)) {
            let filterToDelete = liSelectedFilter.findIndex(
              (filter) => filter === elementToDelete
            );
            liSelectedFilter.splice(filterToDelete, 1);
            filterContainer.removeChild(
              filterContainer.children[filterToDelete]
            );
          }
        }
      });
    }
  }
}
