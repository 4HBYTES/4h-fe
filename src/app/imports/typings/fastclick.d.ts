/**
 * @types/fastclick was not used because of this :
 * https://github.com/ftlabs/fastclick/issues/150
 */
interface FastClickConstructor {
  attach(dom:HTMLElement):void;
}

declare var FastClick:FastClickConstructor;

declare module 'fastclick' {
  export = FastClick;
}
