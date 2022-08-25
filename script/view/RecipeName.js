export class RecipeName {
  showData(recipes) {
    const contentTag = document.getElementById('content');
    recipes.forEach((recipe) => {
      const recipeTag = document.createElement('div');
      console.log(recipe);
      recipeTag.classList.add('recipe-card');
      recipeTag.innerHTML = `
      <div class="recipe-img">
      </div>
        
        <div class="recipe-content">
        <div class="recipe-title-time">
            <h2>${recipe.name}</h2>
            <div class="recipe-time">
                <img src="./assets/icons/time.svg" alt="time">
                <p>${recipe.time} min</p>
                </div>
        </div>
        <div class="recipe-ingredients-description">
           
                
                <ul>
                    ${recipe.ingredients
                      .map(
                        (ingredient) =>
                          `<li>${ingredient.ingredient}${
                            ingredient.quantity
                              ? ': ' + ingredient.quantity
                              : '' || ingredient.quantite
                              ? ': ' + ingredient.quantite
                              : ''
                          }${ingredient.unit ? '' + ingredient.unit : ''}</li>`
                      )
                      .join('')}
                </ul>
            <div class="recipe-description">
                <p>${recipe.description}</p>
                </div>
        </div>
        `;
      contentTag.appendChild(recipeTag);
    });
  }
}
