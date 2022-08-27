import { RecipeName } from '../view/RecipeName.js';
import { Appliances } from '../view/Appliances.js';
import { Ustensils } from '../view/Ustensils.js';
import { Ingredients } from '../view/Ingredients.js';
import { Model } from '../model/Model.js';
import { DropdownSearch } from '../view/DropdownSearch.js';

export class Controller {
  showListRecipes() {
    let model = new Model();
    let recipes = model.getRecipes();

    let recipeName = new RecipeName();
    recipeName.showData(recipes);
  }

  dropdownSearch() {
    let liSelectedFilter = [];

    let dropdownIngredients = document.querySelector('.ingredients-dropdown');
    let ulNameIngredients = 'ingredients';
    let modelIngredients = new Model();
    let ingredientsContainer = document.querySelector('.ingredients-container');
    let ingredientsInput = document.querySelector('.ingredients-input');
    let ingredients = modelIngredients.getIngredients();
    let dropdownSearchIngredients = new DropdownSearch();
    dropdownSearchIngredients.ingredientsDropdown(
      liSelectedFilter,
      ingredients,
      ulNameIngredients,
      ingredientsContainer,
      dropdownIngredients,
      ingredientsInput
    );
    let dropdownAppliances = document.querySelector('.appliances-dropdown');
    let appliancesContainer = document.querySelector('.appliances-container');
    let ulNameAppliances = 'appliances';
    let modelAppliances = new Model();
    let dropDownInput = document.querySelector('.appliances-input');
    let appliances = modelAppliances.getAppliances();
    let dropdownSearchApplicances = new DropdownSearch();
    dropdownSearchApplicances.ingredientsDropdown(
      liSelectedFilter,
      appliances,
      ulNameAppliances,
      appliancesContainer,
      dropdownAppliances,
      dropDownInput
    );
    let dropdownUstensils = document.querySelector('.ustensils-dropdown');
    let ustensilsContainer = document.querySelector('.ustensils-container');
    let ulNameUstensils = 'ustensils';
    let modelUstensils = new Model();
    let dropdownInput = document.querySelector('.ustensils-input');
    let ustensils = modelUstensils.getUstensils();
    let dropdownSearchUstensils = new DropdownSearch();
    dropdownSearchUstensils.ingredientsDropdown(
      liSelectedFilter,
      ustensils,
      ulNameUstensils,
      ustensilsContainer,
      dropdownUstensils,
      dropdownInput
    );
  }
}
