import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';

import Aura from '@primeng/themes/aura';
import { provideRouter } from '@angular/router';
import TruckRentalPreset from './style';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    
    // ✅ Use importProvidersFrom to include animations properly
    importProvidersFrom(BrowserAnimationsModule),

    providePrimeNG({
      ripple: true,
      theme: {
        preset: TruckRentalPreset
      }
    })
  ]
};
