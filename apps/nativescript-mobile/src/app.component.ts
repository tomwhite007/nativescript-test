import { Component } from '@angular/core';
import { AppService } from '@nativescript-test/xplat/nativescript/core';
import { AppBaseComponent } from '@nativescript-test/xplat/nativescript/features';

@Component({
  selector: 'nativescript-test-root',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
