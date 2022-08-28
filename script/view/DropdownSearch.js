import { SearchByFilter } from '../utils/SearchByFilter.js';

export class DropdownSearch {
  ingredientsDropdown(
    liSelectedFilter,
    ingredients,
    ulName,
    ingredientsContainer,
    dropdown,
    input,
    recipes
  ) {
    let isDropdownOpen = false;
    dropdown.addEventListener('click', () => {
      if (!isDropdownOpen) {
        let ul = document.createElement('ul');
        ul.classList.add(`${ulName}`, 'dropdown-ul');
        ingredientsContainer.appendChild(ul);
        ingredients.forEach((ingredient) => {
          let li = document.createElement('li');
          li.classList.add('ingredient', `${ulName}-selector`);
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

      ingredientLi.forEach((li) => {
        li.addEventListener('click', () => {
          makeFilterDiv(li.textContent, recipes, liSelectedFilter);
          onDeleteFilter(recipes, liSelectedFilter);
        });
      });
    });

    //

    function makeFilterDiv(li, recipes, liSelectedFilter) {
      let filterContainer = document.querySelector('.filter-container');

      const filterToDelete = liSelectedFilter.findIndex(
        (filter) => filter === li
      );

      let createDiv = document.createElement('div');
      createDiv.classList.add('filter-box', `filter-${ulName}`);
      createDiv.innerHTML = `
      <p>${li}</p>
      <img src="./assets/icons/delete.svg" alt="delete" class="delete-filter ${ulName}-selector">
      `;
      if (filterContainer.children.length === 0) {
        filterContainer.appendChild(createDiv);

        liSelectedFilter.push(li);
        console.log(liSelectedFilter);
        onDeleteFilter(recipes, liSelectedFilter);
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
            onDeleteFilter(recipes, liSelectedFilter);

            filterContainer.removeChild(
              filterContainer.children[filterToDelete]
            );
          }
          //  let searchByFilter = new SearchByFilter();
          // searchByFilter.sortByFilter(recipes, liSelectedFilter);
        }
      });
    }
  }
}
export function onDeleteFilter(recipes, liSelectedFilter) {
  // let filterSelector = document.querySelectorAll(`.${ulName}-selector`);
  //  filterSelector.forEach((selector) => {
  //  selector.addEventListener('click', () => {
  //    console.log('hi');
  let searchByFilter = new SearchByFilter();
  searchByFilter.sortByFilter(recipes, liSelectedFilter);
  //  });
  //  });
}
