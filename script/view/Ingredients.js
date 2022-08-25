export class Ingredients {
  showData(ingredients) {
    const contentTag = document.getElementById('content');
    ingredients.forEach((ingredient) => {
      const ingredientTag = document.createElement('div');
      ingredientTag.classList.add('ingredient');
      ingredientTag.innerHTML = `
                
                <div class="ingredient-content">
                    <h2>${ingredient}</h2>
                
                    
                </div>
                `;
      contentTag.appendChild(ingredientTag);
    });
  }
}
