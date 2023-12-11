import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideGoogleId } from './google-login/google-login.config';
import { provideFacebookId } from './facebook-login/facebook-login.config';
import { provideBingmapsKey } from './bingmaps/bingmaps.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideGoogleId(
      '1002957697747-v0fevraaubhn6dl6g2a474l92k2b0cg3.apps.googleusercontent.com'
    ),
    provideFacebookId('my-id', 'v15.0'),
    provideBingmapsKey('AmCsCCqcPEgBpcQEt-j_fZpvSQ_GhKqyvzOk1UiIb3vd1l1Usz51mj-K1uB9hvxl')
  ],
};
