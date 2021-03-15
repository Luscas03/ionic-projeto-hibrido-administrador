import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { PratoService } from '../service/prato.service';
import { TemplateService } from '../service/template.service';
import { Prato } from '../model/prato';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prato-editar',
  templateUrl: './prato-editar.page.html',
  styleUrls: ['./prato-editar.page.scss'],
})
export class PratoEditarPage implements OnInit {
  formGroup: FormGroup;
  prato : Prato = new Prato();
  constructor(private formB: FormBuilder,
    private navCtrl: NavController, 
    private template: TemplateService,
    private pratoServ: PratoService,
    private activatedRoute : ActivatedRoute) { 
      this.iniciarForm();
    }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(idUrl=>{
      let id = idUrl.get('id');
      
      this.pratoServ.buscarPorId(id).subscribe(response=>{
        this.prato = response;
     
        this.iniciarForm();
        console.log(response);
      })
 
    })

    
  }
  
  editar() {

    this.template.loading.then(load => { // iniciar o carregamento
      load.present(); // forçar inicio carremento

      this.pratoServ.atualizar(this.prato.id, this.formGroup.value).subscribe(response => {
        this.navCtrl.navigateForward('/home');
        load.dismiss();
        this.template.myAlert('Prato alterado com Sucesso!');
      
      }
      
      
      )

    })
  }
  iniciarForm() {
    this.formGroup = this.formB.group({
      id :[this.prato.id],
      nomeprato: [this.prato.nomeprato],
      calorias: [this.prato.calorias],
      grupo: [this.prato.grupo] 

    })
  }

}
 