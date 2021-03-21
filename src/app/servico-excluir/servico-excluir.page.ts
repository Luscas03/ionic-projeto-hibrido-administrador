import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Servico } from '../model/servico';
import { ServicoService } from '../service/servico.service';
import { TemplateService } from '../service/template.service';

@Component({
  selector: 'app-servico-excluir',
  templateUrl: './servico-excluir.page.html',
  styleUrls: ['./servico-excluir.page.scss'],
})
export class ServicoExcluirPage implements OnInit {
servico: Servico = new Servico();
  constructor(private servicoServ: ServicoService,
    private activatedRoute: ActivatedRoute,
    private template: TemplateService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(idUrl => {
      let id = idUrl.get('id');
      this.servicoServ.buscarPorId(id).subscribe(response => {
        this.servico = response;
        
      })
    })
  }
  excluir() {
    this.template.loading.then(load => { // iniciar o carregamento
      load.present(); // forçar inicio carremento

      this.servicoServ.excluir(this.servico.id).subscribe(response => {
        load.dismiss();
        this.template.myAlert('Excluído com sucesso');
        this.navCtrl.navigateRoot('/servicos-user');
      })

    })
  }
  cancelar(){
    this.navCtrl.navigateRoot('/servicos-user');
  
}

}
