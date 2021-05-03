import { Component, OnInit } from '@angular/core';
import{NavParams} from '@ionic/angular'
import {  ModalController } from '@ionic/angular';
@Component({
  selector: 'app-mlalist',
  templateUrl: './mlalist.page.html',
  styleUrls: ['./mlalist.page.scss'],
})
export class MlalistPage implements OnInit {
  mladata:any=[];
  constructor(private navParams:NavParams,public modalController:ModalController) {
    this.mladata=navParams.get('State_name');
    console.log(this.mladata);
   }
 
  ngOnInit() {
  }

}
