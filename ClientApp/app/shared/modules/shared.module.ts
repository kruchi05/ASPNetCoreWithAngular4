import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { myFocus } from '../../directives/focus.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [myFocus],
    providers: []
})
export class SharedModule { }