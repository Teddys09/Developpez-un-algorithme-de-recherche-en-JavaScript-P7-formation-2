export class Ustensils {
  showData(ustensils) {
    const contentTag = document.getElementById('content');
    ustensils.forEach((ustensil) => {
      const ustensilTag = document.createElement('div');
      ustensilTag.classList.add('ustensil');
      ustensilTag.innerHTML = `
                
                <div class="ustensil-content">
                    <h2>${ustensil}</h2>
                
                    
                </div>
                `;
      contentTag.appendChild(ustensilTag);
    });
  }
}
