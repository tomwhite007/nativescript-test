import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@nativescript-test/xplat/core';
import { AppService } from '@nativescript-test/xplat/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
