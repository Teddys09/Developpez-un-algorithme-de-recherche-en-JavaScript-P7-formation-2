import { recipes } from '../../assets/data/data.js';

export class Model {
  constructor() {
    this.recipes = recipes;
  }
  getRecipes() {
    return this.recipes;
  }

  getIngredients() {
    let ingredients = new Set();
    this.recipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        ingredients.add(ingredient.ingredient);
      });
    });
    return ingredients;
  }

  getAppliances() {
    let appliances = new Set();

    this.recipes.forEach((recipe) => {
      appliances.add(recipe.appliance);
    });

    return appliances;
  }

  getUstensils() {
    let ustensils = new Set();
    this.recipes.forEach((recipe) => {
      recipe.ustensils.forEach((ustensil) => {
        ustensils.add(ustensil);
      });
    });

    return ustensils;
  }
}
