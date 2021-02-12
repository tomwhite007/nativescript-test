import { IEnvironment } from '@nativescript-test/xplat/core';
import { deepMerge } from '@nativescript-test/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
