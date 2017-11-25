import { Component } from '@angular/core';
import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'facebook-login',
  templateUrl: './facebook-login.component.html'
})
export class FacebookLoginComponent {

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

  trial(): void{
    alert("Tere");
  }
}

