import { Routes } from '@angular/router';
import { LibraryDemoComponent } from './library-demo/library-demo.component';
import { TruckReservationComponent } from './truck-reservation/truck-reservation.component';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';

export const routes: Routes = [
    { 
        path: '',
        component: TruckReservationComponent
      },
      { 
        path: 'library',
        component: LibraryDemoComponent,
        children :[
            {
                path :'reservationcard',
                component:ReservationCardComponent
            }
        ]
      },
      // Redirect any unknown paths to the default route
      { 
        path: '**', 
        redirectTo: '' 
      }

];
