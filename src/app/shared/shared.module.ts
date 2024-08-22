import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelDirective } from './test.directive';



@NgModule({
  declarations: [
    CustomLabelDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [CustomLabelDirective]
})
export class SharedModule { }
