export * as compiler from './compiler';
export * as imports from './imports';
export * as reactivity from './reactivity';
export * as template from './template';
export * as router from './router';
export * as directives from './directives';
export * as stores from './stores';
export * as middleware from './middlewares';

class AbstrCat {
  constructor(
    private readonly compiler: any,
    private readonly imports: any,
    private readonly reactivity: any,
    private readonly template: any,
    private readonly router: any,
    private readonly directives: any,
    private readonly stores: any,
    private readonly middleware: any
  ) {
    this.compiler = compiler;
    this.imports = imports;
    this.reactivity = reactivity;
    this.template = template;
    this.router = router;
    this.directives = directives;
    this.stores = stores;
    this.middleware = middleware;
  }

  start() {}
}

let started = false;

export function createApp() {
  const framework = new AbstrCat();

  if (started) {
    console.log('Abstrcat framework is already initialised');
    return;
  }

  framework.start();
}
