import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations:[
        NavbarComponent
    ],
    exports:[
    NavbarComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule
    ]


})
export class SharedModule {

}