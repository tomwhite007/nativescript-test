import { IEnvironment } from '@nativescript-test/xplat/core';
import { deepMerge } from '@nativescript-test/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentDev = deepMerge(environmentBase, <IEnvironment>{
  // customizations here...
});
