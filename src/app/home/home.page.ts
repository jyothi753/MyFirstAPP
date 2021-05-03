import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {MlalistPage}  from '../mlalist/mlalist.page';
import { NavController, LoadingController, AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data:any=[]
  state:any
  mla=[]
  constructor(private http:HttpClient,public modalController:ModalController) {
    this.http.get("https://k.adhikar.net/n/State_Wise_Assembly_Candidates_api/").subscribe(res=>{
      console.log(res)
      this.data=res
    })
  }
  async OpenPage(state) {
    // console.log(state);
    // alert("submitted");
    const modal = await this.modalController.create({
      component: MlalistPage,
      componentProps: {State_name:state}
    });
    modal.present();
    // modal.dismiss();
  }
 selectState(state : any){
let selected=this.data.find(i=>i.State_name==state)
this.mla=selected ? selected.Assembly_Candidates : []
console.log(this.mla);
 }
}
