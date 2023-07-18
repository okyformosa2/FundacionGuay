import { LightningElement } from 'lwc';
import imagen from '@salesforce/resourceUrl/carruselpics';
import imagendos from '@salesforce/resourceUrl/fondoGuay';

export default class calesista extends LightningElement {
    options = [
        { label: 'Campañas', value: 'campana' },
        { label: 'Sobre Nosotros', value: 'sobrenos' },
        
      ];
      seleccion(event) {
        const selectedOption = event.detail.value;
        console.log('Opción seleccionada:', selectedOption);
      }
    nombredelaImagen1 = imagen + "/ninos.jpg";
    nombredelaImagen2 = imagen + "/carruselpapa.jpg";
    nombredelaImagen3 = imagen + "/carruselwinter.jpg";
    imagen1 = imagen + "/carruselpapa.jpg";
    imagen2 = imagen + "/carruselwinter.jpg";
    imagen3 = imagen + "/nenadonaciones.jpg";
    imagen4 = imagen + "/donacionnene.jpg";
    logo = imagendos + "/logoGuay5.png";
    fondo = imagendos + "/nubes.jpg";

    llamado1(event) {
        window.location.href="https://guayerd76-dev-ed.develop.my.site.com/FundacionGuay/s/campdos"
    }
    llamado2(event) {
        window.location.href="https://guayerd76-dev-ed.develop.my.site.com/FundacionGuay/s/camptres"
    }
    selectOption(event) {
      var selectedOption = event.target.dataset.option;
    }
}