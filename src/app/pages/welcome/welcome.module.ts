import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { WelcomeComponent } from './welcome.component';
import { SoundsComponent } from './sounds/sounds.component';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    NzGridModule,
    NzDividerModule,
    NzSliderModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule
  ],
  declarations: [WelcomeComponent, SoundsComponent],
  exports: [WelcomeComponent],
  providers: [{ provide: NzMessageService }],
})
export class WelcomeModule {}
