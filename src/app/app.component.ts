import { Component, OnInit } from '@angular/core';

import { MenuController, NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [

    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person'
    },



    {
      title: 'Marcar Consulta',
      url: '/marcar-consulta',
      icon: 'add'
    },
    {

      title: 'Listar Dietas',
      url: '/dieta-user',
      icon: 'list'
     
    },
    {

      title: 'Listar Serviços',
      url: '/servicos-user',
      icon: 'list'
    },
    {

      title: 'Cadastrar Dietas',
      url: '/cadastro-dieta',
      icon: 'barbell'
    },
    
 
    {

      title: 'Cadastrar serviços',
      url: '/servico-cadastrar',
      icon: 'accessibility'
    },
    {

      title: 'Cadastro de Pratos',
      url: '/pratos-cadastro',
      icon: 'nutrition'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController,
    private menuCtrl: MenuController,
    private auth: AngularFireAuth
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

  }
  logout() {
    this.auth.signOut().then(data => {
      
      this.menuCtrl.enable(false);
      this.navCtrl.navigateRoot(['/login']);
    
      
    })
    
  }

  

}