import { NgModule } from '@angular/core';

// xplat
import { UIModule } from '@nativescript-test/xplat/nativescript/features';

const MODULES = [UIModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class SharedModule {}
