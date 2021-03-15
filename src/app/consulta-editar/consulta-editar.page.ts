import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Consulta } from '../model/consulta';
import { ConsultaService } from '../service/consulta.service';
import { TemplateService } from '../service/template.service';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-consulta-editar',
  templateUrl: './consulta-editar.page.html',
  styleUrls: ['./consulta-editar.page.scss'],
})
export class ConsultaEditarPage implements OnInit {
  formGroup: FormGroup;
  consulta : Consulta = new Consulta();
  idcliente : string = "";
  constructor(private navCtrl : NavController,
    private formB: FormBuilder,
    private activatedRoute : ActivatedRoute,
    private consultaServ : ConsultaService,
    private template : TemplateService,
    private auth : AngularFireAuth
    ) {

      this.iniciarForm();
      this.auth.authState.subscribe(response=>{ // dados usuário logado
        this.idcliente = response.uid; // id do usuário logado
        this.iniciarForm(); // atualizando formulário com o id do cliente
      })

     }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(idUrl=>{
      let id = idUrl.get('id');
      
      this.consultaServ.buscarPorId(id).subscribe(response=>{
        this.consulta = response;
     
        this.iniciarForm();

      })
 
    })


  }

  editar() {
    let d = new Date(this.formGroup.controls['date'].value);
    this.template.loading.then(load => { // iniciar o carregamento
      load.present(); // forçar inicio carremento

      this.consultaServ.atualizar(this.consulta.id, this.formGroup.value).subscribe(response => {
        this.navCtrl.navigateForward('/home');
        load.dismiss();
        this.template.myAlert('Consulta alterada com Sucesso!');
      
      }
      
      
      )

    })
  }




  iniciarForm() {
    this.formGroup = this.formB.group({
      id :[this.consulta.id],
      tipo: [this.consulta.tipo],
      especialidade: [this.consulta.especialidade],
      date: [this.consulta.date],
      idcliente: [this.idcliente]
      
    })
  }
}
 