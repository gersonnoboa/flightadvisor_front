import { Component } from '@angular/core';
// import { FacebookService, InitParams, LoginResponse } from 'ngx-facebook';

@Component({
  selector: 'map-comp',
  templateUrl: './map.component.html'
//   styleUrls: ['./app.component.css']
})
export class MapComponent  {
//   title = 'app';

  constructor() {

	//   const params: InitParams = {
	//   	appId      : '421300974954114',
    //   cookie     : true,
    //   xfbml      : true,
    //   version    : 'v2.11'
	//   };

    // fb.init(params);


    this.initMap(null);
	}

  initMap(google): void{
    var helsinki_airport = {lat: 60.3210442, lng: 24.9353509};
    var stockholm_airport = {lat: 59.3548147, lng: 17.940533};
    var gotheborg_airport = {lat: 57.6688019, lng: 12.2901253};

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: {lat: 60.4245987, lng: 18.5186409}
    });

    // Only those that above the threshold, up to 3 cities
    var top3choices = [gotheborg_airport]

    for(var i = 0; i < top3choices.length; i++) {
      new google.maps.Polyline({
        path: [stockholm_airport, top3choices[i]],
        geodesic: true,
        strokeColor: '#f0bf29',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: map
      });

      new google.maps.Marker({
        position: top3choices[i],
        map: map
      });
    }
    
    var marker = new google.maps.Marker({
      position: helsinki_airport,
      map: map
    });

    new google.maps.Marker({
      position: stockholm_airport,
      map: map
    });

    new google.maps.Polyline({
      path: [helsinki_airport, stockholm_airport],
      geodesic: true,
      strokeColor: '#C8515F',
      strokeOpacity: 1.0,
      strokeWeight: 2,
      map: map
    });
    
    //this.fb.login().then((response: LoginResponse) => console.log(response)).catch((error: any) => console.error(error));
  }
}

