import { NgModule } from '@angular/core';
import { TranslateModule } from 'ng2-translate/ng2-translate';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [TranslateModule.forRoot()],
  declarations: [HomeComponent]
})
export class HomeModule {}
