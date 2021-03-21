import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Dieta } from '../model/dieta';
import { DietasService } from '../service/dietas.service';
import { TemplateService } from '../service/template.service';

@Component({
  selector: 'app-dieta-editar',
  templateUrl: './dieta-editar.page.html',
  styleUrls: ['./dieta-editar.page.scss'],
})
export class DietaEditarPage implements OnInit {
  formGroup: FormGroup;
  dieta: Dieta = new Dieta();
  constructor(private formB: FormBuilder,
    private navCtrl: NavController, 
    private template: TemplateService,
    private dietasServ: DietasService,
    private activatedRoute : ActivatedRoute) { 
      this.iniciarForm();
    }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(idUrl=>{
      let id = idUrl.get('id');
      
      this.dietasServ.buscarPorId(id).subscribe(response=>{
        this.dieta = response;
     
        this.iniciarForm();
  
      })
 
    })

    
  }
  editar() {

    this.template.loading.then(load => { // iniciar o carregamento
      load.present(); // forçar inicio carremento

      this.dietasServ.atualizar(this.dieta.id, this.formGroup.value).subscribe(response => {
        this.navCtrl.navigateForward(['/dieta-visualizar', this.dieta.id]);
        load.dismiss();
        this.template.myAlert('Dieta alterada com Sucesso!');
      
      }
      
      
      )

    })
  }
  iniciarForm() {
    this.formGroup = this.formB.group({
      id :[this.dieta.id],
      nome: [this.dieta.nome],
      descricao : [this.dieta.descricao],


    })
  }

}
