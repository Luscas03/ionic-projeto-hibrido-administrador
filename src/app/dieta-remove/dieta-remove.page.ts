import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Dieta } from '../model/dieta';
import { DietasService } from '../service/dietas.service';
import { TemplateService } from '../service/template.service';

@Component({
  selector: 'app-dieta-remove',
  templateUrl: './dieta-remove.page.html',
  styleUrls: ['./dieta-remove.page.scss'],
})
export class DietaRemovePage implements OnInit {
dieta: Dieta = new Dieta();
  constructor(private dietasServ: DietasService,
    private activatedRoute: ActivatedRoute,
    private template: TemplateService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(idUrl => {
      let id = idUrl.get('id');
      this.dietasServ.buscarPorId(id).subscribe(response => {
        this.dieta = response;
        
      })
    })
  }
  excluir() {
    this.template.loading.then(load => { // iniciar o carregamento
      load.present(); // forçar inicio carremento

      this.dietasServ.excluir(this.dieta.id).subscribe(response => {
        load.dismiss();
        this.template.myAlert('Excluído com sucesso');
        this.navCtrl.navigateRoot('/dieta-user');
      })

    })
  }
  cancelar(){
    this.navCtrl.navigateRoot(['/dieta-visualizar', this.dieta.id]);
  
}

}
