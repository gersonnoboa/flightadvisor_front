import { Component } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private fb: FacebookService) {

	  const params: InitParams = {
	  	appId      : '421300974954114',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.11'
	  };

    fb.init(params);
	}

  loginWithFacebook(): void{
    this.fb.login().then((response: LoginResponse) => console.log(response)).catch((error: any) => console.error(error));
  }
}

