import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ServersComponent } from './servers/servers';
import { CotxesComponent } from './cotxes/cotxes';
import { PaisComponent } from './pais/pais';
import { Pais2Component } from './pais2/pais2';
import { ExternComponent } from './extern/extern';
import { FormulariPost } from './formulari-post/formulari-post';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    { path: 'home', component: HomeComponent },
    { path: 'servers', component: ServersComponent },
    { path: 'cotxes', component: CotxesComponent },
    { path: 'pais', component: PaisComponent },
    { path: 'pais2', component: Pais2Component },
    { path: 'form-post', component: FormulariPost },
    
    // Si no existeix la ruta porta a Extern Component
    { path: '**', component: ExternComponent }, 
];
