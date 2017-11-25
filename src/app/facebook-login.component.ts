import { Component } from '@angular/core';
import { FacebookService, InitParams, LoginResponse, LoginOptions } from 'ngx-facebook';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'facebook-login',
  templateUrl: './facebook-login.component.html'
})
export class FacebookLoginComponent {

  public response: LoginResponse;
  public userLikes: Array<Object>;

  constructor(private fb: FacebookService, private http: Http) {

    this.userLikes = Array<Object>();

	  const params: InitParams = {
	  	appId      : '421300974954114',
      cookie     : true,
      xfbml      : true,
      version    : 'v2.11'
	  };

    fb.init(params);
	}

  loginWithFacebook(): void{
    const options: LoginOptions = {
      scope: 'public_profile,email,public_profile,user_education_history,user_hometown,user_location,user_work_history,user_likes,user_tagged_places,user_events,user_posts',
      return_scopes: true,
      enable_profile_selector: true
    };
    
    this.fb.login(options).then((response: LoginResponse) => this.getStatus(response)).catch((error: any) => console.error(error));
  }

  getStatus(response: LoginResponse): void {
    if (response.status == "connected"){
      this.response = response;
      this.getLikes(response);
    }
    else{
      alert("Connection to Facebook could not be established. Please try again.");
    }
  }
  
  getError(error: any): void {
    alert("Connection to Facebook could not be established. Please try again.");
  }

  getLikes(response: LoginResponse): void{

    let userId: string = response.authResponse.userID;

    this.fb.api(userId + "/likes").then((response) => this.loopThroughLikes(response)).catch((error: any) => console.error(error));
  }

  loopThroughLikes(response){

    let data = response.data;
    let dataLength: number = data.length;

    for (let index = 0; index < dataLength; index++) {
      const element =  data[index];
      this.userLikes.push(element);
    }

    let paging = response.paging; 

    if (paging != null){
      this.executePaging(paging.next);
    }
    else{
      console.log(this.userLikes);
    }

  }

  executePaging(link: string){
    this.http.get(link).subscribe(response => this.loopThroughLikes(response.json()));
  }

}

