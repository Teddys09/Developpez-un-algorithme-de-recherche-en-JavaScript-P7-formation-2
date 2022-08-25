export class Appliances {
  showData(appliances) {
    const contentTag = document.getElementById('content');
    appliances.forEach((appliance) => {
      const applianceTag = document.createElement('div');
      applianceTag.classList.add('appliance');
      applianceTag.innerHTML = `
            
            <div class="appliance-content">
                <h2>${appliance}</h2>
            
                
            </div>
            `;
      contentTag.appendChild(applianceTag);
    });
  }
}
