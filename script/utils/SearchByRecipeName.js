import { onDeleteFilter } from '../view/DropdownSearch.js';

export class SearchByRecipeName {
  sortByRecipeName(recipes, liSelectedFilter) {
    let recipeInput = document.querySelector('.input-recipe');
    recipeInput.addEventListener('input', (e) => {
      console.log(liSelectedFilter);
      if (e.target.value.length > 2) {
        recipes.forEach((recipe) => {
          let recipeName = recipe.name;
          recipeName = recipeName.toLowerCase();

          // recipeName = recipeName.toLowerCase();
          if (recipeName.includes(e.target.value)) {
            liSelectedFilter.push(recipe.name);

            onDeleteFilter(recipes, liSelectedFilter);
          }
        });
      } else {
        liSelectedFilter = [];
        onDeleteFilter(recipes, liSelectedFilter);
      }
    });
  }
}
