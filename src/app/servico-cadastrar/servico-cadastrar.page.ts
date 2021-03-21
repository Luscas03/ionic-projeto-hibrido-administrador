import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ServicoService } from '../service/servico.service';
import { TemplateService } from '../service/template.service';

@Component({
  selector: 'app-servico-cadastrar',
  templateUrl: './servico-cadastrar.page.html',
  styleUrls: ['./servico-cadastrar.page.scss'],
})
export class ServicoCadastrarPage implements OnInit {
  formGroup: FormGroup;
  constructor(private formB: FormBuilder,
    private navCtrl: NavController, 
    private template: TemplateService,
    private servicoServ : ServicoService) {

      this.iniciarForm();

     }
     cadastrar() {
      this.template.loading.then(load => { // iniciar o carregamento
        load.present(); // forçar inicio carremento
  
        this.servicoServ.cadastrar(this.formGroup.value).subscribe(response => {
          load.dismiss();
          this.template.myAlert(response);
          this.navCtrl.navigateRoot(['/servicos-user']);
        })
  
      })
    }
  
  
    iniciarForm() {
      this.formGroup = this.formB.group({
        nome: ['', [Validators.required]]
  
  
  
      })
    }
  
  ngOnInit() {
  }

}
