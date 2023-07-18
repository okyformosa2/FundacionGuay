import { LightningElement } from 'lwc';
import imagen from '@salesforce/resourceUrl/carruselpics';

export default class Carrusel extends LightningElement {
    nombredelaImagen1 = imagen + "/ninos.jpg";
    nombredelaImagen2 = imagen + "/carruselpapa.jpg"
    nombredelaImagen3 = imagen + "/carruselwinter.jpg"
}