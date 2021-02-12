
import "zone.js/dist/zone";
import "zone.js/dist/zone-testing";
import { BrowserDynamicTestingModule,
  platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { LoginComponent } from "./login.component";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeAll(() => {
    TestBed.resetTestEnvironment();
      TestBed.initTestEnvironment(BrowserDynamicTestingModule,
       platformBrowserDynamicTesting())
  });

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [RouterTestingModule],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
