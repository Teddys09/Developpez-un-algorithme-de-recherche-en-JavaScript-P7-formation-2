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
        ul.classList.add(`${ulName}`, 'dropdown-ul', `dropdown-ul-${ulName}`);
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
        document.querySelector(`.dropdown-ul-${ulName}`).remove();
        input.style.width = '170px';
        input.style.borderRadius = '5px';
        dropdown.style.left = '140px';
        dropdown.classList.remove('rotate');
        isDropdownOpen = false;
      }
      let ingredientLi = document.querySelectorAll('.ingredient');

      ingredientLi.forEach((li) => {
        li.addEventListener('click', () => {
          makeFilterDiv(li.textContent, recipes, liSelectedFilter, ulName);
          onDeleteFilter(recipes, liSelectedFilter);
        });
      });
    });

    //
    const oldLi = [];
    searchByInput(ingredients, liSelectedFilter, recipes, ulName, oldLi);
  }
}
export function makeFilterDiv(li, recipes, liSelectedFilter, ulName) {
  let filterContainer = document.querySelector('.filter-container');

  const filterToDelete = liSelectedFilter.findIndex((filter) => filter === li);

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

        filterContainer.removeChild(filterContainer.children[filterToDelete]);
      }
      //  let searchByFilter = new SearchByFilter();
      // searchByFilter.sortByFilter(recipes, liSelectedFilter);
    }
  });
}
export function onDeleteFilter(recipes, liSelectedFilter) {
  let searchByFilter = new SearchByFilter();
  searchByFilter.sortByFilter(recipes, liSelectedFilter);
}

function searchByInput(ingredients, liSelectedFilter, recipes, ulName, oldLi) {
  let ingredientsInput = document.querySelector(`.${ulName}-input`);

  let divUnderInput = document.querySelector(`.${ulName}-search-input`);

  ingredientsInput.addEventListener('input', (e) => {
    if (e.target.value.length > 2 && ulName) {
      console.log(ingredients);

      ingredients.forEach((ingredient) => {
        ingredient = ingredient.toLowerCase();
        if (
          ingredient.includes(e.target.value) &&
          !liSelectedFilter.includes(ingredient)
        ) {
          divUnderInput.style.display = 'block';
          let li = document.createElement('li');
          li.classList.add(
            `${ulName}`,
            `${ulName}-selector`,
            `${ulName}-input-search`
          );
          if (ulName === 'ustensils') {
            li.textContent = ingredient;
          } else {
            li.textContent =
              // charAt return the letter at the index 0 so the first one in this case
              ingredient.charAt(0).toUpperCase() + ingredient.slice(1);
          }
          // const filterToDelete = liSelectedFilter.findIndex((filter) => filter === li);

          if (divUnderInput.children.length === 0) {
            divUnderInput.appendChild(li);
            oldLi.push(li.textContent);
            console.log(oldLi);
          } else if (oldLi.includes(li.textContent)) {
            return;
          } else {
            divUnderInput.appendChild(li);
            oldLi.push(li.textContent);
          }

          li.addEventListener('click', () => {
            console.log(li.textContent);
            if (liSelectedFilter.includes(li.textContent)) {
              return;
            } else {
              makeFilterDiv(li.textContent, recipes, liSelectedFilter, ulName);
              console.log(liSelectedFilter);
              onDeleteFilter(recipes, liSelectedFilter);
              divUnderInput.style.display = 'none';

              document
                .querySelectorAll(`.${ulName}-input-search`)
                .forEach((li) => {
                  let filterToDelete = oldLi.findIndex(
                    (filter) => filter === li.textContent
                  );
                  console.log(filterToDelete);
                  oldLi.splice(filterToDelete, 1);
                  li.remove();
                });

              ingredientsInput.blur();
            }
            //  filter(recipes, liSelectedFilter);
          });
        }
      });
    } else {
      divUnderInput.style.display = 'none';
    }
  });
}
