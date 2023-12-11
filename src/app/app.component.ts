import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoogleLoginDirective } from './google-login/google-login.directive';
import { LoadGoogleApiService } from './google-login/load-google-api.service';
import { Subscription } from 'rxjs';
import { FbLoginDirective } from './facebook-login/fb-login.directive';
import { BmMapDirective } from './bingmaps/bm-map.directive';
import { BmMarkerDirective } from './bingmaps/bm-marker.directive';
import { BmAutosuggestDirective } from './bingmaps/bm-autosuggest.directive';
import { Coordinates } from './bingmaps/coordinates';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    GoogleLoginDirective,
    FontAwesomeModule,
    FbLoginDirective,
    BmMapDirective,
    BmMarkerDirective,
    BmAutosuggestDirective,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  #loadGoogle = inject(LoadGoogleApiService);

  credentialsSub!: Subscription;

  iconFacebook = faFacebook;

  coordinates: Coordinates = { latitude: 38.3245, longitude: -0.5 };

  ngOnInit(): void {
    this.credentialsSub = this.#loadGoogle.credential$.subscribe(
      (resp) => console.log(resp.credential) // Send this to your back-end
    );
  }

  ngOnDestroy(): void {
    this.credentialsSub.unsubscribe();
  }

  loggedFacebook(resp: fb.StatusResponse) {
    // Send this to your server
    console.log(resp.authResponse.accessToken);
  }

  showError(error: any) {
    console.error(error);
  }

  moveMap(coords: Coordinates) {
    this.coordinates = coords;
  }
}
