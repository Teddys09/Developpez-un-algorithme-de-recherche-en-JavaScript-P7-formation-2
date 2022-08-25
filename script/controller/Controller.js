import { RecipeName } from '../view/RecipeName.js';
import { Appliances } from '../view/Appliances.js';
import { Ustensils } from '../view/Ustensils.js';
import { Ingredients } from '../view/Ingredients.js';
import { Model } from '../model/Model.js';

export class Controller {
  showListRecipes() {
    let model = new Model();
    let recipes = model.getRecipes();
    let ingredients = model.getIngredients();

    let appliances = model.getAppliances();

    let ustensils = model.getUstensils();

    let ingredientsView = new Ingredients();
    // ingredientsView.showData(ingredients);

    let recipeName = new RecipeName();
    recipeName.showData(recipes);

    let appliancesView = new Appliances();
    // appliancesView.showData(appliances);

    let ustensilsView = new Ustensils();
    // ustensilsView.showData(ustensils);
  }
}
