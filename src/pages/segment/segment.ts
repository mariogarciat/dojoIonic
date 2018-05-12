import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { FotosProvider } from '../../providers/fotos/fotos';

/**
 * Generated class for the SegmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html',
})
export class SegmentPage {

usuarios
fotos

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public usuarioProvider: UsuariosProvider, public fotoProvider: FotosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegmentPage');
  }

  downUsuarios(){
    this.usuarioProvider.getUsers()
    .subscribe(
    (data) => {this.usuarios = data;},
    (error) => {console.log(error);}
    );
  }

  downFotos(){
    this.fotoProvider.getFotos()
    .subscribe(
      (data) => {this.fotos = data;},
      (error) => {console.log(error);}
    );
    this.downUsuarios();
  }

}
