import { environmentBase } from './environment.base';
import { IEnvironment } from '@nativescript-test/xplat/core';
import { environmentProd } from '@nativescript-test/xplat/environments';

export const environment: IEnvironment = environmentBase(environmentProd, {
  // app level customizations here...
});