import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection,
  APP_INITIALIZER
 } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { TranslationService } from './translation.service';
import Aura from '@primeng/themes/aura';
import { provideRouter } from '@angular/router';
// import TruckRentalPreset from './style';
// import '@primeng/themes/aura';
import { provideHttpClient } from '@angular/common/http';
import ExtendedTruckRentalPreset from './style';
// import { TruckRentalPreset } from '@penske-rentalnet/complex-ui';


export function initializeApp(translationService: TranslationService) {
  return () => translationService.initialize();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    
    // ✅ Use importProvidersFrom to include animations properly
    importProvidersFrom(BrowserAnimationsModule),

    providePrimeNG({
      ripple: true,
      theme: {
        preset: ExtendedTruckRentalPreset
      }
    }),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [TranslationService],
      multi: true
    }
  ]
};
