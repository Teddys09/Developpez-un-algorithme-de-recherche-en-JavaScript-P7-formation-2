import { RecipeName } from '../view/RecipeName.js';
//import { getRecipes } from '../model/Model.js';

export class SearchByFilter {
  sortByFilter(recipes, liSelectedFilter) {
    const recipeCards = document.querySelectorAll('.recipe-card');

    if (liSelectedFilter.length === 0) {
      recipeCards.forEach((recipeCard) => {
        recipeCard.remove();
      });
      let recipeName = new RecipeName();
      recipeName.showData(recipes);
    } else {
      recipeCards.forEach((recipeCard) => {
        recipeCard.remove();
      });
      let recipeName = new RecipeName();
      recipes.forEach((recipe) => {
        let ingredientsArray = [];
        let ustensilsArray = [];
        let ingredients = recipe.ingredients;
        let appliance = recipe.appliance;
        let ustensils = recipe.ustensils;
        let name = recipe.name;

        ingredients.forEach((ingredient) => {
          ingredientsArray.push(ingredient.ingredient);
        });

        ustensils.forEach((ustensil) => {
          ustensilsArray.push(ustensil);
        });

        let ingredientsArrayFilter = ingredientsArray.filter((ingredient) =>
          liSelectedFilter.includes(ingredient)
        );

        let ustensilsArrayFilter = ustensilsArray.filter((ustensil) =>
          liSelectedFilter.includes(ustensil)
        );

        let applianceFilter = liSelectedFilter.includes(appliance);

        let nameFilter = liSelectedFilter.includes(name);

        if (
          ingredientsArrayFilter.length > 0 ||
          ustensilsArrayFilter.length > 0 ||
          applianceFilter ||
          nameFilter
        ) {
          recipeName.showData([recipe]);
        }
      });
    }
  }
}
