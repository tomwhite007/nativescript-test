import { environmentBase } from './environment.base';
import { IEnvironment } from '@nativescript-test/xplat/core';
import { environmentDev } from '@nativescript-test/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentDev, {
  // app level customizations here...
});