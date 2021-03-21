import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

import { TemplateService } from '../service/template.service';
import { DietasService } from '../service/dietas.service';

@Component({
  selector: 'app-cadastro-dieta',
  templateUrl: './cadastro-dieta.page.html',
  styleUrls: ['./cadastro-dieta.page.scss'],
})
export class CadastroDietaPage implements OnInit {
  formGroup: FormGroup;
  constructor(private formB: FormBuilder,
    private navCtrl: NavController, 
    private template: TemplateService,
    private dietasServ : DietasService) { 

      this.iniciarForm();
    }

  ngOnInit() {
  }
  cadastrar() {
    this.template.loading.then(load => { // iniciar o carregamento
      load.present(); // forçar inicio carremento

      this.dietasServ.cadastrar(this.formGroup.value).subscribe(response => {
        load.dismiss();
        this.template.myAlert(response);
        this.navCtrl.navigateRoot(['/dieta-user']);
      })

    })
  }


  iniciarForm() {
    this.formGroup = this.formB.group({
      nome: ['', [Validators.required]],
      descricao: ['', [Validators.required]]


    })
  }

}
