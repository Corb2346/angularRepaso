import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    /* componentes que existen en el modulo */
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    /* luego mostrar que elementos son visibles */

    exports:[
        ListadoComponent,
        HeroeComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule { }