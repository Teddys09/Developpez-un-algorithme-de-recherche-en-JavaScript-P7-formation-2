import { onDeleteFilter } from '../view/DropdownSearch.js';

export class SearchByInput {
  searchByInput(ingredients, liSelectedFilter) {
    let ingredientsInput = document.querySelector('.ingredients-input');
    let ingredientsContainer = document.querySelector('.ingredients-container');
    let appliancesInput = document.querySelector('.appliances-input');
    let ustensilsInput = document.querySelector('.ustensils-input');
    console.log(liSelectedFilter);

    ingredientsInput.addEventListener('input', (e) => {
      console.log(e.target.value);
      if (e.target.value.length > 2) {
        let divUnderInput = document.createElement('ul');
        divUnderInput.classList.add('ingredients-search-input');
        ingredientsContainer.appendChild(divUnderInput);

        ingredients.forEach((ingredient) => {
          if (ingredient.includes(e.target.value)) {
            let li = document.createElement('li');
            li.textContent = ingredient;
            if (divUnderInput.children.textContent === ingredient) {
              return;
            }

            divUnderInput.appendChild(li);
            li.addEventListener('click', () => {
              onDeleteFilter(liSelectedFilter);
            });
          }
        });
      }
    });
  }
}
