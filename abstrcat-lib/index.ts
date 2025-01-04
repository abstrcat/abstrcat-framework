import * as Config from './config';

// export * as Imports from './imports';
// export * as Reactivity from './reactivity';
// export * as Template from './template';
// export * as Router from './router';
// export * as Directives from './directives';
// export * as Stores from './stores';
// export * as Middleware from './middlewares';

class AbstrCat {
  constructor(
    private readonly Config: any
    // private readonly Imports: any = Imports,
    // private readonly Reactivity: any = Reactivity,
    // private readonly Template: any = Template,
    // private readonly Router: any = Router,
    // private readonly Directives: any = Directives,
    // private readonly Stores: any = Stores,
    // private readonly Middleware: any = Middleware
  ) {
    this.Config = Config;
    // this.Imports = Imports;
    // this.Reactivity = Reactivity;
    // this.Template = Template;
    // this.Router = Router;
    // this.Directives = Directives;
    // this.Stores = Stores;
    // this.Middleware = Middleware;
  }

  start() {}
}

let started = false;

export function createApp() {
  const framework = new AbstrCat(Config.getConfig());

  if (started) {
    console.log('Abstrcat framework is already initialised');
    return;
  }

  framework.start();
  console.log(framework);
}
