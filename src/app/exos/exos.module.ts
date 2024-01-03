import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExosRoutingModule } from './exos-routing.module';
import { ExosComponent } from './exos.component';
import { Exo1Component } from './exo1/exo1.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExosComponent, Exo1Component],
  imports: [CommonModule, ExosRoutingModule, FormsModule],
  providers: [],
})
export class ExosModule {}
