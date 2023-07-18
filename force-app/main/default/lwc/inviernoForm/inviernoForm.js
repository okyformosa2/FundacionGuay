import { LightningElement } from 'lwc';
import imagen from '@salesforce/resourceUrl/winter';

export default class inviernoForm extends LightningElement {
  connectedCallback() {
    this.provincia = true;    
   }
    
    activarDesactivarSelect(event) {
      
      
      const selectElement = this.template.querySelector('[data-id="00NDp000009rvC4"]');
      selectElement.disabled = this.provincia;
    
      this.seleccion = event.target.value;
      
      if (this.seleccion === 'Argentina - AR') {
        this.provincia = false;
        //const selectElement = this.template.querySelector('[data-id="00NDp000009rvC4"]');
        selectElement.disabled = this.provincia;
        
      } else {
        this.provincia = true;
        //const selectElement = this.template.querySelector('[data-id="00NDp000009rvC4"]');
        selectElement.disabled = this.provincia;
      } 
    }

//* se creó un botón que tiene una alreta al apretar el botón de enviar putos *//
mostrarAlerta() {
      alert("¡Muchas gracias por tu interés en donar, en breve nos comunicaremos!");
  }



    // Expose the asset file URL for use in the template
    nombredelaImagen = imagen + "/winter.jpg";

    

}