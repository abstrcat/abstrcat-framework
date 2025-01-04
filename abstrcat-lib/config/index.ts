import * as rootConfig from '../../config.cat.ts';
import * as defaultConfig from './default-config.cat.ts';

function getConfig() {
  const resultingConfig = { ...defaultConfig.default, ...rootConfig.default };

  return resultingConfig;
}

export { getConfig };
