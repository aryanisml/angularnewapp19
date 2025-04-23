// /// <reference types="@angular/localize" />

// import { bootstrapApplication, createApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { createCustomElement } from '@angular/elements';
// import { AppComponent } from './app/app.component';

// const isStandalone = document.querySelector('planner-reservation') === null;

// if (isStandalone) {
//   // Normal Angular application for development with ng serve
//   bootstrapApplication(AppComponent, appConfig)
//     .catch(err => console.error('Error bootstrapping app:', err));
// } else {
//   // Custom element mode
//   createApplication(appConfig)
//     .then((appRef) => {
//       const injector = appRef.injector;
//       const appElement = createCustomElement(AppComponent, { injector });
      
//       // Check if element is already defined to avoid errors
//       if (!customElements.get('planner-reservation')) {
//         customElements.define('planner-reservation', appElement);
//       }
      
//       console.log('Custom element successfully registered');
//     })
//     .catch(err => console.error('Error creating application:', err));
// }

import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app/app.component';
import { Router } from '@angular/router';
// main.ts or app.module.ts


const isStandalone = document.querySelector('planner-reservation') === null;

if (isStandalone) {
  // Normal Angular application for development with ng serve
  bootstrapApplication(AppComponent, appConfig)
    .catch(err => console.error('Error bootstrapping app:', err));
} else {
  // Custom element mode
  createApplication(appConfig)
    .then((appRef) => {
      const injector = appRef.injector;
      const router = injector.get(Router);
      
      // Initialize base href for the router if needed
      const baseHref = document.querySelector('base')?.getAttribute('href') || '/';
      router.initialNavigation(); // This ensures the router starts navigating
      
      const appElement = createCustomElement(AppComponent, { injector });
      
      if (!customElements.get('planner-reservation')) {
        customElements.define('planner-reservation', appElement);
      }
      
      console.log('Custom element successfully registered');
    })
    .catch(err => console.error('Error creating application:', err));
}