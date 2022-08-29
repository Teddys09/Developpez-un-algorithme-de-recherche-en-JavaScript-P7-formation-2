import { onDeleteFilter } from '../view/DropdownSearch.js';

export class SearchByRecipeName {
  sortByRecipeName(recipes, liSelectedFilter) {
    let recipeInput = document.querySelector('.input-recipe');
    recipeInput.addEventListener('input', (e) => {
      console.log(e.target.value);
      if (e.target.value.length > 2) {
        recipes.forEach((recipe) => {
          let recipeName = recipe.name;

          recipeName = recipeName.toLowerCase();
          if (
            recipe.name.includes(e.target.value) ||
            recipeName.includes(e.target.value)
          ) {
            liSelectedFilter.push(recipe.name);
            console.log(liSelectedFilter);
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
