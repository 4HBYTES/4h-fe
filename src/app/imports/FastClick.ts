/// <reference path="./typings/fastclick.d.ts" />

import * as FC from 'fastclick';

export class FastClick {

  public static attach(dom:HTMLElement):void {
    FC.attach(dom);
  }
}
