import { Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'map-comp',
  templateUrl: './map.component.html'
})
export class MapComponent  {
  markers = []

  constructor() {
    var helsinki_airport = {lat: 60.3210442, lng: 24.9353509};
    var stockholm_airport = {lat: 59.3548147, lng: 17.940533};
    var gotheborg_airport = {lat: 57.6688019, lng: 12.2901253};
    var malmo_airport = {lat: 55.5355366, lng: 13.3701943};
    var copen_airport = {lat: 55.6180236, lng: 12.6485741};

    this.markers.push(helsinki_airport)
    this.markers.push(stockholm_airport)
    this.markers.push(gotheborg_airport)
    this.markers.push(malmo_airport)
    this.markers.push(copen_airport)
	}

  initMap(google): void{
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: {lat: 60.4245987, lng: 18.5186409}
    });

    // Only those that above the threshold, up to 3 cities
    // var top3choices = [gotheborg_airport]

    // for(var i = 0; i < top3choices.length; i++) {
    //   new google.maps.Polyline({
    //     path: [stockholm_airport, top3choices[i]],
    //     geodesic: true,
    //     strokeColor: '#f0bf29',
    //     strokeOpacity: 1.0,
    //     strokeWeight: 2,
    //     map: map
    //   });

    // }

    // new google.maps.Polyline({
    //   path: [helsinki_airport, stockholm_airport],
    //   geodesic: true,
    //   strokeColor: '#C8515F',
    //   strokeOpacity: 1.0,
    //   strokeWeight: 2,
    //   map: map
    // });
  }
}

